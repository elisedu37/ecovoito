import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { auth } from '../config/firebase';

export default class SetAccount extends Component {
    constructor() {
        super();
        this.state = { 
          firstName: '',
          lastName: '',
          adress: '', 
          postalCode: '',
          city: '',
          isLoading: false
        }
      }

      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
      // insertUserData = () => {
      //   if(this.state.email === '' && this.state.password === '') {
      //     Alert.alert('Enter details to signup!')
      //   } else {
      //     this.setState({
      //       isLoading: true,
      //     })
      //     auth.
      //     createUserWithEmailAndPassword(this.state.email, this.state.password)
      //     .then(userCredentials => {
      //       const user = userCredentials.user;
      //       console.log('User registered successfully!');
      //       this.navigation.navigate('setAccount');
      //     })
      //     .catch(error => this.setState({ errorMessage: error.message }))      
      //   }
      // }
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
              secureTextEntry={true}
            />   
            <TextInput
              style={styles.inputStyle}
              placeholder="Adresse"
              value={this.state.adress}
              onChangeText={(val) => this.updateInputVal(val, 'adress')}
              maxLength={15}
              secureTextEntry={true}
            /> 
            <TextInput
              style={styles.inputStyle}
              placeholder="Ville"
              value={this.state.city}
              onChangeText={(val) => this.updateInputVal(val, 'city')}
              maxLength={15}
              secureTextEntry={true}
            /> 
            <TextInput
              style={styles.inputStyle}
              placeholder="Prénom"
              value={this.state.postalCode}
              onChangeText={(val) => this.updateInputVal(val, 'postalCode')}
              maxLength={15}
              secureTextEntry={true}
            /> 
            <Button
              navigation={this.props.navigation}
              color="#3740FE"
              title="Next"
              onPress={() => this.insertUserData()}
            />                      
          </View>
        );
      }
}