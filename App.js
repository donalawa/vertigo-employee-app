import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import colors from './app/config/colors';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <>
        <HomeScreen />
        <StatusBar barStyle="light-content" /> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
