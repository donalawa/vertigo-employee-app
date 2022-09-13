import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import defaultStyles from '../config/styles';
import MenuCart from '../components/MenuCart';
import Screen from '../components/Screen';

function HomeScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <MenuCart />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultStyles.colors.dark
    }
})

export default HomeScreen;