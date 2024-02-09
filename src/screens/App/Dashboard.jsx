import React from "react";
import * as SecureStore from 'expo-secure-store';

import { Text, SafeAreaView } from "react-native";
import { Divider, Icon, Layout, TopNavigation, TopNavigationAction } from "@ui-kitten/components";

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export function Dashboard ({ navigation })
{
    getData('token').then(r => console.log(r))

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Dashboard' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>DETAILS</Text>
            </Layout>
        </SafeAreaView>
    );
}

const getData = async (key) => {
    try {
        const value = await SecureStore.getItemAsync(key);
        if (value !== null) {
            console.log('Données récupérées avec succès :', value);
            return value;
        } else {
            console.log('Aucune donnée trouvée pour la clé :', key);
            return null;
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
};
