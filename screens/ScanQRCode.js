import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Constants from 'expo-constants';
import { Colors } from '../components/Colors';
import Footer from '../components/Footer';
import ScanQRCode from "../components/ScanQRCode";

export default function QRCode() {
  return (
    <View style={styles.container}>
          <ScanQRCode/>
          <Footer style={styles.footer} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD0',
  },
  footer:{
      flex:1,
  }
});