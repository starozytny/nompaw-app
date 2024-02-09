import React, { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { AppNavigator } from "screens/Navigator/Navigator";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { Mapping, Theme, Theming } from "services/theme.service";
import { appMappings, appThemes } from "app/app-theming";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "components/status-bar.component";


const defaultConfig: { mapping: Mapping, theme: Theme } = {
    mapping: 'eva',
    theme: 'dark',
};

const App: React.FC<{ mapping: Mapping, theme: Theme }> = ({ mapping, theme }) => {

    const [mappingContext, currentMapping] = Theming.useMapping(appMappings, mapping);
    const [themeContext, currentTheme] = Theming.useTheming(appThemes, mapping, theme);

    const [appIsReady, setAppIsReady] = React.useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    'barlow-regular': require('../assets/fonts/Barlow-Regular.ttf'),
                    'barlow-bold': require('../assets/fonts/Barlow-Bold.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    if (!appIsReady) {
        return null;
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
