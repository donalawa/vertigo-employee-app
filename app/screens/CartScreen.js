import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText'
import AppPageHeader from '../components/AppPageHeader';
import Screen from '../components/Screen';
import colors from '../config/colors';
import CartItem from '../components/CartItem';

function CartScreen({ navigation }) {
    let [cartItems, setCartItems]  = useState([]);

    let state = useSelector((state) => state);
    useEffect(() => {
        setCartItems(state?.cart?.cartItems)
    },[state])

    return (
        <Screen>
            <View style={styles.container}>
               <View>
               <AppPageHeader title="Cart" onPress={() => navigation.navigate('Landing')}/>
                <View style={styles.tableDetailsContainer}>
                    <View>
                        <AppText style={styles.tableText}>Table 5</AppText>
                        <AppText style={styles.clientNameText}>Leslie K.</AppText>
                    </View>
                    <View style={styles.editIconContainer}>
                        <MaterialCommunityIcons size={18} color={colors.light} name="pencil-outline"/>
                    </View>
                </View>
                {cartItems && cartItems.length  > 0 ? <View>
                    {cartItems.map((item,  index) =><CartItem 
                    key={index}
                    itemNumber={1}
                    itemName={item.name}
                    itemQuantity={item.number}
                    itemPrice={item.price}
                    />)}
                </View> : <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/images/cart.png')}/>
                    </View>}
               </View>
               <View style={styles.proceedButtonContainer}>
                   <AppButton onPress={() => navigation.navigate('Checkout')} title="Proceed To Checkout"/>
               </View>
            </View>
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    editIconContainer: {
        borderWidth: .5,
        width: 32,
        height: 32,
        borderRadius: 16,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: Dimensions.get('window').width - 40,
        // flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'red',
        height: 400
    },
    proceedButtonContainer: {
        marginVertical: 10
    },
    tableText: {
        color: colors.light,
        fontSize: 22
    },
    clientNameText: {
        color: colors.light,
        fontSize: 13
    },
    tableDetailsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
})
export default CartScreen;