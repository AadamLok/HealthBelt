import * as React from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, StatusBar, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function login({navigation}) {

    const [userName, onChangeUserName] = React.useState('');
    const [password, onChangePassword] = React.useState('');

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
                <View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('register')}>
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
    },

    mainButton: {
        marginTop: 20,
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