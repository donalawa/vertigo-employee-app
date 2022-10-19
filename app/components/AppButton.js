import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, color='primary', onPress}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    text: {
        color: colors.white,
        fontSize: 16
    }
})
export default AppButton;