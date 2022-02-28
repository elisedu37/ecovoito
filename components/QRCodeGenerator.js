import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';

export default function QRCodeGenerator({navigation}) {
    return (
        <View>
            <SvgQRCode value='http://localhost:19006/App.js'/>
        </View>
    );
}

