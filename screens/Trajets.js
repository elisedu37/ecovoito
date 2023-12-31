import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function Trajets({navigation}) {
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
      <View >
      <Button
        name="Mes anciens trajets"
        bg={Colors.secondary}
        textcolor={Colors.tertiary}
      />
      <Button
        name="Créer un trajet covoiturage"
        bg={Colors.secondary}
        textcolor={Colors.tertiary}
      />
      <TouchableOpacity onPress={() => navigation.navigate('TrajetIndiv')}>
      <Button
        name="Créer mon trajet individuel"
        bg={Colors.secondary}
        textcolor={Colors.tertiary}
      />
      </TouchableOpacity>
      </View>    
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
    },
    titleBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
      marginHorizontal: 16,
      marginBottom:30,
    },
    bouton:{
      justifyContent: 'center',
      alignItems:'center',
    },
    imgCovoit: {
        width: 40,
        height: 40,
      },
  });