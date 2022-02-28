import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Colors } from './Colors';

export default function Question(props) {
  return (
    <View style={styles.boxFAQ}>
        <Text>{props.question} </Text>
        <Image
          source={require('../assets/img/downArrow.png')}
          style={styles.fleche}
        />
      </View>
  );
}

const styles = StyleSheet.create({
   
  fleche: {
    width: 10,
    height: 10,
    borderRadius: 20,
  },
  boxFAQ: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
  }
});
