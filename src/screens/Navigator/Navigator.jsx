import React from 'react';

import { SafeAreaView } from "react-native";
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";

import { LoginScreen } from "screens/Security/LoginScreen";
import { Dashboard } from "screens/App/Dashboard";
import { Planificateur } from "screens/App/Planificateur";

const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeIcon = (props) => (
    <Icon {...props} name='home-outline' />
);
const CreditCardIcon = (props) => (
    <Icon {...props} name='credit-card-outline' />
);

const DarkKittenTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#222B45',
    },
};

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
    >
        <BottomNavigationTab title='Dashboard' icon={HomeIcon} />
        <BottomNavigationTab title='Planificateur' icon={CreditCardIcon} />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Screen name='Dashboard' component={Dashboard} />
        <Screen name='Planificateur' component={Planificateur} />
    </Navigator>
);

const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={TabNavigator} />
    </Stack.Navigator>
)

export const AppNavigator = () => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={DarkKittenTheme}>
            <HomeStack />
        </NavigationContainer>
    </SafeAreaView>
);
