import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import colors from './app/config/colors';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
        <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
