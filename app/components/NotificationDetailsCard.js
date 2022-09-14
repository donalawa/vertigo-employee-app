import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import AppButton from './AppButton';
import colors from '../config/colors';

function NotificationDetailsCard({ onCompleted }) {
    return (
        <View style={styles.container}>
            <View>
                <AppText style={styles.title}>TABLE #6</AppText>
                <AppText style={styles.info}>Services Needed</AppText>
            </View>
            <View style={{ width: '100%', alignItems: 'center'}}>
               <View style={{ width: '30%', height: '100%',justifyContent: 'center'}}>
                <AppButton onPress={onCompleted} title="Completed"/>
               </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 86,
        backgroundColor: colors.secondary,
        borderRadius: 7,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },

    title: {
        fontSize: 18,
        color: colors.primary,
        fontWeight: 'bold'
    },

    info: {
        fontSize: 16,
        marginTop: 8
    }
})

export default NotificationDetailsCard;