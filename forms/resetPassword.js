import React, {Component} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button, Image
} from 'react-native';
import { auth } from '../config/firebase';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default class resetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isLoading: false,
          email: ''
        }
      }

      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

      
      forgotPassword = () => {
        // const user = auth.currentUser;
        // const email = user.email;
        auth.sendPasswordResetEmail(this.state.email)
          .then(function (user) {
            alert('Please check your email...')
          }).catch(function (e) {
            console.log(e)
          })
      }


      render(){
        return(
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
            <Text style={styles.loginText}>Mot de passe oublié ?</Text>
            <Text style={styles.loginText}>
              Entrez ci-dessous votre email, nous vous enverrons un lien de
              réinitialisation
            </Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(val) => this.updateInputVal(val, 'email')}
              value={this.state.email}
              placeholder="example@gmail.com"
              placeholderTextColor="#F2BC79"
            />
            <TouchableOpacity onPress={() => this.forgotPassword()}>
              <Button
               color="#F2BC79"
               title="Envoyer"
              />
            </TouchableOpacity>
          </View>
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
    top:'5%',
    left:'10%'
  },
  image:{
    height:300,
    width:300,
  }
});