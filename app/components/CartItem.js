import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

import AppText from './AppText';

function CartItem({ itemNumber, itemName, itemQuantity, itemPrice }) {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.itemNumContainer}>
                    <AppText style={styles.itemNumber}>{itemNumber}</AppText>
                </View>
                <AppText style={styles.text}>{itemName}</AppText>
                <AppText style={styles.quantityText}>x{itemQuantity}</AppText>
            </View>
            <View>
                <AppText style={styles.priceText}>{itemPrice} cfa</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 5,
        flexDirection: 'row',
        height: 53,
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemNumber: {
        color: colors.dark
    },
    itemNumContainer: {
        width: 28,
        height: 28,
        backgroundColor: colors.light,
        borderRadius: 14,
        marginRight: 10,
        justifyContent:'center',
        alignItems: 'center'
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 14
    },
    quantityText: {
        marginLeft: 5,
        fontSize: 13,
        color: colors.medium
    },
    text: {
        fontSize: 14
    }
})
export default CartItem;