import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function TextChecked(props) {
  return (
    <View style={styles.box}>
      <Image
        source={require('../assets/img/checkIcon.png')}
        style={styles.img}
      />
      <Text style={styles.texte}>
        {props.texte}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
   box: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },

  img: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },

  texte : {
    padding:5,
  }
});
