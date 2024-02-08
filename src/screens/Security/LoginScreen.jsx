import React, { useState } from 'react';

import { API_URL } from '@env';

import axios from 'axios';

import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const LoginScreen = ({ navigation }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    console.log(API_URL + '/login_check')

    const handleLogin = async () => {
        try {
            // Envoie les informations de connexion sous forme de JSON
            const response = await axios.post(
                API_URL + '/login_check',
                credentials,
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );

            await SecureStore.setItemAsync("token", response.data.token);
            console.log('Token', response.data);

            navigation.navigate('Dashboard')
        } catch (error) {
            console.log('Erreur de LoginService', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
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
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
        </View>
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
    loginButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
