import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Colors } from './Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconColor = '#000000';
function AnimTabnav() {
    const IconColor = '#633dae';
}
const Footer = ({navigation}) =>{
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                 onPress={() => navigation.navigate('Scan')} color="Colors.IconColor" style={styles.currentBtn}
                 onClick={AnimTabnav()}
            >
                <Icon name="qrcode" size={40} color="#ffffff" style={styles.currentIco}/>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => navigation.navigate('Home')} color="Colors.IconColor"
                 onClick={AnimTabnav()}
            >
                <Icon name="home" size={40} color="#ffffff"/>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => navigation.navigate('Generate')}  color="Colors.IconColor"
                 onClick={AnimTabnav()}
            >
                <Icon name="search" size={40} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection: 'row',
        width:"100%",
        margin: 'auto',
        backgroundColor:Colors.tertiary,
        height: 75,
        position: 'fixed',
        bottom : 0,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        padding:10,
        borderRadius: 19,
        width: '80%',
    },
    currentBtn : {
        backgroundColor:Colors.primary,
        borderRadius: 50,
        padding:8,
        bottom:30,
    },
    currentIco : {
        color: 'black',
    },
    test :{
        backgroundColor:Colors.primary,
        borderRadius: 50,
        padding:8,
        bottom:30,
        color: 'green',
    }
});
