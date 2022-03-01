import React, { useState, useEffect } from 'react'
import {  Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function MapScreen() {
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDPzW9WexAPy_FL6A8K_qseJIvWxZ9H3ns';

  return (
    <View style={styles.container}>

<GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: {GOOGLE_MAPS_APIKEY} ,
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
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        
      </MapView>
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
});