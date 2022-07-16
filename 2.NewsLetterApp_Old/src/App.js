import React, { useState } from 'react'
import { StatusBar, Image } from 'react-native';
import { AppLoading } from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Navigation from './navigations';
import { images } from './utils/images';

const cacheImages = images => {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
};
const cacheFont = fonts => {
    return fonts.map(font => Font.loadAsync(font));
};

const App = () => {
    const [isReady, setIsReady] = useState(false);

    const _loadAssets = async () => {
        const imageAssets = cacheImages([
            require('../assets/splash.png'),
            ...Object.values(images),
        ]);
        const fontAssets = cacheFont([]);

        await Promise.all([...imageAssets, ...fontAssets]);
    };

    return isReady ? (
        <ThemeProvider theme={theme}>
            <StatusBar barstyle="dark-content" />
            <Navigation />
        </ThemeProvider>
    ) : (
        <AppLoading
        startAsync={_loadAssets}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
        />
    );
};

export default App;