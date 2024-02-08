import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from "screens/Security/LoginScreen";
import { Dashboard } from "screens/App/Dashboard";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Home' component={LoginScreen}/>
        <Screen name='Dashboard' component={Dashboard}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);
