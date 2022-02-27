import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Footer from '../components/Footer';
import ClassementBox from '../components/ClassementBox';

export default function Classement({navigation}) {
  return (
      <>
    <View style={styles.container}>
      <ScrollView>
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
      <Text style={styles.titre}>LE CLASSEMENT </Text>
      <View style={styles.box}>
      <ClassementBox position="2" logo={require('../assets/img/google.png')} work="Géant Casino" lieu="Le Puy en Velay" point="148"/>
      <ClassementBox position="3" logo={require('../assets/img/google.png')} work="Leclerc" lieu="Saint Etienne" point="143"/>
      <ClassementBox position="4" logo={require('../assets/img/google.png')} work="Sport 2000" lieu="Le Puy en Velay" point="140"/>
      <ClassementBox position="5" logo={require('../assets/img/google.png')} work="Delbard" lieu="Le Puy en Velay" point="137"/>
      <ClassementBox position="6" logo={require('../assets/img/google.png')} work="Darty" lieu="Saint Etienne" point="136"/>
      <ClassementBox position="7" logo={require('../assets/img/google.png')} work="Mercedes" lieu="Le Puy en Velay" point="132"/>
      <ClassementBox position="8" logo={require('../assets/img/google.png')} work="Gifi" lieu="Le Puy en Velay" point="125"/>
      <ClassementBox position="9" logo={require('../assets/img/google.png')} work="Darty" lieu="Saint Etienne" point="110"/>
      <ClassementBox position="10" logo={require('../assets/img/google.png')} work="Darty" lieu="Saint Etienne" point="98"/>

      </View>
      </ScrollView>

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
    imgCovoit: {
        width: 40,
        height: 40,
      },
      titre: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.tertiary,
        padding: 10,
      },
      box:{
        justifyContent:'center',
        alignItems:'center',
      }
  });
  