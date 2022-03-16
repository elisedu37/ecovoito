import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Constants from 'expo-constants';
import { Colors } from './Colors';

export default function ChoixTransport(props) {
  return (
    <View style={styles.container}>
        <View style={styles.icone}>
            <Image
            source={props.image}
            style={styles.image} 
            />
      </View>
        <Text style={[styles.text, {backgroundColor:props.bg}, {color:props.textcolor}]}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    padding:20,
  },
  icone:{
    padding:15,
    backgroundColor: Colors.tertiary,
    borderRadius:50,
  },
  text: {
      marginTop:-10,
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
    
  },
  image:{
    width:30,
    height:30,
    resizeMode: "contain",
  },

});
