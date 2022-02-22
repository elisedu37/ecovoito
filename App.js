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
import setAccount from './forms/setAccount';
import Loader from './components/Loader';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './config/firebase';

const Stack = createNativeStackNavigator();


const MyStack = () => {
  const user = auth.currentUser;
  console.log(user);
  return (
    <>
        <NavigationContainer>
          <Stack.Navigator>
          {user == null ? (

            <Stack.Screen name="LogIn" component={LogIn} /> 

          ) : (
            <Stack.Screen name="HomeScreen" component={Home} />  

          )} 
            <Stack.Screen name="Generate" component={QRCodeGenerator} />  
            <Stack.Screen name="Scan" component={ScanQRCode} />  
            <Stack.Screen name="Login" component={LogIn} />  
            <Stack.Screen name="Account" component={setAccount} />
            <Stack.Screen name="Signin" component={SignIn} />  
            <Stack.Screen name="HomeScreen" component={Home} />  
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </>
  );
};
export default MyStack;
  
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

