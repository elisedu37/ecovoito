import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import Button from '../components/Button';
import Constants from 'expo-constants';
import { Colors } from '../components/Colors';
import Footer from '../components/Footer';
import QRCodeGenerator from '../components/QRCodeGenerator';

export default function QRCode({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
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

          <View style={styles.profil}>
            <Text style={styles.titre}>Votre QRcode</Text>

            <QRCodeGenerator />

            <Button
              name="Partager par mail"
              bg={Colors.secondary}
              textcolor={Colors.tertiary}
            />
            <Button
              name="Imprimer"
              bg={Colors.tertiary}
              textcolor={Colors.secondary}
            />
            <Text style={styles.texte}>
              Ce QR code est à destination de vos salariés. Il faut le scanner
              pour rejoindre l'entreprise.
            </Text>
            <Text style={styles.texte}>
              Merci de ne pas l'utiliser autres que pour cela.{' '}
            </Text>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD0',
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.tertiary,
    padding: 20,
  },
  imgCovoit: {
    width: 40,
    height: 40,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 30,
  },
  profil: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    margin: 20,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 19,
    elevation: 1,
    padding: 20,
  },
  texte: {
    fontSize: 14,
    padding: 10,
    color: Colors.black,
  },
});