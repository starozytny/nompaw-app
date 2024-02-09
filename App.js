import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { AppNavigator } from "screens/Navigator/Navigator";
import { StatusBar } from "react-native";

export default () => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
                    <StatusBar />
                    <AppNavigator />
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    )
};

export const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {},
});
