import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';

export default function Analyse({navigation}) {
  return (
      <>
    <View style={styles.container}>
    <View>
      <View style={styles.titleBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                source={require('../assets/loader-icon.png')}
                style={styles.imgCovoit}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
              <Image
                source={require('../assets/img/compte.png')}
                style={styles.imgCovoit}
                />
            </TouchableOpacity>
          </View>
      </View>
      <Text style={styles.titre}>MON TABLEAU DE BORD </Text>

      <Text style={styles.titre}>EVOLUTION </Text>
      <Text style={styles.titre}>VOTRE CLASSEMENT </Text>
      <Text style={styles.titre}>VOTRE ENTREPRISE </Text>
    </View>
    <Footer />

    </>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2EDD0',
      width: '100%',
      padding: 20,
    },
    titleBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
      marginHorizontal: 16,
      marginBottom:30,
    },
    titre: {
      fontSize: 17,
      fontWeight: 'bold',
      color: Colors.tertiary,
      padding: 10,
    },
    imgCovoit: {
        width: 40,
        height: 40,
      },
  });