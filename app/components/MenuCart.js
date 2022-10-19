import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AppText from './AppText';
import AppLargeText from './AppLargeText';
import defaultStyles from '../config/styles';

function MenuCart(props) {
    return (
        <View style={styles.cart}>
                <MaterialCommunityIcons size={28} color={defaultStyles.colors.light} name="cart-outline" />
                <AppText style={styles.cartItem}>3 Items</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    cart: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 32,
        flexDirection: 'row',
        height: 52,
        justifyContent: 'center',
        width: 141,

    },
    cartItem: {
        color: defaultStyles.colors.light,
        fontSize: 22
    }, 

})
export default MenuCart;