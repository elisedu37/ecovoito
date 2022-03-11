// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image } from 'react-native';
import { auth, db } from '../config/firebase';
import { Colors } from '../components/Colors';


export default class SignIn extends Component {
  
  constructor() {
    super();
    this.state = { 
      uid: '',
      email: '', 
      password: '',
      isLoading: false
    }

    
  }
  
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Veuillez remplir les champs')
    } else {
      this.setState({
        isLoading: true,
      })
      auth.
      createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        auth.onAuthStateChanged(function(user) {
          db.collection('Users').doc(user.uid).set({
          email: user.email,
          // password: user.password,       
          });           
          }); 
        this.props.navigation.navigate('setRole'); 
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
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
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/loader-icon.png')}
        />  
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Mot de passe"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          navigation={this.props.navigation}
          color="#F2BC79"
          title="Inscription"
          onPress={() => this.registerUser()}
        />
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
         Déja inscrit ? Connectez-vous
        </Text> 
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
    top:'15%',
    left:'30%'
  },
});
