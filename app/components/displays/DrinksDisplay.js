import React from 'react';
import { View, Text, StyleSheet,  ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import MenuCard from '../MenuCard';
import defaultStyles from '../../config/styles'

function DrinksDisplay(props) {
    const navigation  =  useNavigation();
    
    return (
        <ScrollView style={{ height: Dimensions.get('screen').height - 320}}>
            <View style={styles.container}>
                <MenuCard onPress={() => navigation.navigate('Products')} title="Breakfast" text="13" icon="tea" color={defaultStyles.colors.cardColors[0]}/>
                <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
                <MenuCard title="Wine" text="22" icon="glass-wine" color={defaultStyles.colors.cardColors[1]}/>
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

export default DrinksDisplay;