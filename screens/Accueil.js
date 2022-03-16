import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../components/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Infos from '../components/Infos';
export default function Accueil({navigation}) {
    // const navigation = useNavigation();
    return (
        <>
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.titleBar}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image
                                source={require('../assets/loader-icon.png')} style={styles.imgCovoit}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                            <Image
                                source={require('../assets/img/compte.png')} style={styles.imgCovoit}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Button name="Mon trajet du jour" bg={Colors.secondary} textcolor={Colors.tertiary}/>
                <View style={styles.colonne}>
                    <Image style={styles.voiture} source={require('../assets/img/covoiturage.png')}/>
                    <TouchableOpacity onPress={() => navigation.navigate('Generate')} style={styles.Qrcode}>
                        <Infos text="Generer QR" image={require('../assets/img/google.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={styles.Qrcode}>
                        <Infos text="Scan QR" image={require('../assets/img/google.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titre}>MON TABLEAU DE BORD </Text>
                <View style={styles.containerText}>
                    <Text style={styles.TextT}>Donnée du : 3 février 2022</Text>
                    <Text style={styles.TextM}>78,6</Text>
                    <Text style={styles.TextB}>de réduction de CO2</Text>
                </View>
                <View style={styles.classementContainer}>
                    <View style={styles.classementContainerL}>
                        <Image source={require('../assets/img/challenge.png')} style={styles.classement}/>
                    </View>
                    <View style={styles.classementContainerR}>
                        <Image source={require('../assets/img/imgProfil.jpg')} style={styles.imgProfil}/>
                        <Text style={styles.TextClassement}>8/10</Text>
                    </View>
                </View>
            </ScrollView>
            <Footer/>
        </>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2EDD0',
        width: '100%',
        padding: 36,
        paddingBottom: 80,
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
    Qrcode: {
        width: '47%',
        marginBottom: 35,
    },
    colonne: {
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        marginTop: 70,
    },
    voiture: {
        position: 'absolute',
        height: 65,
        width: 105,
        zIndex: 3,
        top: -40,
    },
    containerText: {
        width: '100%',
        backgroundColor: '#F3AF62',
        flexDirection: 'column',
        borderRadius: 27,
        padding: 20,
    },
    titre: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.tertiary,
        marginTop: 30,
        marginBottom: 30,
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
    classement: {
        width: 140,
        height: 270,
        justifyContent: 'center',
    },
    classementContainer: {
        flexDirection: 'row',
        justifyContent :'center',
        alignItems: 'center',
        marginBottom: 80,
    },
    classementContainerL: {
        width: 150,
        height: 250,
        marginTop: 50,
        marginBottom: 70,
    },
    classementContainerR: {
        width: 150,
        height: 150,
        backgroundColor: Colors.tertiary,
        position: 'relative',
        borderRadius: 100,
        paddingTop: 100
    },
    TextClassement: {
        textAlign : 'center',
        color: '#fff',
    },
    imgProfil: {
        width: 70,
        height: 70,
        borderRadius: 100,
        position : 'absolute',
        top:10,
        left: 40,
    },
});
