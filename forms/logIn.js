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



export default class Login extends Component{

    constructor() {
        super();
        this.state = { 
          displayName: '',
          email: '', 
          password: '',
          isLoading: false
        }
      }

      logOut = () => {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      }

      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
      loginUser = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signup!')
        } else {
          this.setState({
            isLoading: true,
          })
          auth.
          signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('User Logged successfully!');
            this.props.navigation.navigate('Home');
          })
          .catch(error => this.setState({ errorMessage: error.message }))      
        }
      }
    render() {

    return(

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
          color="#3740FE"
          title="Connexion"
          onPress={() => this.loginUser()}
        />
          <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('resetPass')}>
          Mot de passe oublié
        </Text> 
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signin')}>
          Pas de compte chez nous ? Cliquez ici
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
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: Colors.secondary,
      borderWidth: 1
    },
    loginText: {
      color: Colors.secondary,
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
      top:0,
    }
  });