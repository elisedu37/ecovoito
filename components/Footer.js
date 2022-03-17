import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Colors } from './Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const IconColor = '#000000';
function AnimTabnav() {
    const IconColor = '#633dae';
}
export default function Footer() {
const navigation= useNavigation();
  return (
    
       <View style={styles.footer}>
           <TouchableOpacity
                onPress={() => navigation.navigate('QuiSommesNous')} color="Colors.IconColor" 
                onClick={AnimTabnav()}
            >
                <Icon name="question" size={40} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Trajets')} color="Colors.IconColor" 
                onClick={AnimTabnav()}
            >
                <Icon name="taxi" size={35} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')} color="Colors.IconColor"
                onClick={AnimTabnav()}
            >
                <Icon name="globe" size={40} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Analyse')} color="Colors.IconColor"
                onClick={AnimTabnav()}
            >
                <Icon name="bar-chart" size={35} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Classement')} color="Colors.IconColor" 
                onClick={AnimTabnav()}
            >
                <Icon name="trophy" size={40} color="#ffffff" />
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection: 'row',
        width:"100%",
        margin: 'auto',
        backgroundColor:Colors.tertiary,
        height: 75,
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