import React, { UseEffect, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ImagePickerIOS, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth, db, storage } from '../config/firebase';
import * as ImagePicker from 'expo-image-picker';

export default class setCompany extends Component {
  
    constructor(props) {
      super(props);
      this.state = { 
        name: '',
        adress: '', 
        city: '',
        logo: '',
        postalCode: '',
        points: 0
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
        postalCode: this.state.postalCode,
        points: 0,
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
      // const [image, setImage] = useState(null);
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      let uploadImage = async (uri, imageName) => { 
      const response = await fetch(uri);
      const blob = await response.blob();
      let ref = storage.ref().child("images/" + imageName);
      return ref.put(blob); 
      }  
      // console.log(result);
      let photoName = storage.ref();
      if (!result.cancelled) { 
        await uploadImage(result.uri, auth.currentUser.email); 
      }
    }


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
              maxLength={50}
            />   
            <TextInput
              style={styles.inputStyle}
              placeholder="Ville"
              value={this.state.city}
              onChangeText={(val) => this.updateInputVal(val, 'city')}
              maxLength={70}
            /> 
            <TextInput
              style={styles.inputStyle}
              placeholder="Code Postal"
              value={this.state.postalCode}
              onChangeText={(val) => this.updateInputVal(val, 'postalCode')}
              maxLength={30}
            /> 
            <Button title="Sélectionnez un logo" onPress={() => this.pickImage()}/>
            <Button
              color="#3740FE"
              title="Next"
              onPress={() => this.createCompany()}
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
  