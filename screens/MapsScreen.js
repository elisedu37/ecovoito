import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
const GOOGLE_PLACES_API_KEY = 'AIzaSyDPzW9WexAPy_FL6A8K_qseJIvWxZ9H3ns'; 
import MapViewDirections from 'react-native-maps-directions';


const MapsScreen = () => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDPzW9WexAPy_FL6A8K_qseJIvWxZ9H3ns';
  const MapData=[];

  const [regionCoords, setRegion] = useState({ lat: 45.042768, lng:3.882936 });
  const [marker, setMarker] = useState({ lat: 45.042768, lng: 3.882936  });

  const [regionCoordsTwo, setRegionTwo] = useState({ lat: 45.7797, lng: 3.08694 });
  const [markerTwo, setMarkerTwo] = useState({ lat: 45.7797, lng: 3.08694 });

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
  return (
    <View style={styles.container}>
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
            MapData.distance = result.distance
            MapData.duration = result.duration
            console.log(`Distance: ${result.distance} km`)
            console.log(`Durée: ${result.duration} min`)
          }}
        />

        <Marker coordinate={{ latitude: marker.lat, longitude: marker.lng }} />
        <Marker coordinate={{ latitude: markerTwo.lat, longitude: markerTwo.lng }} />

      </MapView>

      <GooglePlacesAutocomplete
      styles={{container:{flex:0, position:"absolute", width:'100%', zIndex:1, top:10}, listView:{backgroundColor:"white"}}}
      placeholder="Search"
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
      styles={{container:{flex:0, position:"absolute", width:'100%', zIndex:1, top:100}, listView:{backgroundColor:"red"}}}
      placeholder="Search"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
});

export default MapsScreen;
