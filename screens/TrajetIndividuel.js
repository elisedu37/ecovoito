import * as React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity, FlatList} from 'react-native';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ChoixTransport from '../components/ChoixTransport';
import Footer from '../components/Footer';
import {useState} from "react";

export default function TrajetIndividuel({ navigation }) {
  return (
      <>
    <View style={styles.container}>
      <View>
      <View style={styles.titleBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                source={require('../assets/loader-icon.png')}
                style={styles.imgCovoit}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
              <Image
                source={require('../assets/img/compte.png')}
                style={styles.imgCovoit}
                />
            </TouchableOpacity>
          </View>
      </View>
      <Text style={styles.titre}>CRÉATION DE MON TRAJET INDIVIDUEL</Text>
      <View >

      <TouchableOpacity onPress={() => navigation.navigate('Map', {text: "voiture"})}>
        <ChoixTransport
          name="VEHICULE MOTORISE"
          bg={Colors.secondary}
          textcolor={Colors.tertiary}
          image={require('../assets/img/voiture.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Map', {text: "transportCommun"})}>
        <ChoixTransport
          name="TRANSPORT EN COMMUN"
          bg={Colors.secondary}
          textcolor={Colors.tertiary}
          image={require('../assets/img/bus.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Map', {text: "vélo"})}>
          <ChoixTransport
            name="VEHICULE NON-MOTORISE"
            bg={Colors.secondary}
            textcolor={Colors.tertiary}
            image={require('../assets/img/velo.png')}
          />
      </TouchableOpacity>
      </View>    
      </View>
    <Footer />

    </>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2EDD0',
      width: '100%',
    },
    titleBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
      marginHorizontal: 16,
      marginBottom:30,
    },
    bouton:{
      justifyContent: 'center',
      alignItems:'center',
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
    icone:{
        padding:15,
        backgroundColor: Colors.tertiary,
        borderRadius:50,
    },
    image:{
        width:30,
        height:30,
    },
  });