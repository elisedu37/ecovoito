import React from 'react'
import {  Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen() {
  

  return (
    <View style={styles.container}>
    <MapView  style={styles.map} /> 
  </View>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width:1000,
    height:1000,
  },
});