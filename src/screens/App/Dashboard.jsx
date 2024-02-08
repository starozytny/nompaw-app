import React from "react";

import { View, Text } from "react-native";
import * as SecureStore from 'expo-secure-store';

export function Dashboard ()
{
    getData('token').then(r => console.log(r))

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
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
