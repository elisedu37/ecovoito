import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { auth, db, storage } from '../config/firebase';
import * as ImagePicker from 'expo-image-picker';
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
          points: 0,
          isLoading: false
        }
      }

      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
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
          points: 0,
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
            this.props.navigation.navigate('Home');    
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
            <TouchableOpacity
              style={styles.submitImage}
              onPress={() => this.pickImage()}
            >
                <Text style={styles.submitImageText}>Sélectionnez un avatar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => this.completeRegistration()}
            >
                <Text style={styles.submitText}>Suivant</Text>
            </TouchableOpacity>
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
  },
  submitImage: {
    backgroundColor: Colors.tertiary,
    width: '100%',
    paddingTop:10,
    marginBottom: 15,
    paddingBottom: 10,
    alignSelf: "center",
    borderColor: Colors.secondary,
    borderWidth: 3,
    borderRadius:19,
  }, 
  submitImageText: {
    color:Colors.secondary,
    textAlign: 'center',
  },
});