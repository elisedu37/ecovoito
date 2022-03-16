import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';

export default function Analyse({navigation}) {
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
          <Text style={styles.titre}>MON TABLEAU DE BORD </Text>
          <View style={styles.containerText}>
            <Text style={styles.TextT}>Donnée du : 18 mars 2022</Text>
            <Text style={styles.TextM}>78,6</Text>
            <Text style={styles.TextB}>kg de réduction de CO2</Text>
          </View>
          <Text style={styles.titre}>EVOLUTION </Text>
          <Text style={styles.titre}>VOTRE CLASSEMENT </Text>
          <View style={styles.classementContainer}>
            <View style={styles.classementContainerL}>
              <Image
                source={require('../assets/img/challengeBis.png')}
                style={styles.classement}
              />
            </View>
            <View style={styles.classementContainerR}>
              <Image
                source={require('../assets/img/imgProfil.jpg')}
                style={styles.imgProfil}
              />
              <Text style={styles.TextClassement}>8ème</Text>
              <Text style={styles.TextClassement}>/10</Text>
            </View>
          </View>
          <Text style={styles.titre}>VOTRE ENTREPRISE </Text>
          <View style={styles.classementContainer}>
            <View style={styles.classementContainerR}>
              <Text style={styles.TextClassement}>20ème</Text>
              <Text style={styles.TextClassement}>/100</Text>
            </View>
            <View style={styles.classementContainerL}>
              <Image
                source={require('../assets/img/ChallengeEntreprise.png')}
                style={styles.classementEntreprise}
              />
            </View>
          </View>
          <Text style={styles.TextBilan}>100 000 km économisés</Text>
        </ScrollView>
      </View>
      <Footer />
    </>
  );
}

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
    marginBottom: 30,
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
  classement: {
    width: 140,
    height: 270,
    justifyContent: 'center',
  },
  classementContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  classementContainerL: {
    width: 150,
    height: 250,
    marginTop: 50,
    marginBottom: 50,
  },
  classementContainerR: {
    width: 150,
    height: 150,
    backgroundColor: Colors.tertiary,
    position: 'relative',
    borderRadius: 100,
    marginLeft: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextClassement: {
    textAlign: 'center',
    color: '#fff',
  },
  imgProfil: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  TextT: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.tertiary,
  },
  TextM: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.tertiary,
  },
  TextB: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.tertiary,
  },
  containerText: {
    width: '100%',
    backgroundColor: Colors.secondary,
    flexDirection: 'column',
    borderRadius: 27,
    padding: 20,
  },
  classementEntreprise: {
    width: 181,
    height: 156,
    justifyContent: 'center',
    marginLeft:-20
  },
  TextBilan: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign:'center',
    marginTop:-70,
  },
});