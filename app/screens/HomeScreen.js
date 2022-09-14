import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from '../components/AppText';
import AppLargeText from '../components/AppLargeText';
import defaultStyles from '../config/styles';
import MenuCart from '../components/MenuCart';
import MenuCard from '../components/MenuCard';
import routes from '../navigation/routes';
import Screen from '../components/Screen';

function HomeScreen({ navigation }) {
    const [selectedItem, setSelectedItem] = useState();

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.cartContainer}>
                    <AppLargeText style={styles.title}>MENU</AppLargeText>
                   <TouchableOpacity onPress={() => navigation.navigate({name: routes.CART_SCREEN})}>
                        <MenuCart />
                   </TouchableOpacity>
                </View>
                <View style={styles.select} >
                <Picker
                    style={{color: '#fff'}}
                    selectedValue={selectedItem}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedItem(itemValue)
                    }>
                    <Picker.Item  label="Foods" value="foods" />
                    <Picker.Item  label="Drinks" value="drinks" />
                  </Picker>
                  <MaterialCommunityIcons size={24} color={defaultStyles.colors.light} style={styles.icon} name="arrow-down-circle-outline" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <MenuCard onPress={() => navigation.navigate('Products')} title="Breakfast" text="13" icon="tea" color={defaultStyles.colors.cardColors[0]}/>
                    <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
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
    select: {
        position: 'relative',
        // flexDirection: 'row',
        backgroundColor: defaultStyles.colors.secondary
    }, 
    title: {
        color: defaultStyles.colors.primary,
        fontSize: 70
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 14
    }
})

export default HomeScreen;