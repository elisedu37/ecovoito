// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { auth, db } from '../config/firebase';

export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
    }

    
  }

  setRoleUser = () => {
          const user = auth.currentUser;
          db.collection('Users').doc(user.uid).update({
          role: 'user',
          });           
        this.props.navigation.navigate('Account');
    }

    setRoleAdmin = () => {
          const user = auth.currentUser;
          db.collection('Users').doc(user.uid).update({
          role: 'admin',
          });           
        this.props.navigation.navigate('SetCompany');    
    }
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
        <Text>
        Vous êtes ?
        </Text>      
        <Button
          color="#3740FE"
          title="Salarié"
          onPress={() => this.setRoleUser()}
        />  
        <Button
          color="#3740FE"
          title="Entreprise"
          onPress={() => this.setRoleAdmin()}
        />                     
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
