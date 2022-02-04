import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Constants from 'expo-constants';
import { Colors } from '../components/Colors';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <View style={styles.container}>
      <Button name="Inscription" bg={Colors.secondary} textcolor={Colors.tertiary}/>
      <Button name="Connexion" bg={Colors.tertiary} textcolor={Colors.secondary}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD0',
  },
});
