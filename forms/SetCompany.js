import React, { UseEffect, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ImagePickerIOS, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth, db, storage } from '../config/firebase';
 import { uploadBytes } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';
// import { getStorage } from "@firebase/storage";

export default class SetCompany extends Component {
  
    constructor(props) {
      super(props);
      this.state = { 
        name: '',
        adress: '', 
        city: '',
        logo: '',
        postalCode: '',
      }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

    createCompany = () => {
    db.collection('Company').add({
        name: this.state.name,
        adress: this.state.adress,
        city: this.state.city,
        postalCode: this.state.postalCode       
        });
        this.props.navigation.navigate('Accueil'); 
    }

    useEffect = async () => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Vous devez autoriser la permission pour publier une image');
        }
      }
      });
    }
    

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            adpect: [4, 3],
            quality: 1,
        });
      if (!result.cancelled) {
      const ref = ref(storage, 'logo.jpg');
      
      const img = await fetch(result.uri);
      const bytes = await this.img.blob();
      await uploadBytes(ref, result.uri);
    
    }
  };


    render(){
        return(

            <View style={styles.container}>      
            <TextInput
              style={styles.inputStyle}
              placeholder="Nom de l'entreprise"
              value={this.state.name}
              onChangeText={(val) => this.updateInputVal(val, 'name')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Adresse de l'entreprise"
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
             <TouchableOpacity>
                 <Text>Selectionnez votre logo</Text>
             </TouchableOpacity>
            <Button
              color="#3740FE"
              title="Next"
              onPress={() => this.createCompany()}
            />                      
          </View>    

        )}
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
  