import React from 'react';
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

export default function Profil({navigation}) {
  return (
    <View style={styles.container}>

<ScrollView>

        <View style={styles.header}>
            <View style={styles.titleBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>

              <Ionicons
                name="ios-arrow-back"
                size={24}
                color={Colors.secondary}></Ionicons>
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

        <Image
              source={require('../assets/img/imgProfil.jpg')}
              style={styles.imgProfil}
            />
            <View style={styles.infoContainer}>
            <Text style={styles.nom}>Filipine Monvoisin</Text>
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
                    <Infos text="23 ans" />
                    <Infos text="5/5" />
                    <Infos text="Le Puy" />
                  </View>
         </View> 

         <Text style={styles.titre}>Anciens covoiturage </Text>
         <View style={styles.boxOldRoute}>

          <OldRoute nom="Nathan" work="Salarié décathon" depart="Puy en Velay" destination="Val le Puy"/>
          <OldRoute nom="Nathan" work="Salarié décathon" depart="Puy en Velay" destination="Val le Puy"/>
          </View>

          <Text style={styles.titre}>Centres d interet </Text>
          <View style={styles.colonne}>
            <Infos text="sport" />
            <Infos text="musique" />
            <Infos text="parler" />
          </View>

        </ScrollView> 
        <Footer/>
    </View>
  );
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
    elevation: 1,
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
