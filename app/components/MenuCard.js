import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
function MenuCard({color, title, text, icon, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: color}]}>
            <MaterialCommunityIcons name={icon} size={25}/>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.text}>{text} items</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'royalblue',
        borderRadius: 10,
        height: 153,
        width: Dimensions.get('screen').width /  2 - 20,
        marginVertical: 20,
        paddingTop: 22,
        paddingLeft: 10
    },
    title: {
        color: colors.black,
        fontSize: 28,
        marginTop: 20
    },
    text: {
        color: colors.medium
    }
})

export default MenuCard;