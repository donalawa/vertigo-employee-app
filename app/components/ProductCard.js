import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
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
            <View style={styles.bottomContainer}>
                <View>
                    <AppText>Takeaway ?</AppText>
                    <View style={styles.checkBox}></View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <MaterialCommunityIcons name="plus" color={colors.light} size={20}/>
                    </TouchableOpacity>
                    <AppText style={styles.quantity}>0</AppText>
                    <TouchableOpacity style={styles.button}>
                        <MaterialCommunityIcons color={colors.light} name="minus" size={20}/>
                    </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        backgroundColor: colors.secondary,
        width: Dimensions.get('screen').width / 2 - 30,
        height: 153,
        borderLeftWidth: 4,
        borderLeftColor: colors.card,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    checkBox: {
        borderWidth: 2,
        borderColor: colors.primary,
        width: 20,
        height: 20,
        borderRadius: 5,
        marginLeft: 2
    },
    quantity: {
        marginHorizontal: 10,
        marginVertical: 10,
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