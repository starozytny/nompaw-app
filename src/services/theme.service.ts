import React from 'react';

export type Mapping = 'eva';
export type Theme = 'light' | 'dark';

export interface MappingContextValue {
    currentMapping: Mapping;
}

export interface ThemeContextValue {
    currentTheme: Theme;
    setCurrentTheme: (theme: Theme) => void;
}

export class Theming {

    static MappingContext = React.createContext<MappingContextValue|null>(null);
    static ThemeContext = React.createContext<ThemeContextValue|null>(null);

    static useMapping = (mappings: Record<Mapping, any>,
                         mapping: Mapping): [MappingContextValue, any] => {

        const mappingContext: MappingContextValue = {
            currentMapping: mapping,
        };

        return [mappingContext, mappings[mapping]];
    };

    static useTheming = (themes: Record<Mapping, Record<Theme, any>>,
                         mapping: Mapping,
                         theme: Theme): [ThemeContextValue, any] => {

        const [currentTheme, setCurrentTheme] = React.useState<Theme>(theme);

        const themeContext: ThemeContextValue = {
            currentTheme,
            setCurrentTheme: (nextTheme) => {
                setCurrentTheme(nextTheme);
            },
        };

        return [themeContext, themes[mapping][currentTheme]];
    };
}
