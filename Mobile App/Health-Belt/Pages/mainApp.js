import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import home from './home';
import profile from './profile';

const Tab = createBottomTabNavigator();

function mainApp() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? 'heart' : 'hearto';
                        return <AntDesign name={iconName} size={27} color={color}  />
                    } else {
                        iconName = focused ? 'md-people-circle' : "md-people-circle-outline";
                        return <Ionicons name={iconName} size={27} color={color} />;
                    }
                }
            })}

            tabBarOptions={{
                activeTintColor: 'rgb(255,201,204)',
                inactiveTintColor: 'rgb(255,232,220)',
                style: {backgroundColor: 'rgb(63,63,94)', paddingTop:7, paddingBottom:10, height:"8%"}
            }}
        >
            <Tab.Screen name="Home" component={home} />
            <Tab.Screen name="Profile" component={profile} />
        </Tab.Navigator>
    );
}

export default mainApp;