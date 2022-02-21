import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button, 
  Image
} from 'react-native';
import Icon from '../assets/loader-icon.svg';

class ActivityLoader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      address: ''
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Image loading={this.state.loading} style={{width: 400, height: 400}} source={{uri: 'asset:/loader-icon.png' }}/>  
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCCCCC',
    height: Dimensions.get('window').height,
    padding: 15,
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 50
  }
});

export default ActivityLoader;