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
          <Text style={styles.loginText}>Mot de passe oublié ?</Text>
          <Text style={styles.loginText}>Entrez ci-dessous votre email, nous vous enverrons un lien de réinitialisation</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
            value={this.state.email} 
            placeholder="example@gmail.com"/>
          <TouchableOpacity onPress={() => this.forgotPassword()}>
            <Text>Envoyer</Text>
          </TouchableOpacity>
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
});