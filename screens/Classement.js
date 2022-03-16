import React, { UseEffect, Component, setState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Footer from '../components/Footer';
import ClassementBox from '../components/ClassementBox';
import { db, auth, storage } from '../config/firebase';

export default class Classement extends Component {
  state = {
    companies: [],
  }
  constructor(props) {
    super(props);
    this.getCompanies();
    db.collection("Company")
    .orderBy('points', 'desc')
    .onSnapshot(docs => {
    let companies = [];
    docs.forEach(doc => {
      companies.push(doc.data())
    })
    this.setState({ companies })
    })
  }

  getCompanies = async () => {
    await db.collection('Company').get();
  }

  render() {    
  return (
      <>
    <View style={styles.container}>
      <ScrollView>
    <View>
      <View style={styles.titleBar}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Image
                source={require('../assets/loader-icon.png')}
                style={styles.imgCovoit}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
              <Image
                source={require('../assets/img/compte.png')}
                style={styles.imgCovoit}
                />
            </TouchableOpacity>
      </View>
    </View>
      <Text style={styles.titre}>LE CLASSEMENT </Text>
      {this.state.companies.map((company, index) => <View key={index} style={styles.box}>
      <ClassementBox key={index} position="2" logo={company.downloadURL} work={company.name} lieu={company.city} point={company.points}/>
      </View>)}
      </ScrollView>

    </View>

    <Footer />

    </>
  );
  }
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2EDD0',
      width: '100%',
      padding: 20,
    },
    titleBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
      marginHorizontal: 16,
      marginBottom:30,
    },
    imgCovoit: {
        width: 40,
        height: 40,
      },
      titre: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.tertiary,
        padding: 10,
      },
      box:{
        justifyContent:'center',
        alignItems:'center',
      }
  });
  