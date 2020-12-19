import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import stater from "./Pages/stater";
import login from "./Pages/login";
import register from "./Pages/register";
import mainApp from "./Pages/mainApp";

const Stack = createStackNavigator();
const UNAME = null;
const TOKEN = null;

async function getData() {
  try{
    await AsyncStorage.getItem("@UID").then((val) => {UNAME = val;});
    await AsyncStorage.getItem("@TOKEN").then((val) => {TOKEN = val;});
  } catch(e) {
    UID = null;
    TOKEN = null;
  }
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  getData();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="stater" screenOptions={{headerShown: false}}>
        <Stack.Screen name="stater" component={stater} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="mainApp" component={mainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
