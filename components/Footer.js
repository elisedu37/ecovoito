import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { Colors } from './Colors';

const Footer = ({navigation}) =>{
    return (
        <View style={styles.footer}>
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Scan" onPress={() => navigation.navigate('Scan')}/>
            <Button title="Generate" onPress={() => navigation.navigate('Generate')}/>
        </View>
    );
};
export default Footer;

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        width:"100%",
        margin: 'auto',
        backgroundColor:Colors.secondary,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        padding:10,
        borderRadius: 19,
        width: '80%',
    }
});
