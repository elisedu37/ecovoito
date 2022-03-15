// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { auth, db } from '../config/firebase';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

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
        this.props.navigation.navigate('setCompany');    
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
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Ionicons name="ios-arrow-back" size={35} color={Colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/img/ecovoito.png')}
            style={styles.image}
          />
        </View>
          <View style={styles.box}>
        <Text style={styles.loginText}>
        Vous êtes ?
        </Text> 
        <View style={styles.colonneBar}> 
        <TouchableOpacity
          style={styles.submit}
          onPress={() => this.setRoleUser()}
        >
            <Text style={styles.submitText}>Salarié</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => this.setRoleAdmin()}
        >
            <Text style={styles.submitText}>Entreprise</Text>
        </TouchableOpacity>
        </View>     
        </View>               
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
    backgroundColor: Colors.primary,
  },
  inputStyle: {
    width: '100%',
    paddingTop:10,
    marginBottom: 15,
    paddingBottom: 10,
    alignSelf: "center",
    borderColor: Colors.secondary,
    borderWidth: 3,
    borderRadius:19,
    textAlign:'center',
    fontSize:15,   
    color:Colors.secondary,  
  },
  loginText: {
    color: Colors.secondary,
    marginTop: 25,
    textAlign: 'center',
    paddingBottom:20,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  box:{
    left:0,
    right:0,
    backgroundColor: Colors.tertiary,
    bottom:0,
    position:'absolute',
    borderTopLeftRadius:44,
    borderTopRightRadius:44,
    padding:46,
  },
  logoContainer:{
    position:'absolute',
    top:'5%',
    left:'10%'
  },
  image:{
    height:300,
    width:300,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom:30,
    position:'absolute',
    top:24,
  },
  colonneBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom:30,
  },
  submit: {
    padding: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
  },
  submitText: {
    color:Colors.tertiary,
    textAlign: 'center',
  }
});
