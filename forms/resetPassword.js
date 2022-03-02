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
          firstName: '',
          lastName: '',
          adress: '', 
          postalCode: '',
          city: '',
          role: '',
          isLoading: false
        }
      }
}