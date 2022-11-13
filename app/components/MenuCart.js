import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AppText from './AppText';
import AppLargeText from './AppLargeText';
import defaultStyles from '../config/styles';

function MenuCart(props) {
    return (
        <View style={styles.cart}>
                <MaterialCommunityIcons size={22} color={defaultStyles.colors.light} name="cart-outline" />
                <AppText style={styles.cartItem}>3 Items</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    cart: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 12,
        flexDirection: 'row',
        paddingVertical: 6,
        justifyContent: 'center',
        width: 141,
    },
    cartItem: {
        color: defaultStyles.colors.light,
        fontSize: 20,
        marginLeft: 3,
        marginTop: 4
    }, 

})
export default MenuCart;