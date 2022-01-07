import { Text, View, StyleSheet, Linking } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import useCachedResources from "../hooks/useCachedResources";
import useColorScheme from "../hooks/useColorScheme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "../navigation";
import {StatusBar} from "expo-status-bar";

// $ npm install --save react-router
// $ npm install --save react-router-redux

export default function QRCodeGenerator() {
    return (
        <View>
            <SvgQRCode value='http://localhost:19006/App.js'/>
        </View>
    );
}

