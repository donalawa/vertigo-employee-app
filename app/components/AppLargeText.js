import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { 
    IrishGrover_400Regular 
} from '@expo-google-fonts/irish-grover'


import defaultStyles from '../config/styles';

function AppLargeText({ children, style, ...otherProps }) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
          try {
            // Keep the splash screen visible while we fetch resources
            await SplashScreen.preventAutoHideAsync();
            // Pre-load fonts, make any API calls you need to do here
            await Font.loadAsync({
                "IrishGrover": IrishGrover_400Regular
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
        <View onLayout={onLayoutRootView}>
            <Text style={[defaultStyles.text,{fontFamily: "IrishGrover"}, style]} {...otherProps}>
                {children}
            </Text>
        </View>
    );
}


export default AppLargeText;
