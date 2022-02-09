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
    Button
} from 'react-native';
import { auth } from '../config/firebase';
import { AuthContext } from '../context/context';
import { useNavigation } from '@react-navigation/native';


export default class Login extends Component {

    constructor() {
        super();
        this.state = { 
          displayName: '',
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
            console.log('User logged successfully!');
            this.navigation.navigate('logIn');
          })
          .catch(error => this.setState({ errorMessage: error.message }))      
        }
      }

      render() {
    
    return(

        <View style={styles.container}>      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => this.loginUser()}
        />
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('signIn')}>
          Pas de compte ? Créez-en un ici
        </Text>                          
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