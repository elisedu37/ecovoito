import React, {useContext} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import { AuthContext } from '../context/context';
import { useNavigation } from '@react-navigation/native';


export default function Login({navigation}) {
    const [state, dispatch] = useContext(AuthContext);

    return(

    <View>
        <View>
            <Text>Login</Text>
        </View>
        <View>
            <TextInput
                placeholder='Email...'
                placeholderTextColor='#003f5c'
                onChangeText={text => this.setState({email: text})}
                />
        </View>
        <View>
        <TextInput
            placeholder='Password...'
            placeholderTextColor='#003f5c'
            onChangeText={text => this.setState({password: text})}
            />
        </View> 
        <TouchableOpacity
        onPress={() => {
            dispatch({
                type:'user_login',
                payload: true,
            });
        }}>
        <Text>LOGIN</Text>
        </TouchableOpacity>    
        <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}>
                <Text>Don't have an account yet ? SignUp</Text>
            </TouchableOpacity>
    </View> 
    );
}