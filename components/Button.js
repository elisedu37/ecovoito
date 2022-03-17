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
    justifyContent:'center',
    alignItems: 'center',
    padding:20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:10,
    borderRadius: 19,
    width: '100%',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 19,
    elevation: 1,
    
  }
});
