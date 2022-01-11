import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import Footer from "./Footer";

export default function QRCodeGenerator({navigation}) {
    return (
        <View>
            <SvgQRCode value='http://localhost:19006/App.js'/>
            <Footer navigation={navigation}/>
        </View>
    );
}

