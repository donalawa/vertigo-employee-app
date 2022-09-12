import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import defaultStyles from '../config/styles';
import Screen from '../components/Screen';

function LoginScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <AppText style={styles.title}>Vertigo</AppText>
                    <View style={styles.formContainer}>
                        <AppTextInput 
                        icon="email-outline"
                        placeholder="Enter email"
                        />
                         <AppTextInput 
                        icon="lock-outline"
                        placeholder="Enter Password"
                        />
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultStyles.colors.dark,
        justifyContent: 'center',
    },
    contentContainer: {
        // backgroundColor: 'royalblue',
        height: '55%',
        width: '100%',
        alignItems: 'center'

    },
    title: {
        color: defaultStyles.colors.primary,
        fontSize: 70,
        textAlign: 'center',
    },
    formContainer: {
        width: '90%',
        marginTop: 20
    }
})

export default LoginScreen;