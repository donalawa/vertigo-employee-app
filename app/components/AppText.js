import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { 
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic 
  } from '@expo-google-fonts/poppins'


import defaultStyles from '../config/styles';

function AppText({ children, style, ...otherProps }) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
          try {
            // Keep the splash screen visible while we fetch resources
            await SplashScreen.preventAutoHideAsync();
            // Pre-load fonts, make any API calls you need to do here
            await Font.loadAsync({
                Poppins_100Thin,
                Poppins_100Thin_Italic,
                Poppins_200ExtraLight,
                Poppins_200ExtraLight_Italic,
                Poppins_300Light,
                Poppins_300Light_Italic,
                Poppins_400Regular,
                Poppins_400Regular_Italic,
                Poppins_500Medium,
                Poppins_500Medium_Italic,
                Poppins_600SemiBold,
                Poppins_600SemiBold_Italic,
                Poppins_700Bold,
                Poppins_700Bold_Italic,
                Poppins_800ExtraBold,
                Poppins_800ExtraBold_Italic,
                Poppins_900Black,
                Poppins_900Black_Italic 
            })
           
          } catch (e) {
            console.warn(e);
          } finally {
            // Tell the application to render
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);

    const onLayoutRootView = useCallback(async () => {

    if (appIsReady) {
        await SplashScreen.hideAsync();
    }
    }, [appIsReady]);

    if (!appIsReady) {
    return null;
    } 
    return (
        <View  onLayout={onLayoutRootView}>
            <Text style={[defaultStyles.text, {fontFamily: 'Poppins_400Regular'}, style]} {...otherProps}>
                {children}
            </Text>
        </View>
    );
}


export default AppText;
