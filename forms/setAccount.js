import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { auth, db } from '../config/firebase';

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
            this.props.navigation.navigate('setRole');    
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
            <TextInput
              style={styles.inputStyle}
              placeholder="Nom"
              value={this.state.firstName}
              onChangeText={(val) => this.updateInputVal(val, 'firstName')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Prénom"
              value={this.state.lastName}
              onChangeText={(val) => this.updateInputVal(val, 'lastName')}
              maxLength={15}
            />   
            <TextInput
              style={styles.inputStyle}
              placeholder="Adresse"
              value={this.state.adress}
              onChangeText={(val) => this.updateInputVal(val, 'adress')}
              maxLength={15}
            /> 
            <TextInput
              style={styles.inputStyle}
              placeholder="Ville"
              value={this.state.city}
              onChangeText={(val) => this.updateInputVal(val, 'city')}
              maxLength={15}
            /> 
            <TextInput
              style={styles.inputStyle}
              placeholder="Code postal"
              value={this.state.postalCode}
              onChangeText={(val) => this.updateInputVal(val, 'postalCode')}
              maxLength={15}
            /> 
            <Button
              color="#3740FE"
              title="Next"
              onPress={() => this.completeRegistration()}
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