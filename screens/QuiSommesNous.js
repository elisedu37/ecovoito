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

      <Text style={styles.titre}>ECOVOITO C'EST : </Text>

      <IllustratedText texte="Évaluer et réduire l'émission de CO2 produite par les salariés" image={require('../assets/img/reductionCO2.png')} />
      <IllustratedText texte="Un challenge entre entreprise ! Qui sera la meilleure entreprise ?" image={require('../assets/img/challenge.png')} />
      <IllustratedText texte="Une solution de covoiturage pour vous !" image={require('../assets/img/covoiturage.png') } />

      <View style={styles.block}>
        <Text style={styles.titre}>Règles du challenge </Text>

        <TextChecked texte="Faire partie d'une entreprise" />
        <TextChecked texte="Declarer son trajet tous les jours" />
        <TextChecked texte="Pour le covoiturage, il faut scanner le QR code de votre covoitureur lorsque vous êtes covoiturer"/>
        <TextChecked texte="Si un conducteur ne trouve pas de passagers alors il ne prend aucun point." />
        <TextChecked texte="Vous pouvez utiliser également des véhicules non-motorisé ou des transports en commun" />
        <TextChecked texte="TOUS LES TRIMESTRES !" />

        <View style={styles.boxCovoit}>
          <Image
            source={require('../assets/img/attention.png')}
            style={styles.warning}
          />
          <Text style={styles.texte}>
          TOUTES FRAUDES OU TRICHES AU CHALLENGE SERONT SÉVÈREMENT SANCTIONNÉS.
          </Text>
        </View>
      </View>

      <Text style={styles.titre}>LES RECOMPENSES </Text>
      <View style={styles.colonne}>
        <Infos text="Bon de réduction" image={require('../assets/img/reductionCO2.png')}/>
        <Infos text="Argent" image={require('../assets/img/etoile.png')}/>
        <Infos text="Argent" image={require('../assets/img/etoile.png')}/>
        <Infos text="Bon de réduction" image={require('../assets/img/reductionCO2.png')}/>
      </View>

      <Text style={styles.titre}>FAQ </Text>
      <View style={styles.boxQuestions}>
      <Question question="Comment sont attribués les points ? " />
      <Question question="Qu'est-ce que la réduction de CO2 ? " />
      <Question question="Combien de points me faut-il pour..." />
      <Question question="Vous avez besoin d'une aide d'Ecovoito ?" />
      </View>
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
    width: 40,
    height: 40,
  },

  colonne: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom:30,
  },
  texte:{
    width:'85%',
    marginLeft:15,
  },
  boxQuestions:{
    justifyContent:'center',
    alignItems:'center',
  },
  warning: {
    width:'16%',
    height: 40,
  },
});
