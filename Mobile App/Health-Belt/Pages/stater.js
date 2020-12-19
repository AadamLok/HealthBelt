import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
import register from './register';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function stater({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground style={styles.background} source={require('../assets/background.png')}>
            <View style={styles.top}>
                <Image style={styles.logo} source={require('../assets/icon.png')}/>
                <Text style={styles.logoText}>Health Belt</Text>
            </View>
            <View style={styles.middle}/>
            <View style={styles.bottom}>
                <View style={styles.buttonRow}>
                    <View style={styles.button}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate('login')}>
                            <Text style={styles.mainButton}>Log In</Text>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.button}>
                        <TouchableNativeFeedback onPress={() => navigation.navigate('register')}>
                            <Text style={styles.mainButton}>Register</Text>
                        </TouchableNativeFeedback>
                    </View>
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

    top: {
        paddingTop: 50,
        flex:8,
        alignItems: 'center', 
        justifyContent: 'center'
    },

    logo: {
        height: windowHeight*0.2,
        width: windowWidth*0.4,
        resizeMode: 'stretch',
    },

    logoText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'rgb(63,64,96)',
    },

    middle: {
        flex:10,
    },

    bottom: {
        flex:4,
        alignItems: 'center', 
        justifyContent: 'center'
    },

    buttonRow: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },

    button: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainButton: {
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

export default stater;