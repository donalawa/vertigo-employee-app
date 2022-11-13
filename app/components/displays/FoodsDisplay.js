import React from 'react';
import { View, Text, StyleSheet,  ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import MenuCard from '../MenuCard';
import defaultStyles from '../../config/styles'

function FoodsDisplay(props) {
    const navigation  =  useNavigation();

    return (
        <ScrollView style={{ height: Dimensions.get('screen').height - 320}}>
            <View style={styles.container}>
                <MenuCard onPress={() => navigation.navigate('Products', {day: "Monday"})} title="Monday" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                <MenuCard onPress={() => navigation.navigate('Products', {day: "Tuesday"})} title="Tuesday" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[Math.ceil(Math.random() * 3)]}/>
                <MenuCard onPress={() => navigation.navigate('Products', {day: "Wednesday"})} title="Wednesday" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[Math.ceil(Math.random() * 3)]}/>
                <MenuCard onPress={() => navigation.navigate('Products', {day: "Thursday"})} title="Thursday" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[Math.ceil(Math.random() * 3)]}/>
                <MenuCard onPress={() => navigation.navigate('Products', {day: "Friday"})} title="Friday" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[Math.ceil(Math.random()) * 3]}/>
                <MenuCard onPress={() => navigation.navigate('Products', {day: "Saturday"})} title="Saturday" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[Math.ceil(Math.random()  * 3)]}/>
                <MenuCard onPress={() => navigation.navigate('Products', {day: "Sunday"})} title="Sunday" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[Math.ceil(Math.random() * 3)]}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})

export default FoodsDisplay;