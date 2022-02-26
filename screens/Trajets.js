import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Constants from 'expo-constants';
import { Colors } from '../components/Colors';
import Footer from '../components/Footer';

export default function Trajets() {
  return (
    <View style={styles.container}>
          <Text>Trajets</Text>
          <Footer />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD0',
  },
});
