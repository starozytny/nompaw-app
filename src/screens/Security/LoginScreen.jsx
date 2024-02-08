import React, { useState } from 'react';

import { API_URL } from '@env';

import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import { View, TextInput, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

export const LoginScreen = ({ navigation }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(false);

    const handleLogin = async () => {
        // setError(false);
        // try {
        //     // Envoie les informations de connexion sous forme de JSON
        //     const response = await axios.post(
        //         API_URL + '/login_check',
        //         credentials,
        //         {
        //             headers: {'Content-Type': 'application/json'}
        //         }
        //     );
        //
        //     await SecureStore.setItemAsync("token", response.data.token);
        //     navigation.navigate('Dashboard')
        // } catch (err) {
        //     setError(true);
        // }

        navigation.push('Dashboard')
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
                <Text style={styles.title}>Connexion</Text>
                {error
                    ? <Text>Erreur de connexion</Text>
                    : null
                }
                <TextInput
                    style={styles.input}
                    placeholder="Nom utilisateur"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={credentials.username}
                    onChangeText={(text) => setCredentials({ ...credentials, username: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    autoCapitalize="none"
                    secureTextEntry
                    value={credentials.password}
                    onChangeText={(text) => setCredentials({ ...credentials, password: text })}
                />
                <Button onPress={handleLogin}>Se connecter</Button>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 8,
    },
});
