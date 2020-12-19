import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function stater() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground style={styles.background} source={require('../assets/background.png')}>
            <View>

            </View>
          </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    main: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },

    background: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
})

export default stater;