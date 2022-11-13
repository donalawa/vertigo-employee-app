import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import AppText from './AppText';
import AppButton from './AppButton';
import colors from '../config/colors';

function NotificationDetailsCard({ onCompleted }) {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
                    <AppText style={styles.title}>TABLE #6</AppText>
                    <AppText style={styles.info}>Services Needed Services </AppText>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 20}}>
                <View style={{ width: '40%',justifyContent: 'center'}}>
                    <AppButton onPress={onCompleted} title="Completed"/>
                </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '85%',
    },
    contentContainer: {
        width: '100%',
        // height: 86,
        backgroundColor: colors.secondary,
        borderRadius: 7,
        padding: 10,
        alignItems: 'center',
        // flexDirection: 'row',
        // height: content,
    },

    title: {
        fontSize: 18,
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    info: {
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center'
    }
})

export default NotificationDetailsCard;