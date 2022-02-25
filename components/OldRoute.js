import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Colors } from './Colors';

export default function OldRoute(props) {
  return (
    <View style={styles.box}>
      <Image
        source={require('../assets/img/google.png')}
        style={styles.img}></Image>
      <View>
        <Text style={styles.texte}>{props.nom}</Text>
        <Text style={styles.sousTexte}>{props.work}</Text>
      </View>
      <View>
        <Text style={styles.texte}>{props.depart}</Text>
        <Text style={styles.texte}>{props.destination}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    padding: 5,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 19,
    elevation: 1,
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 2,
    marginBottom: 10,
  },

  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  texte:{
    fontSize:13,
    paddingLeft:5,
  },
  sousTexte:{
    fontSize:10,
    paddingLeft:5,

  }
});
