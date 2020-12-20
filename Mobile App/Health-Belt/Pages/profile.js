import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Dimensions, StatusBar, TextInput, TouchableNativeFeedback} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;

function profile({navigate}) {

    const [email, onChangeEmail] = React.useState('');

    const emergencyContacts = [
        {
            id:1,
            email:'aadamlok@gmail.com'
        },
        {
            id:2,
            email:'alokhandwala@umass.edu'
        },
    ]
    
    function logout() {

    }

    const contact = ({item}) => {
        return(
            <View style={styles.contact}>
                <Text style={styles.contactEmail}>{item.email}</Text>
                <TouchableNativeFeedback style={styles.del}>
                    <MaterialIcons name="delete-forever" size={24} color="rgba(255,0,0,0.5)" />
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (
        <ImageBackground style={styles.background} source={require('../assets/background.png')}>
            <View style={styles.main}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Health Belt</Text>
                </View>
                <View style={styles.canvas}>
                    <View style={styles.account}>
                        <View style={{flex:2}}>
                            <Text style={styles.logInfo}>Logged In as</Text>
                            <Text style={styles.userName}>AadamLok</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableNativeFeedback onPress={() => logout()}>
                                <Text style={styles.mainButton}>Log Out</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={styles.email}>
                        <View style={{flex:2}}>
                            <TextInput
                                style={styles.emailAdd} 
                                onChangeText={text => onChangeEmail(text)} 
                                value={email}
                                placeholder={"New Email Address"} 
                            />
                        </View>
                        <View style={{flex:1}}>
                            <TouchableNativeFeedback onPress={() => logout()}>
                                <Text style={styles.emailButton}>Change</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={styles.emergencyBlock}>
                        <View style={styles.emergencyAdd}>
                            <View style={{flex:2}}>
                                <TextInput
                                    style={styles.emailAdd} 
                                    onChangeText={text => onChangeEmail(text)} 
                                    value={email}
                                    placeholder={"Emergency Contact"} 

                                />
                            </View>
                            <View style={{flex:1}}>
                                <TouchableNativeFeedback onPress={() => logout()}>
                                    <Text style={styles.emailButton}>Add</Text>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                        <Text style={styles.emergencyText}>Emergency Contacts</Text>
                        <FlatList
                            data={emergencyContacts}
                            renderItem={contact}
                            keyExtractor={(item) => item.id}
                        />
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
        width: "100%",
    },

    canvas: {
        flex:1,
        width:"100%",
        padding:10,
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

    account: {
        backgroundColor: 'rgba(255,232,220,0.7)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        flexDirection: 'row',
    },

    logInfo: {
        textAlign: 'left',
        alignSelf: 'stretch',
        color: "rgba(63,63,94,0.5)",
        fontSize: 10,
    },

    userName: {
        fontSize: 18,
        alignSelf:'stretch',
        paddingLeft:7,
        fontWeight: 'bold',
    },

    mainButton: {
        alignSelf: 'center',
        backgroundColor: "rgb(217,185,218)",
        width:windowWidth*0.3,
        fontWeight:'bold',
        fontSize: 15,
        paddingVertical: 5,
        textAlign:'center',
        borderRadius:10,
        color: "rgb(41,40,49)",
    },

    email: {
        marginTop: 10,
        backgroundColor: 'rgba(255,232,220,0.7)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        flexDirection:'row',
    },

    emailButton: {
        alignSelf: 'center',
        backgroundColor: "rgb(217,185,218)",
        width:windowWidth*0.3,
        fontWeight:'bold',
        fontSize: 15,
        paddingVertical: 5,
        textAlign:'center',
        borderRadius:10,
        color: "rgb(41,40,49)",
    },

    emailAdd: {
        width: '95%',
        paddingLeft: 5,
        backgroundColor: 'rgba(65,69,103,0.3)',
        alignSelf: 'flex-start',
        height: 40,
        borderRadius: 10,
        color: "rgba(255,236,221,0.9)",
    },

    emergencyBlock: {
        flex:1,
        marginTop: 10,
        backgroundColor: 'rgba(255,232,220,0.7)',
        borderRadius: 10,
        padding:10,
    },

    emergencyAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },

    emergencyText: {
        fontSize: 12,
        textAlign: 'center',
        paddingVertical:4,
    },

    contact: {
        flexDirection:'row',
        margin:5,
        backgroundColor: 'rgba(167,159,202,0.5)',
        paddingLeft: 10,
        paddingRight: 5,
        borderRadius: 10,
        paddingVertical: 5,
    },

    contactEmail: {
        flex:1,
        fontWeight: "600",
    },

    del: {
        alignSelf:'flex-end',
    }

})

export default profile;

