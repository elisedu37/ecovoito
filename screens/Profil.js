import React, { Component, useState, setState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Infos from '../components/Infos';
import { Colors } from '../components/Colors';
import OldRoute from '../components/OldRoute';
import Footer from '../components/Footer';
import { auth, db, storage } from '../config/firebase';

export default class Profil extends Component {
  state = { 
    url: '',
    user: {
      firstName: '',
      lastName: '',
      adress: '', 
      postalCode: '',
      city: '',
      role: '',
      isLoading: false
    }
  }
  user = auth.currentUser;
    constructor(props) {
        super(props);
        this.getUser();
        this.getLogos();
        db.collection('Users').doc(auth.currentUser.uid).onSnapshot(doc => {
          this.setState({
            user: {
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              city: doc.data().city,
            }})
        })
      }

      getLogos = () => {
        var imageRef = storage.ref().child("images/" + auth.currentUser.email);
        imageRef.getDownloadURL()
        .then((url) => {
          this.setState({url});
        }); 
      }

      
      getUser = async () => {
        const user = auth.currentUser;
       await db.collection('Users').doc(user.uid).get();
      }

      render() {
        if(this.state.isLoading){
          return(
            <View style={styles.preloader}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
          )
        }   
  return (
    <View style={styles.container}>

<ScrollView>

        <View style={styles.header}>
            <View style={styles.titleBar}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color={Colors.secondary}>
              </Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="cog-outline"
                size={24}
                color={Colors.secondary}></Ionicons>
            </TouchableOpacity>

            </View>
        </View>
      <View style={styles.profil}>

      {this.state.url ?
        <Image
              source={{uri: this.state.url}}
              style={styles.imgProfil}
            />
            : 
            null}
            <View style={styles.infoContainer}>
            <Text style={styles.nom}>{this.state.user.lastName} {this.state.user.firstName}</Text>
            <Text style={styles.subText}>132</Text>
            <Text style={styles.subText}>abonnees</Text>
          </View>
      
      <View style={styles.statsContainer}>

      <View style={styles.statsBox}>
              <Ionicons name="key-outline" size={24} color="#52575D"/>
              <Text style={styles.subText}>Suivre</Text>
            </View>

            <View style={[styles.statsBox]}>
              <Ionicons name="at-outline" size={25} color="#52575D"/>
              <Text style={styles.subText}>Salarie</Text>
            </View>
            <View style={styles.statsBox}>
              <Ionicons
                name="mail-outline"
                size={24}
                color="#52575D"/>
              <Text style={styles.subText}>Contacter</Text>
            </View>

            </View>
            </View>
            <View style={styles.infoProfil}>
                  <Text style={styles.titre}>Informations </Text>
                  <View style={styles.colonne}>
                    <Infos text="23 ans" image={require('../assets/img/anniversaire.png')} />
                    <Infos text="5/5" image={require('../assets/img/etoile.png')} />
                    <Infos text="Le Puy" image={require('../assets/img/lieux.png')} />
                  </View>
         </View> 

         <Text style={styles.titre}>Anciens covoiturage </Text>
         <View style={styles.boxOldRoute}>

          <OldRoute nom="Nathan" work="Salarié décathon" depart="Puy en Velay" destination="Val le Puy"/>
          <OldRoute nom="Nathan" work="Salarié décathon" depart="Puy en Velay" destination="Val le Puy"/>
          </View>

        </ScrollView> 
        <Footer/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  colonne: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  titre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.tertiary,
    padding: 10,
  },

  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },

  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },

  subText: {
    fontSize: 12,
    color: Colors.tertiary,
    textTransform: 'uppercase',
    fontWeight: '500',
  },

  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    padding: 10,
    width: '100%',
    backgroundColor: Colors.tertiary,
    height: 250,
  },
  profil: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    margin: 20,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 19,
    elevation: 5,
    marginTop:-100,
  },
  infoProfil: {
    backgroundColor: Colors.primary,
    margin: 20,
    marginTop: 0,
  },
  imgProfil: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -70,
  },
  nom: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    color: Colors.tertiary,
  },

  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  boxOldRoute:{
    justifyContent:'center',
    alignItems:'center',
  }
});
