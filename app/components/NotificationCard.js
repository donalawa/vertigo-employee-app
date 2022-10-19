import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';


function NotificationCard({ text, onAccepted, onCancel }) {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>{ text }</AppText>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={onCancel} style={[styles.icon, {backgroundColor: colors.danger}]}>
                    <MaterialCommunityIcons size={24} color={colors.white} name="cancel"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAccepted} style={styles.icon}>
                    <MaterialCommunityIcons size={24} color={colors.white} name="check"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: 53,
        borderRadius: 7,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    icon: {
        backgroundColor: colors.primary,
        marginLeft: 10,
        height: 38,
        width: 38,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconsContainer: {
        flexDirection: 'row'
    }, 
    text: {
        color: colors.white
    }
})
export default NotificationCard;