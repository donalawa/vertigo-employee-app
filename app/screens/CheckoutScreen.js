import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import AppLargeText from '../components/AppLargeText';
import AppPageHeader from '../components/AppPageHeader';
import Screen from '../components/Screen';
import colors from '../config/colors';

function CheckoutScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.headerSecContainer}>
                    <AppPageHeader />
                    <View style={styles.titleContainer}>
                        <AppLargeText style={styles.tableNum}>Table 5</AppLargeText>
                        <AppLargeText style={styles.title}>Order Summary</AppLargeText>
                    </View>
                </View>
                <View style={styles.orderDetailsContainer}>
                    <View style={styles.orderInfo}>
                        <AppText style={styles.infoText}> Subtotal </AppText>
                        <AppText style={styles.infoValue}> 128,800 CFA </AppText>
                    </View>
                    <View style={styles.orderInfo}>
                        <AppText style={styles.infoText}> Tax 10% </AppText>
                        <AppText style={styles.infoValue}> 200 CFA </AppText>
                    </View>
                    <View style={styles.seperator}></View>
                    <View style={styles.orderInfo}>
                        <AppText style={styles.infoLarge}>Total</AppText>
                        <AppText style={styles.valueLarge}>130, 000 CFA</AppText>
                    </View>
                    <View style={styles.paymentContainer}>
                        <AppText>Payment Method</AppText>
                        <View>
                            {/* PAYMENT METHOD CARDS */}
                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerSecContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        // backgroundColor: 'orange',
        height: '40%'
    },
    infoText: {
        fontSize: 15
    },
    infoLarge: {
        fontSize: 24
    },
    infoValue: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    valueLarge: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    orderDetailsContainer: {
        backgroundColor: colors.secondary,
        height: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    paymentContainer: {
        marginTop: 20
    },
    seperator: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: colors.medium,
        marginVertical: 10
    },
    tableNum: {
        color: colors.primary,
        fontSize: 30
    },
    title: {
        color: colors.primary,
        fontSize: 45
    },
    titleContainer: {
        alignItems: 'center',
        height: '92%',
        // backgroundColor: 'royalblue',
        justifyContent: 'center',
        width: '100%',
    }
})

export default CheckoutScreen;