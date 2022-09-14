import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

import AppText from './AppText';

function AppRadioButton({ icon, isActive, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.radio, {backgroundColor: isActive ? colors.medium : 'transparent'}]}>
                
            </View>
            <AppText style={styles.text}>Complete</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 20
    },
    radio: {
        height: 22,
        width: 22,
        // backgroundColor: colors.medium,
        borderWidth: 1,
        borderColor: colors.medium,
        borderRadius: 11
    },
    text: {
        marginLeft: 5,
        fontSize: 15
        // fontWeight: 'bold'
    }
})
export default AppRadioButton;