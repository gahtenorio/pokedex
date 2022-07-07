import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import themes from '../themes';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const deviceTheme = useColorScheme();
  const theme = (deviceTheme && themes[deviceTheme]) || themes.light;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {children}
        <StatusBar
          barStyle={
            (deviceTheme &&
              (deviceTheme === 'light' ? 'dark-content' : 'light-content')) ||
            'dark-content'
          }
          backgroundColor={
            (deviceTheme &&
              (deviceTheme === 'light'
                ? themes.light.colors.background
                : themes.dark.colors.background)) ||
            themes.light.colors.background
          }
        />
      </NavigationContainer>
    </ThemeProvider>
  );
}
