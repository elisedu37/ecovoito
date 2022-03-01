import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Colors } from './Colors';

export default function ClassementBox(props) {
  return (
    <View style={styles.box}>
      <View style={styles.colonne1}>
      <Image
        source={props.logo}
        style={styles.img}></Image>
        </View>
      <View style={styles.colonne2}>
        <Text style={styles.texte}>{props.work}</Text>
        <Text style={styles.sousTexte}>{props.lieu}</Text>
      </View>
      <View style={styles.colonne3}>
        <Text style={styles.texte}>{props.point} points</Text>
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
    marginBottom: 10,
    backgroundColor:'rgba(187, 150, 109, 0.5)',
    borderRadius:10,
  },

  img: {
    width: 30,
    height: 30,
  },
  texte:{
    fontSize:13,
    paddingLeft:5,
  },
  sousTexte:{
    fontSize:10,
    paddingLeft:5,

  },

  colonne1:{
    width:'15%',
  },
  colonne2:{
    width:'42%',
  },
  colonne3:{
    width:'43%',
  },
});
