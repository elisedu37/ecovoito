import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Constants from 'expo-constants';
import { Colors } from './Colors';

export default function Infos(props) {
  return (
   <View style={styles.content}>
      <Image
        style={styles.img}
        source={require('../assets/img/google.png')}
      /> 
      <Text style={[styles.paragraph]}>{props.text}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: 10,
    marginBottom: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tertiary,
    borderRadius:10,
    padding:10,
    alignItems:'center',
  },
  paragraph:{
    color:Colors.secondary,
  },
  img:{
    width:30,
    height:30,
  }
});
