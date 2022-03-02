import React, { useState, useEffect } from 'react'
import {  Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function MapScreen() {
  const [coordinates] = useState([
    {
      latitude: 45.04265213012695,
      longitude: 3.8866987228393555,
    },
    {
      latitude: 45.03820874194082,
      longitude: 3.883000981235631,
    },
  ]);
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDPzW9WexAPy_FL6A8K_qseJIvWxZ9H3ns';
const MapData=[];
  return (
    <View style={styles.container}>

<GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDPzW9WexAPy_FL6A8K_qseJIvWxZ9H3ns' ,
        language: 'en',
      }}
      styles={{container:{flex:0, position:"absolute", width:'100%', zIndex:1, top:10}, listView:{backgroundColor:"white"}}}
    />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates[0].latitude, 
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
           <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY} 
          strokeWidth={4}
          strokeColor="#111111"
          onReady={result => {
            MapData.distance = result.distance
            MapData.duration = result.duration
            console.log(`Distance: ${result.distance} km`)
            console.log(`Durée: ${result.duration} min`)
            
          }}
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        
      </MapView>
          <View style={styles.data}>
          <Text>distance : {MapData.distance} km, durée : {MapData.duration} min</Text>
          </View>

    </View> );
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
  data:{
    backgroundColor:'white',
    width:'100%',
    bottom:0,
    zIndex:1, 
    position:'absolute',
  }
});