import * as React from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, StatusBar, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
import bcrypt from 'react-native-bcrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
var salt = bcrypt.genSaltSync(10);

function login({navigation}) {

    const [userName, onChangeUserName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [success, onChangeSuccess] = React.useState(true);

    /*

        get:
            url/login?uname=""

            {
                pass: hash-password,
            }

        if success:
        
        get:
            url/getToken?uname=""

            {
                token: token,
            }
    */

    async function login() {
        /*let response = await fetch('url/login?uname='+userName); 
        let json = await response.json;
        let success = json.pass ? bcrypt.compareSync(password,json.pass) : false;
        onChangeSuccess(success);
        if(success) {
            await AsyncStorage.setItem('@UNAME', userName);
            response = await fetch('url/getToken')
            json = await response.json;
            await AsyncStorage.setItem('@TOKEN', json.token);
            navigation.navigate('mainApp');
        }*/
        navigation.navigate('mainApp')
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground style={styles.background} source={require('../assets/background.png')}>
            <View style={styles.middle}>
                <Text style={styles.title}>Log In</Text>
                <TextInput 
                    style={styles.userName} 
                    onChangeText={text => onChangeUserName(text)} value={userName}
                    placeholder={"User Name"}
                />
                <TextInput 
                    style={styles.password} 
                    onChangeText={text => onChangePassword(text)} 
                    value={password}
                    placeholder={"Password"}
                    secureTextEntry={true}
                />
                {
                    success ? null : <Text style={styles.error}>User-Name and Passwords doesn't match</Text>
                }
                <View>
                    <TouchableNativeFeedback onPress={() => login()}>
                        <Text style={styles.mainButton}>Log In</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
          </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    main: { 
        paddingTop: StatusBar.currentHeight,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },

    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    middle: {
        width: '70%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 10,
        padding: 10,
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom:20,
    },

    userName: {
        width: '90%',
        backgroundColor: 'rgba(65,69,103,0.5)',
        alignSelf: 'center',
        height: 40,
        paddingLeft: 10,
        borderRadius: 10,
        color: "rgba(255,236,221,0.9)",
    },

    password: {
        marginTop: 10,
        width: '90%',
        backgroundColor: 'rgba(65,69,103,0.5)',
        alignSelf: 'center',
        height: 40,
        paddingLeft: 10,
        borderRadius: 10,
        color: "rgba(255,236,221,0.9)",
        marginBottom: 10,
    },

    error: {
        paddingTop:10,
        color: "red",
        fontSize: 10,
        textAlign: 'center',
    },

    mainButton: {
        marginTop: 10,
        marginBottom:0,
        alignSelf: 'center',
        backgroundColor: "rgb(217,185,218)",
        width:windowWidth*0.4,
        fontWeight:'bold',
        fontSize: 15,
        paddingVertical: 10,
        textAlign:'center',
        borderRadius:10,
        color: "rgb(41,40,49)",
    },
})

export default login;