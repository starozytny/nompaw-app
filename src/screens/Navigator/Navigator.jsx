import React from 'react';

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from "screens/Security/LoginScreen";
import { Dashboard } from "screens/App/Dashboard";
import { View } from "react-native";

const { Navigator, Screen } = createStackNavigator();

const DarkKittenTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#222B45',
    },
};

const HomeNavigator = () => (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Home' component={LoginScreen}/>
        <Screen name='Dashboard' component={Dashboard}/>
    </Navigator>
);

export const AppNavigator = () => (
    <View style={{flex: 1}}>
        <NavigationContainer theme={DarkKittenTheme}>
            <HomeNavigator/>
        </NavigationContainer>
    </View>
);
