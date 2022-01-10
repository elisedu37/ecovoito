import { Text, View, StyleSheet, Linking } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';


export default function QRCodeGenerator() {
    return (
        <View>
            <SvgQRCode value='http://localhost:19006/App.js'/>
        </View>
    );
}

