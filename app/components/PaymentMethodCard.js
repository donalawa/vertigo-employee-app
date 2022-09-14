import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText';
import colors from '../config/colors';

function PaymentMethodCard({icon, name, isActive}) {
    return (
        <View style={styles.container}>
            <View style={[styles.iconContainer, {backgroundColor: isActive ? colors.light : ''}]}>
                <MaterialCommunityIcons size={33} color={!isActive ? colors.light : colors.black} name={icon}/>
            </View>
            <AppText style={styles.text}>{name}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginRight: 10,
        width: 90,
    },

    iconContainer: {
        height: 49,
        width: 83,
        borderWidth: 2,
        borderColor: colors.medium,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 3
    }
})
export default PaymentMethodCard;