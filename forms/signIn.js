// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image , TouchableOpacity} from 'react-native';
import { auth, db } from '../config/firebase';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default class SignIn extends Component {
  
  constructor() {
    super();
    this.state = { 
      uid: '',
      email: '', 
      password: '',
      points: 0,
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
          points: 0,
          // password: user.password,       
          });           
          }); 
        this.props.navigation.navigate('SetRole'); 
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
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
          placeholderTextColor="#F2BC79"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Mot de passe"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
          placeholderTextColor="#F2BC79"
        />
        <TouchableOpacity
          navigation={this.props.navigation}
          style={styles.submit}
          onPress={() => this.registerUser()}
        >
            <Text style={styles.submitText}>Inscription</Text>
        </TouchableOpacity>
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
    top: '5%', 
    left: 0, 
    right: 0, 
    bottom: 0,  
    alignItems: 'center'
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
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
  },
  submitText: {
    color:Colors.tertiary,
    textAlign: 'center',
  }
});
