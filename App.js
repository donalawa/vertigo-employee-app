import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import colors from './app/config/colors';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {
  return (
    <>
    <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
    </NavigationContainer>
        {/* <HomeScreen /> */}
        {/* <LoginScreen /> */}
        <StatusBar barStyle="light-content" /> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
