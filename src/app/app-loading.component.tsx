import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export function appLoading(): boolean {
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

    return appIsReady
}
