import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
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
import Constants from 'expo-constants';
import TrajetIndividuel from './screens/TrajetIndividuel';
import * as Notifications from 'expo-notifications';
const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const MyStack = () => {
  const user = auth.currentUser;
  console.log(user);
  return (
    <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          {user == null ? (

            <Stack.Screen name="LogIn" component={LogIn} /> 

          ) : (
            () => navigation.navigate('HomeScreen')

          )} 
            <Stack.Screen name="Generate" component={QRCode} />  
            <Stack.Screen name="Scan" component={ScanQRCode} />  
            <Stack.Screen name="Login" component={LogIn} />  
            <Stack.Screen name="Account" component={setAccount} />
            <Stack.Screen name="Signin" component={SignIn} />  
            <Stack.Screen name="Home" component={Accueil} /> 
            <Stack.Screen name="setRole" component={setRole} />  
            <Stack.Screen name="QuiSommesNous" component={QuiSommesNous} />  
            <Stack.Screen name="Classement" component={Classement} />  
            <Stack.Screen name="Trajets" component={Trajets} />  
            <Stack.Screen name="Analyse" component={Analyse} />  
            <Stack.Screen name="HomeScreen" component={Home} />  
            <Stack.Screen name="Profil" component={Profil} />  
            <Stack.Screen name="TrajetIndiv" component={TrajetIndividuel} />  

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
// export default MyStack;

export default function PushAnImage() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
      <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
        {/*<Text>Your expo push token: {expoPushToken}</Text>*/}
        {/*<View style={{ alignItems: 'center', justifyContent: 'center' }}>*/}
        {/*  <Text>Title: {notification && notification.request.content.title} </Text>*/}
        {/*  <Text>Body: {notification && notification.request.content.body}</Text>*/}
        {/*  <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>*/}
        {/*</View>*/}
        <Button
            title="Notif"
            onPress={async () => {
              await schedulePushNotification();
            }}
        />

      </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Trajet bien créé",
      body: 'Pensez à renseigner votre trajet du jour',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

