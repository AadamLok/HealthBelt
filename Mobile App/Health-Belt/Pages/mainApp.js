import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import home from './home';
import profile from './profile';

const Tab = createBottomTabNavigator();

function mainApp() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={home} />
            <Tab.Screen name="Profile" component={profile} />
        </Tab.Navigator>
    );
}

export default mainApp;