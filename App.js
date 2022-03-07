import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanQRCode from "./screens/ScanQRCode";
import QRCode from "./screens/QRCode";
import Footer from "./components/Footer";
import Home from './screens/Home';
import LogIn from './forms/logIn';
import SignIn from './forms/signIn';
import setAccount from './forms/setAccount';
import Loader from './components/Loader';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './config/firebase';
import QuiSommesNous from './screens/QuiSommesNous';
import Classement from './screens/Classement';
import Accueil from './screens/Accueil';
import Trajets from './screens/Trajets';
import Analyse from './screens/Analyse';
import Profil from './screens/Profil';
import setRole from './forms/setRole';
import setCompany from './forms/setCompany';
import resetPassword from './forms/resetPassword';
import TrajetIndividuel from './screens/TrajetIndividuel';

const Stack = createNativeStackNavigator();


const MyStack = () => {
  const user = auth.currentUser;
  console.log(user);
  return (
    <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          {user == null ? (

            <Stack.Screen name="Login" component={LogIn} /> 

          ) : (
            () => navigation.navigate('Accueil')

          )} 
            <Stack.Screen name="Generate" component={QRCode} />  
            <Stack.Screen name="Scan" component={ScanQRCode} />  
            {/* <Stack.Screen name="Login" component={LogIn} />   */}
            <Stack.Screen name="Account" component={setAccount} />
            <Stack.Screen name="Accueil" component={Home} />
            <Stack.Screen name="Signin" component={SignIn} />  
            <Stack.Screen name="Home" component={Accueil} /> 
            <Stack.Screen name="setRole" component={setRole} />
            <Stack.Screen name="setCompany" component={setCompany} />  
            <Stack.Screen name="QuiSommesNous" component={QuiSommesNous} />  
            <Stack.Screen name="Classement" component={Classement} />  
            <Stack.Screen name="Trajets" component={Trajets} />  
            <Stack.Screen name="Analyse" component={Analyse} />  
            <Stack.Screen name="resetPass" component={resetPassword} />  
            <Stack.Screen name="HomeScreen" component={Home} />   
            <Stack.Screen name="Profil" component={Profil} />  
            <Stack.Screen name="TrajetIndiv" component={TrajetIndividuel} />  

        </Stack.Navigator>
      </NavigationContainer>
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

