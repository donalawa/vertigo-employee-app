import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppLargeText from '../components/AppLargeText';
import Screen from '../components/Screen';
import colors from '../config/colors';

import NotificationCard from '../components/NotificationCard';
function NotificationScreen({props}) {
    const handleAccepted = () => {
        console.log('worker is free')
    }

    const handleCancel = () => {
        console.log('worker is not free');
    }
    return (
        <Screen>
            <View style={styles.container}>
                <AppLargeText style={styles.title}>Notifications</AppLargeText>
                <View style={styles.notificationsContainer}>
                    <NotificationCard onAccepted={handleAccepted} onCancel={handleCancel} text="Are you free ?"/>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.danger
    },
    notificationsContainer: {
        marginTop: 20,
        marginHorizontal: 20
    },
    title: {
        fontSize: 50,
        color: colors.primary,
        textAlign: 'center'
    }
})

export default NotificationScreen;