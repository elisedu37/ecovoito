import React, {Component}  from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Constants from 'expo-constants';
import { Colors } from '../components/Colors';
import Footer from '../components/Footer';
import SwiperComponent from '../components/SwiperComponent';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
            <SwiperComponent navigation={this.props.navigation}/>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD0',
  },
});

/*
 <Button name="Inscription" bg={Colors.secondary} textcolor={Colors.tertiary}/>
      <Button name="Connexion" bg={Colors.tertiary} textcolor={Colors.secondary}/>
      */