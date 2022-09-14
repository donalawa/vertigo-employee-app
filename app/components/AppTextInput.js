import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import colors from '../config/colors';

function AppTextInput({icon, width="100%",style, searchIcon, ...otherProps}) {
    return (
        <View style={[styles.container, {width: width}]}>
            <View style={[styles.inputContainer, style]}>
                {icon && <MaterialCommunityIcons name={icon} size={30} color={defaultStyles.colors.primary} style={styles.icon}/>}
                <TextInput 
                placeholderTextColor={defaultStyles.colors.medium}
                style={[defaultStyles.text, styles.inputText, style]}
                {...otherProps}
                />
                {searchIcon && <MaterialCommunityIcons name="text-search" color={colors.light} size={24}/>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: defaultStyles.colors.light,
        // borderRadius: 10,
        // flexDirection: 'row',
        // padding: 15,
        marginVertical: 10,
        // alignItems: 'center'
    },
    icon: {
        marginRight: 10
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: defaultStyles.colors.primary,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        height: 56,
        borderRadius: 8,
        paddingHorizontal: 10
    },
    inputText: {
        color: colors.light
    }
})

export default AppTextInput;