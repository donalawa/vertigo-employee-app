import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText';
import colors from '../config/colors';

function ProductCard(props) {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.orderDetailsContainer}>
                    <AppText style={styles.orderDetails}> Orders </AppText>
                    <MaterialCommunityIcons name="arrow-right" color={colors.medium} size={20}/>
                    <AppText style={styles.orderDetails}> Kitchen </AppText>
                </View>
                <View>
                    <AppText style={styles.title}>Malta</AppText>
                    <AppText style={styles.price}>5,000 cfa</AppText>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <MaterialCommunityIcons name="minus" color={colors.light} size={20}/>
                </View>
                <AppText style={styles.quantity}>0</AppText>
                <View style={styles.button}>
                    <MaterialCommunityIcons color={colors.light} name="plus" size={20}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 29,
        height: 24,
        borderWidth: 1,
        borderColor: colors.medium,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginBottom: 10
    },
    container: {
        backgroundColor: colors.secondary,
        width: 186,
        height: 153,
        borderLeftWidth: 4,
        borderLeftColor: colors.card,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between'
    },
    quantity: {
        marginHorizontal: 10
    },
    title: {
        fontSize: 32
    },
    price: {
        color: colors.medium,
        fontSize: 14
    }, 
    orderDetails: {
        color: colors.medium,
        fontSize: 14
    },
    orderDetailsContainer: {
        flexDirection: 'row'
    }
})
export default ProductCard;