import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppPageHeader from '../components/AppPageHeader';
import colors from '../config/colors';
import ProductCard from '../components/ProductCard';
import Screen from '../components/Screen';


function ProductsScreen({ route, navigation }) {
    const  { day } = route.params;

    useEffect(() => {
        console.log("RAN")
        console.log(day)
    },[])

    return (
        <Screen>
            <View style={styles.container}>
            <View>
                <AppPageHeader onPress={() => navigation.navigate('Landing')} title="Foods"/>
                <AppTextInput 
                    placeholder="Search"
                    style={{ borderWidth: 0, fontSize:22, justifyContent: 'space-between', backgroundColor: colors.secondary, borderRadius: 0, height: 54}}
                    placeholderTextColor={colors.light}
                    searchIcon={true}
                    />
                </View>
                <View style={styles.productsContainer}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    productsContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})
export default ProductsScreen;