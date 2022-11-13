import React, { useState,  useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../state';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppLargeText from '../components/AppLargeText';
import defaultStyles from '../config/styles';
import MenuCart from '../components/MenuCart';
import MenuCard from '../components/MenuCard';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import colors from '../config/colors';
import FoodsDisplay from '../components/displays/FoodsDisplay';
import TodayDisplay from '../components/displays/TodayDisplay';

function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const state = useSelector(state  => state);
    const [selectedItem, setSelectedItem] = useState();
    const [activeTab, setActiveTab] = useState('Food');

    let { setTodayFoods } = bindActionCreators(actionCreators, dispatch);

    const handleActiveTab = (tabName) => {
        setActiveTab(tabName)
    }

    const getTodayFoods = async() => {
        
    }

    useEffect(() => {
        console.log("HOME SCREEN USE EFFECT RAN");
    },[])

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.cartContainer}>
                    <View  style={styles.moreButton}>
                        <MaterialIcons size={23} color={colors.white} name="info"/>
                        <AppText style={styles.moreText}>More</AppText>                    
                    </View>
                   <TouchableOpacity onPress={() => navigation.navigate({name: routes.CART_SCREEN})}>
                        <MenuCart />
                   </TouchableOpacity>
                </View>
                <View style={styles.select} >
                  <TouchableOpacity onPress={() => handleActiveTab('Food')} style={styles.selectItem}>
                    <View style={[styles.radio, activeTab == 'Food' && styles.active]}></View>
                    <AppText style={styles.selectText}>Foods</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleActiveTab('Today')} style={styles.selectItem}>
                    <View style={[styles.radio, activeTab == 'Today' && styles.active]}></View>
                    <AppText style={styles.selectText}>Today</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleActiveTab('Drink')} style={styles.selectItem}>
                    <View style={[styles.radio, activeTab == 'Drink' && styles.active]}></View>
                    <AppText style={styles.selectText}>Drinks</AppText>
                  </TouchableOpacity>
                </View>
                <View>
                    {activeTab == 'Food' && <FoodsDisplay />}
                    {activeTab == 'Today' && <TodayDisplay />}
                    {activeTab == 'Food' && <FoodsDisplay />}
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: colors.primary
    },
    container: {
        flex: 1,
        backgroundColor: defaultStyles.colors.dark,
        paddingHorizontal: 10,
    },
    cartContainer: {
        // width: '100%',
        alignItems: 'center',
        // backgroundColor: 'royalblue',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
        width: '100%',
    },
    radio: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        marginRight: 5
    },
    select: {
        position: 'relative',
        // flexDirection: 'row',
        backgroundColor: defaultStyles.colors.secondary,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-around',
        borderRadius: 4
    }, 
    selectText:  {
        fontSize: 18
    },
    selectItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: defaultStyles.colors.primary,
        fontSize: 70
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 14
    },

    moreButton: {
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10
    },

    moreText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5
    }
})

export default HomeScreen;