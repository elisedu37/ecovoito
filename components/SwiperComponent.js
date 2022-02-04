import React, { Component } from 'react'
import { Image, AppRegistry, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../components/Colors';

import Swiper from 'react-native-swiper/src'
import Button from './Button'
 
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFE9CC',
  },
  slide1: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    margin:'auto',
    fontSize: 27,
    fontWeight: 'bold',
    padding:10,
    borderRadius:30,
    width:"80%",
    height:"80%",
    shadowOpacity:1,
    shadowRadius:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  text: {
    color: '#275E47',
    fontSize: 27,
    fontWeight: 'bold'
  },
  image: {
    width:50,
    height:50,
    },
})
 
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} dotColor={"white"} activeDotColor={"#707070"}>
        <View style={styles.slide1}>
        <Image source={require('../assets/favicon.png')} style={styles.image}/>

          <Text style={styles.text}>Une application de challenge covoiturage inter-entreprises</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Vous voulez reduire la taxe carbone de votre entreprise</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>ECOVOITO c est :</Text>
          <Text style={styles.text}>- reduire l emission de CO2 produite par le salarie</Text>
          <Text style={styles.text}>- une plateforme de covoiturage a votre disposition </Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Classement</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}> C est a votre tour de vous challenger</Text>
          <Button name="Inscription" bg={Colors.secondary} textcolor={Colors.tertiary}/>
        </View>
      </Swiper>
    )
  }
}
 
AppRegistry.registerComponent('myproject', () => SwiperComponent)