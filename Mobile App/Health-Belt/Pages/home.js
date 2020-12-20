import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function home({navigate}) {

    const data = {
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ]
          }
        ]
      };

      const chartConfig={
        backgroundColor: "rgba(255,255,255,0)",
        backgroundGradientFrom: "rgba(255,255,255,0.5)",
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        backgroundGradientTo: "rgba(255,255,255,0.5)",
        color: () => `rgba(63,63,94, 1)`,
        labelColor: () => `rgba(255, 255, 255, 0)`,
        propsForDots: {
          r: "0",
        },
        propsForBackgroundLines: {strokeWidth: 0},
        propsForVerticalLabels: {fontSize:0},
        propsForHorizontalLabels: {fontSize:0},
        propsForLabels: {fontSize:0},
      }

    return (
        <ImageBackground style={styles.background} source={require('../assets/background.png')}>
            <View style={styles.main}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Health Belt</Text>
                </View>
                <View style={styles.canvas}>
                    <View style={styles.warning}>
                        <View style={styles.warningBox}>
                            <Ionicons style={styles.warningIcon} name="warning-outline" size={26} color="white" />
                            <View style={styles.warningTextBox}>
                                <Text style={styles.warningTextTitle}>Warning Title</Text>
                                <Text style={styles.warningText}>Warning Text....hmmm Warning!!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.heartData}>
                        <Text style={styles.heartTitle}>Heart Rhythm</Text>
                        <LineChart
                            data={data}
                            width={width-20}
                            height={height*3/8}
                            chartConfig={chartConfig}
                            withHorizontalLabels={false}
                            withVerticalLabels={false}
                            style={{paddingRight:0, paddingLeft:0,margin:0}}
                            bezier
                        />
                        <View style={styles.heartBottom}>
                            <View style={styles.infoBlock}>
                                <Text style={styles.mainInfo}>60</Text>
                                <Text style={styles.sideText}>BPM</Text>
                            </View>
                            <View style={styles.infoBlock}>
                                <Text style={styles.mainInfo}>Normal</Text>
                                <Text style={styles.sideText}>Heart Status</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.otherData}>
                        <View style={styles.breathPatter}>
                            <Text style={styles.heartTitle}>Breathing Pattern</Text>
                            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                            <Text style={styles.mainInfo}>Normal</Text>
                            <Text style={styles.sideText}>Status</Text>
                            </View>
                        </View>
                        <View style={styles.temperature}>
                            <Text style={styles.heartTitle}>Body Temperature</Text>
                            <Text style={styles.mainInfo}>32° C</Text>
                            <Text style={styles.sideText}>Current</Text>
                            <Text style={styles.mainInfo}>Normal</Text>
                            <Text style={styles.sideText}>Status</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    main: {
        backgroundColor: 'rgba(167,159,202,0.7)', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        width: "100%",
    },

    titleBar: {
        width: "100%",
        backgroundColor: 'rgba(63,63,94,0.8)',
        paddingTop: StatusBar.currentHeight+10, 
        padding: 10,
    },

    title: {
        alignSelf: "center",
        fontSize: 20,
        color: "rgb(255,201,204)",
        fontWeight: "bold",
    },

    canvas: {
        flex: 1,
        width: "100%",
    },

    warning: {
        flex: 0.5,
    },

    warningBox: {
        margin: 10,
        padding:2,
        backgroundColor: 'rgba(255,0,0,0.8)',
        borderRadius: 10,
        flexDirection:'row',
        borderColor: 'rgb(255,0,0)',
        borderWidth:2,
    },

    warningIcon: {
        alignSelf:'center',
        padding: 5,
    },

    warningTextBox: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingLeft: 5,
        padding: 2,
    },

    warningTextTitle: {
        color: 'white',
        fontSize: 12,
    },

    warningText: {
        color: 'white',
        fontSize: 10,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },

    heartData: {
        flex: 2,
        backgroundColor: 'rgba(255,232,220,0.7)',
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },

    heartTitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',
        color:"rgb(63,63,94)",
    }, 

    heartBottom: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        flex:1,
        width:"100%",
        marginBottom: 25,
    },

    infoBlock: {
        flex:1,
        alignSelf:'center',
    },

    mainInfo: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        color: "black",
    },

    sideText: {
        fontSize: 12,
        color: "rgba(63,63,94,0.5)",
        textAlign: 'center',
    },
    
    otherData: {
        flex:1,
        flexDirection:'row',
    },

    breathPatter: {
        flex:1,
        backgroundColor: 'rgba(255,232,220,0.7)',
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
    },

    temperature: {
        flex:1,
        backgroundColor: 'rgba(255,232,220,0.7)',
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
})

export default home;