import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppPageHeader from '../components/AppPageHeader';

import NotificationDetailsCard from '../components/NotificationDetailsCard';

function NotificationDetails({  navigation, route}) {
    // Notification Info
    // console.log(route.params)
    return (
        <Screen>
            <View style={styles.container}>
                <AppPageHeader noIcon={true} title="Details"/>
                <NotificationDetailsCard onCompleted={() => navigation.navigate('Notification')}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    }
})

export default NotificationDetails;