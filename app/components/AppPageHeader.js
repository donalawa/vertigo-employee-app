import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppLargeText from './AppLargeText';
import Screen from './Screen';
import colors from '../config/colors';

function AppPageHeader({title, onPress, noIcon}) {
    return (
            <View style={[styles.container, { justifyContent: noIcon ? 'center' : 'space-between'}]}>
                {!noIcon && <MaterialCommunityIcons onPress={onPress} color={colors.white} size={24} name="arrow-left"/>}
                {title && <AppLargeText style={styles.text}>{ title }</AppLargeText>}
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'orange'
    },

    text: {
        fontSize: 70,
        color: colors.primary
    }

})
export default AppPageHeader;