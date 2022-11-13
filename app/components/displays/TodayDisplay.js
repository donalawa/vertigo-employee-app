import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import actionCreators from '../../state/index';
import AppTextInput from '../AppTextInput';
import ProductCard from '../ProductCard';
import colors from '../../config/colors';

function TodayDisplay(props) {
    let dispatch = useDispatch();
    let state = useSelector(state => state);
    let [todayFoods, setTodayFoods] = useState();
    let renderNum =  1;

    useEffect(() => {
        renderNum += 1;
        console.log("GET TODAY MEALS")
        console.log(renderNum)
        setTodayFoods(state?.product?.todayFoods)
    },[])

    return (
        <View style={styles.container}>
        <View>
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
    );
}


const styles = StyleSheet.create({

    productsContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})

export default TodayDisplay;