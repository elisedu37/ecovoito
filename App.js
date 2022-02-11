import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanQRCode from "./components/ScanQRCode";
import QRCodeGenerator from "./components/QRCodeGenerator";
import Footer from "./components/Footer";
import Home from './screens/Home';
import LogIn from './forms/logIn';
import SignIn from './forms/signIn';
import MapScreen from './screens/MapScreen';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Scan" component={ ScanQRCode } />
            <Stack.Screen name="Generate" component={ QRCodeGenerator } />
            <Stack.Screen name="SignIn" component={ SignIn } />
            <Stack.Screen name="LogIn" component={ LogIn } />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default MyStack;

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MapScreen/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

