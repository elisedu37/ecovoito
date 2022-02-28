import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function IllustratedText(props) {
  return (
    <View style={styles.box}>
      <View style={styles.illustration}>
      <Image
        source={props.image}
        style={styles.image} 
      />
      </View>
      <Text style={styles.texte}>{props.texte}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    margin:15,
  },

  illustration: {
    height: 100,
    width:'40%',
    justifyContent: 'center',
        alignItems: 'center',
  },

  texte:{
    width:'60%',
  },
  image:{
    justifyContent: 'center',
        alignItems: 'center',
  }
});
