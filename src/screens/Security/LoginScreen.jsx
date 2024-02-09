import React, { useState } from 'react';

import { API_URL } from '@env';

import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import { StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text, Input, Icon, Spinner } from "@ui-kitten/components";

const LoadingIndicator = (props) => (
    <Spinner size='small' status="basic" />
);

export const LoginScreen = ({ navigation }) => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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

        setLoading(true);
        navigation.push('Dashboard');
    };

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    }

    const renderIcon = (props) => {
        return  <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Nompaw 👋' alignment='center'/>
            <Divider/>
            <Layout style={styles.container}>
                <Text style={styles.title} category="h1">Espace membre 🔒</Text>
                <Text style={styles.subtitle}>
                    Utilise ton identifiant et mot de passe pour accéder à ton espace !
                </Text>
                {error
                    ? <Text>Erreur de connexion</Text>
                    : null
                }
                <Input
                    style={styles.input}
                    size='large'
                    placeholder="Nom utilisateur"
                    value={credentials.username}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setCredentials({ ...credentials, username: text })}
                />

                <Input
                    style={styles.input}
                    size='large'
                    placeholder="Mot de passe"
                    value={credentials.password}
                    autoCapitalize="none"
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(text) => setCredentials({ ...credentials, password: text })}
                />
                <Button onPress={handleLogin}
                        accessoryLeft={loading ? LoadingIndicator : null}
                >
                    Se connecter
                </Button>
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
        marginBottom: 4,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 24,
        opacity: 0.7
    },
    input: {
        width: '100%',
        marginBottom: 16,
    },
    spinner: {
        color: 'white'
    }
});
