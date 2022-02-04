import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import { Colors } from './Colors';

//import { Card } from 'react-native-paper';

export default function Button(props) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, {backgroundColor:props.bg}, {color:props.textcolor}]}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:10,
    borderRadius: 19,
    width: '80%',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 19,
    elevation: 1,
    //'Montserrat': require('../assets/fonts/Montserrat-Medium.ttf'),
    //fontFamily: "Montserrat",
  }
});
