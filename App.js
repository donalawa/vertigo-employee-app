import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import colors from './app/config/colors';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import navigationTheme from './app/navigation/navigationTheme';
import { useContext, useState } from 'react';

export default function App() {
  const [user, setUser] =useState();

  return (
    <AuthContext.Provider value={{ user, setUser}}>
    <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
        {/* <HomeScreen /> */}
        {/* <LoginScreen /> */}
        <StatusBar barStyle="light-content" /> 
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
