import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
const GOOGLE_PLACES_API_KEY = 'AIzaSyDPzW9WexAPy_FL6A8K_qseJIvWxZ9H3ns';
import MapViewDirections from 'react-native-maps-directions';
import { Colors } from '../components/Colors';
import Footer from '../components/Footer';
import { auth, db, storage } from '../config/firebase';

let state = {
  reduction: 0,
}

const MapsScreen = ({ navigation, route }) => {
  const modetransport = route.params.text;
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDPzW9WexAPy_FL6A8K_qseJIvWxZ9H3ns';
  const MapData=[];

  const [regionCoords, setRegion] = useState({ lat: 0, lng:0 });
  const [marker, setMarker] = useState({ lat: 0, lng: 0  });

  const [regionCoordsTwo, setRegionTwo] = useState({ lat: 0, lng: 0 });
  const [markerTwo, setMarkerTwo] = useState({ lat: 0, lng:0 });

  const onPress = (data, details) => {
    setRegion(details.geometry.location);
    setMarker(details.geometry.location);
    console.log(regionCoords.lat)
    console.log(regionCoords.lng)
  };

  const onPressTwo = (data, details) => {
    setRegionTwo(details.geometry.location);
    setMarkerTwo(details.geometry.location);
    console.log(regionCoords.lat)
    console.log(regionCoords.lng)

  };

  let km = 0.193
  let distance = 1.963;
  let reduction = 0;


  if (modetransport === 'vélo'){
    reduction = distance * km;
    db.collection('Users').doc(auth.currentUser.uid).update({
      reduction: reduction,
    }); 
  }
  else if (modetransport === 'voiture'){
    reduction = 0;
    db.collection('Users').doc(auth.currentUser.uid).update({
      reduction: reduction,
    }); 
  }
  else if (modetransport === 'transportCommun'){
    reduction = (distance * km) *2;
    db.collection('Users').doc(auth.currentUser.uid).update({
      reduction: reduction,
    }); 
  }






  let Point = 0;

  if (modetransport === 'vélo'){
    if (distance <= 5 ){
      Point = 5;
    }
    else if (distance > 5 && distance <= 10){
      Point = 10;
    }
    else if (distance > 10 && distance <= 20){
      Point = 20;
    }
    else if (distance > 20){
      Point = 30;
    }
  }
  else if (modetransport === 'transportCommun'){
    if (distance <= 10 ){
      Point = 7;
    }
    else if (distance > 10 && distance <= 25){
      Point = 15;
    }
    else if (distance > 25 && distance <= 40){
      Point = 30;
    }
    else if (distance > 40){
      Point = 45;
    }
  }
  return (
      <>
        <View style={styles.container}>
          {
            regionCoordsTwo.lat != 0 && regionCoords.lat != 0 &&
            <MapView
                style={styles.map}
                region={{
                  latitude: regionCoords.lat,
                  longitude: regionCoords.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>

              <MapViewDirections
                  origin={{ latitude: marker.lat, longitude: marker.lng }}
                  destination={{ latitude: markerTwo.lat, longitude: markerTwo.lng }}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={4}
                  strokeColor="#111111"
                  onReady={result => {
                    MapData.distance = result.distance;
                    MapData.duration = result.duration;
                    console.log(`Distance: ${result.distance} km`);
                    console.log(`Durée: ${result.duration} min`);
                    console.log(MapData.distance);
                  }}
              />
              <Marker coordinate={{ latitude: marker.lat, longitude: marker.lng }}/>
              <Marker coordinate={{ latitude: markerTwo.lat, longitude: markerTwo.lng }}/>

            </MapView>
          }
          <View style={styles.containerTop}>
            <View style={styles.containerTopLeft}>
              {
                regionCoordsTwo.lat != 0 && regionCoords.lat != 0 &&
                <Text style={styles.textTop}>Réduction de CO2 : {reduction}</Text>
              }
              {
                regionCoordsTwo.lat != 0 && regionCoords.lat != 0 &&
                <Text style={styles.textBot}>Points gagné : {Point}</Text>
              }
            </View>
            <View style={styles.containerTopRight}>
              {
                regionCoordsTwo.lat != 0 && regionCoords.lat != 0 &&
                <TouchableOpacity onPress={() => navigation.navigate('Analyse', reduction, Point)} style={styles.bouton}>
                  <Text style={styles.textButton}>Confirmer</Text>
                </TouchableOpacity>
              }
            </View>
          </View>
          <GooglePlacesAutocomplete
              styles={{container:{flex:0, position:"absolute", width:'80%', zIndex:1, top:50, }}}
              placeholder="Depart"
              query={{
                key: GOOGLE_PLACES_API_KEY,
                language: 'en',
              }}
              GooglePlacesDetailsQuery={{
                fields: 'geometry',
              }}
              fetchDetails={true}
              onPress={onPress}
              onFail={(error) => console.error(error)}
              requestUrl={{
                url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                useOnPlatform: 'web',
              }} // this in only required for use on the web. See https://git.io/JflFv more for details.
          />

          <GooglePlacesAutocomplete
              styles={{container:{flex:0, position:"absolute", width:'80%', zIndex:0, top:100}}}
              placeholder="Destination"
              query={{
                key: GOOGLE_PLACES_API_KEY,
                language: 'en',
              }}
              GooglePlacesDetailsQuery={{
                fields: 'geometry',
              }}
              fetchDetails={true}
              onPress={onPressTwo}
              onFail={(error) => console.error(error)}
              requestUrl={{
                url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                useOnPlatform: 'web',
              }}
          />



        </View>
        <Footer />
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  containerTop: {
    marginTop: 170,
    justifyContent: 'space-between',
    flex:2,
    flexDirection: 'row',
    paddingBottom:520,
  },
  containerTopLeft: {
    width: '60%',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 10,
    height: 80,
  },
  containerTopRight: {
    width: '30%',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 10,
    position: 'relative',
    height: 80,
  },
  bouton: {
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    color: Colors.tertiary,
    height: 60,
    zIndex: 50,
  },
  map: {
    left: 10,
    right: 10,
    bottom: 0,
    position: 'absolute',
    height:400,
  },
  textBot: {
    zIndex:5,
    color: Colors.tertiary,
    fontSize: 19,
    fontWeight: 'bold',
  },
  textButton: {
    zIndex:5,
    color: Colors.tertiary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textTop: {
    zIndex:6,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.tertiary,
    textAlign: 'center',
  },
});

export default MapsScreen;
