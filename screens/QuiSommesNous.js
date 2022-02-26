import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../components/Colors';
import TextChecked from '../components/TextChecked';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Question from '../components/Question';
import IllustratedText from '../components/IllustratedText';
import Infos from '../components/Infos';
import Footer from '../components/Footer';

export default function QuiSommesNous({navigation}) {
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

      <Text style={styles.titre}>ECOVOITO C EST : </Text>

      <IllustratedText texte="Evaluer et reduire l emission de co2 produite par les salaries" image={require('../assets/img/reductionCO2.png')} />
      <IllustratedText texte="Un challenge entre entreprise ! Qui sera la meilleure ?" image={require('../assets/img/challenge.png')} />
      <IllustratedText texte="Une solution de covoiturage pour vous !" image={require('../assets/img/covoiturage.png') } />

      <View style={styles.block}>
        <Text style={styles.titre}>Regle du challenge </Text>

        <TextChecked texte="Faire partie d'une entreprise" />
        <TextChecked texte="Declarer son trajet tous les jours" />
        <TextChecked texte="Pour le covoiturage, il faut scanner le QR code de votre covoitureur lorsque vous etes covoiturer" />
        <TextChecked texte="Si un conducteur ne trouve pas de passagers alors il ne prend aucun point" />
        <TextChecked texte="Vous pouvez utiliser egalement des vehicules non motirisé ou des transports en commun" />
        <TextChecked texte="Tous les trimestre" />

        <View style={styles.boxCovoit}>
          <Image
            source={require('../assets/img/attention.png')}
            style={styles.imgCovoit}
          />
          <Text>
            Toutes fraudes ou triches au challenge seront severement sanctionnes
          </Text>
        </View>
      </View>

      <Text style={styles.titre}>LES RECOMPENSES </Text>
      <View style={styles.colonne}>
        <Infos text="Bon de réduction" />
        <Infos text="Argent" />
        <Infos text="Argent" />
        <Infos text="Bon de réduction" />
      </View>

      <Text style={styles.titre}>FAQ </Text>
      <Question question="Comment sont attribués les points" />
      <Question question="Comment sont attribués les points" />
      <Question question="Comment sont attribués les points" />
      <Question question="Comment sont attribués les points" />

      </ScrollView>
    </View>
    <Footer/>

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
  titre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.tertiary,
    padding: 10,
  },

  block: {
    backgroundColor: '#F2BC79',
    borderRadius: 20,
    padding: 10,
  },

  boxCovoit: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },

  imgCovoit: {
    width: 20,
    height: 20,
  },

  colonne: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
});
