import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useDispatch,  useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';
import { actionCreators } from '../state';

function ProductCard({  item  }) {
    const [isTakeAway, setIsTakeAway] = useState(false);
    let [activeQuantity, setActiveQuantity] = useState(1);
    const navigation = useNavigation();
    let dispatch  = useDispatch();

    const { setActiveProduct } = bindActionCreators(actionCreators, dispatch);

    const handleAddQuantity = async () => {
        let  updatedItems =  await addQuantity(activeProduct.id);
        addItemsToCart(updatedItems);
    }

    const reduceAddQuantity = async () => {
        let updatedItems = await removeQuantity(activeProduct.id);
        addItemsToCart(updatedItems);
    }

    const handleAddToCart = async () => {
        let item = {item: activeProduct, quantity: 1, amount: activeProduct.price};
        let allItems = await addItemToStorage(item);
        addItemsToCart(allItems);
    }

    const  handleNavigate = (food) => {
        setActiveProduct(food);
        navigation.navigate('ProductDetails')
    }


    return (
        <View style={styles.container}>
            <View style={styles.cardTop}>
                <Image resizeMode="contain" style={styles.image} source={{ uri: item.image }}/>
            </View>
            <View style={styles.cardBottom}>
                <View>
                    <AppText style={styles.name}>{item.name}</AppText>
                    <AppText style={styles.price}>1{item.price} cfa</AppText>
                </View>
                <View>
                    <TouchableOpacity onPress={() =>  handleNavigate(item)} style={styles.viewContainer}>
                        <MaterialCommunityIcons name="eye" size={22} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        width: Dimensions.get('screen').width / 2 - 25,
        borderLeftWidth: 4,
        borderLeftColor: colors.card,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between',
        marginBottom: 15
    },

    cardTop: {
        width: '100%',
        height: 110,
    },

    cardBottom: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    image: {
        width: '100%',
        height: '100%'
    },

    price: {
        fontSize: 13
    },

    viewContainer: {
        borderWidth: 1,
        borderRadius: 3,
        padding: 2,
        borderColor: colors.primary
    }
    
})
export default ProductCard;