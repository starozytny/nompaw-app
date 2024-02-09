import React from 'react';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { AppNavigator } from "screens/Navigator/Navigator";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { Mapping, Theme, Theming } from "services/theme.service";
import { appMappings, appThemes } from "app/app-theming";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "components/status-bar.component";
import { appLoading } from "app/app-loading.component";
import { Image, SafeAreaView, StyleSheet } from "react-native";

const App: React.FC<{ mapping: Mapping, theme: Theme }> = ({ mapping, theme }) => {

    const [mappingContext, currentMapping] = Theming.useMapping(appMappings, mapping);
    const [themeContext, currentTheme] = Theming.useTheming(appThemes, mapping, theme);

    const appIsReady = appLoading();

    if(!appIsReady){
        return <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('assets/images/logo.png')}
            />
        </SafeAreaView>;
    }

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...currentMapping} theme={currentTheme}>
                <Theming.MappingContext.Provider value={mappingContext}>
                    <Theming.ThemeContext.Provider value={themeContext}>
                        <SafeAreaProvider>
                            <StatusBar />
                            <AppNavigator />
                        </SafeAreaProvider>
                    </Theming.ThemeContext.Provider>
                </Theming.MappingContext.Provider>
            </ApplicationProvider>
        </>
    )
}

export default (): React.ReactElement => (
    <App mapping="eva" theme="dark" />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#222B45"
    },
    logo: {
        width: 200,
        height: 200,
    },
});
