import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function IllustratedText(props) {
  return (
    <View style={styles.box}>
      <Image
        source={props.image}
        style={styles.illustration} 
      />
      <Text style={styles.texte}>{props.texte}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },

  illustration: {
    height: 100,
    width:'40%',
  },

  texte:{
    width:'60%',
  }
});
