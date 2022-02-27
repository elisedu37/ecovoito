import React, { Component } from 'react'
import { Image, AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../components/Colors';

import Swiper from 'react-native-swiper/src'
import Button from './Button'
 import IllustratedText from './IllustratedText'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFE9CC',
  },
  slide1: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    padding:10,
    borderRadius:30,
    width:"80%",
    height:"60%",
    shadowOpacity:1,
    shadowRadius:2,
    justifyContent: 'center',
    alignItems: 'center',
    margin:'auto',
    marginLeft:'10%',
    marginBottom:'15%',
    marginTop:'15%',
  },
 
  text: {
    color: '#275E47',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:"center",
    margin:10,
  },
  image: {
    width:200,
    height:100,
    },
})
 
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} dotColor={"white"} activeDotColor={"#707070"}>
        <View style={styles.slide1}>
          <Text style={styles.text}>UNE APPLICATION DE "CHALLENGE" ENTRE ENTREPRISES</Text>
          <Image source={require('../assets/CarIllustration.png')} style={styles.image}/>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>VOUS VOULEZ RÉDUIRE L'ÉMISSION DE CO2 DE VOTRE ENTREPRISE ?</Text>
          <Text style={styles.text}>ECOVOITO EST FAIT POUR VOUS !</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>ECOVOITO c est :</Text>
          <IllustratedText texte="Évaluer et réduire l'émission de CO2 produite par les salariés" image={require('../assets/img/reductionCO2.png')} />
          <IllustratedText texte="Un challenge entre entreprise ! Qui sera la meilleure entreprise ?" image={require('../assets/img/challenge.png')} />
          <IllustratedText texte="Une solution de covoiturage pour vous !" image={require('../assets/img/covoiturage.png') } />
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Et pourquoi pas la votre ?</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>C'EST À VOTRE TOUR DE VOUS CHALLENGER !</Text>
          <Button name="COMMENCER" bg={Colors.secondary} textcolor={Colors.tertiary}/>
        </View>
      </Swiper>
    )
  }
}
 
AppRegistry.registerComponent('myproject', () => SwiperComponent)