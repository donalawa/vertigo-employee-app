import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';

import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import colors from './app/config/colors';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import navigationTheme from './app/navigation/navigationTheme';
import { useContext, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './app/services/firebase';
import  { store } from './app/state/store'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] =useState();
  const [isReady, setIsReady] = useState(false);


  async function prepare() {
    try {
      checkUserLoggedIn();
     } catch (e) {
       console.warn(e);
     } 
  }

  const checkUserLoggedIn  =  () => {
    onAuthStateChanged(authentication, async (usr) => {
      if (usr) {
        setUser(usr);
        await SplashScreen.hideAsync();
        setIsReady(true);
      } else {
        setUser(null);
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    });
  }

  useEffect(() => {
    prepare();
  }, []);

  if(!isReady) 
    return null;

  return (
    <AuthContext.Provider value={{ user, setUser}}>
    <NavigationContainer theme={navigationTheme}>
        {user ? <Provider store={store}><AppNavigator /></Provider> : <AuthNavigator />}
    </NavigationContainer>
        <StatusBar barStyle="light-content" /> 
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
