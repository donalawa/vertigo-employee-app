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
import colors from '../config/colors';

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
                {/* <Picker
                    style={{color: '#fff', height:50}}
                    selectedValue={selectedItem}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedItem(itemValue)
                    }>
                    <Picker.Item  label="Foods" value="foods" />
                    <Picker.Item  label="Drinks" value="drinks" />
                  </Picker>
                  <MaterialCommunityIcons size={24} color={defaultStyles.colors.light} style={styles.icon} name="arrow-down-circle-outline" /> */}
                  <View style={styles.selectItem}>
                    <View style={styles.radio}></View>
                    <AppText style={styles.selectText}>Foods</AppText>
                  </View>
                  <View style={styles.selectItem}>
                    <View style={styles.radio}></View>
                    <AppText style={styles.selectText}>Today</AppText>
                  </View>
                  <View style={styles.selectItem}>
                    <View style={[styles.radio, styles.active]}></View>
                    <AppText style={styles.selectText}>Drinks</AppText>
                  </View>
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
    }
})

export default HomeScreen;