import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { auth, db } from '../config/firebase';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../components/Colors';

export default class SetAccount extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          firstName: '',
          lastName: '',
          adress: '', 
          postalCode: '',
          city: '',
          role: '',
          isLoading: false
        }
      }

      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

      onAuthComplete = (user) => {
        console.log(user.uid);
        console.log(db.collection('Users').doc(user.uid));
        db.collection('Users').doc(user.uid).set({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          adress: this.state.adress, 
          postalCode: this.state.postalCode,
          city: this.state.city,
          role: '',
        });       
      }

      completeRegistration = () => {
        if(this.state.firstName === '' && this.state.adress === '') {
          Alert.alert('Enter details to signup!')
        } else {
          this.setState({
            isLoading: true,
          })
          console.log(this.state.firstName);
             auth.onAuthStateChanged(this.onAuthComplete); 
            this.props.navigation.navigate('Accueil');    
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
              placeholder="Nom"
              value={this.state.firstName}
              onChangeText={(val) => this.updateInputVal(val, 'firstName')}
              placeholderTextColor="#F2BC79"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Prénom"
              value={this.state.lastName}
              onChangeText={(val) => this.updateInputVal(val, 'lastName')}
              maxLength={15}
              placeholderTextColor="#F2BC79"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Adresse"
              value={this.state.adress}
              onChangeText={(val) => this.updateInputVal(val, 'adress')}
              maxLength={70}
              placeholderTextColor="#F2BC79"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Ville"
              value={this.state.city}
              onChangeText={(val) => this.updateInputVal(val, 'city')}
              maxLength={30}
              placeholderTextColor="#F2BC79"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Code postal"
              value={this.state.postalCode}
              onChangeText={(val) => this.updateInputVal(val, 'postalCode')}
              maxLength={15}
              placeholderTextColor="#F2BC79"
            />
            <Button
              color="#F2BC79"
              title="Suivant"
              onPress={() => this.completeRegistration()}
            />
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
    top:'1%',
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
  },
});