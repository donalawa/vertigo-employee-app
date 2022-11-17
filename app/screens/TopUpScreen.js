import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput,   TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function TopUpScreen({navigation, route}) {
    let params = route.params;
    let [topUpAmount, setTopUpAmount] =  useState(0);
    let [empKey, setEmpKey] = useState('');

    const handleTopUp = () => {
        console.log("AMOUNT", topUpAmount);
        console.log("EMP KEY: ",  empKey);
    }

    useEffect(() => {
        console.log("COMPONENT RAN");
        console.log(params);
    },[]);  

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.topBar}>
                        <MaterialIcons onPress={() =>  navigation.navigate("ScanCode")} size={25} color={colors.white} name="arrow-back" />
                        <AppText style={{ color: colors.white}}>Enter Amount</AppText>
                        <View><AppText> </AppText></View>
                    </View>
                    <View style={styles.inputContainer}>
                        <AppText style={styles.rangeText}>Min: 1000 cfa - Max: 100,000 cfa</AppText>
                        <View style={styles.inputBox}>
                            <AppText style={styles.currencyText}>XAF</AppText>
                            <TextInput  value={topUpAmount} keyboardType="number-pad" onChange={(e =>  setTopUpAmount(e.target.value))} placeholderTextColor={colors.medium} placeholder="0.00" style={styles.textInput}/>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    {/* <AppText>ENTER AMOUNT AND TOP  UP  YOUR BALANCE</AppText> */}
                    <View style={styles.input}>
                        <TextInput value={empKey} onChange={(e =>  setEmpKey(e.target.value))} style={{ height: 50, fontSize: 16, color: colors.white}}  secureTextEntry placeholderTextColor={colors.white} placeholder="Employee Key"/> 
                    </View>
                    <AppButton onPress={handleTopUp} title="Complete"/>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        flex:1,
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingHorizontal: 10
    },
    container: {
        flex: 1
    },
    currencyText: {
        color: colors.light,
        fontSize: 42
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    input: {
        height: 50,
        // backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    },
    inputBox: {
        width: '100%',
        height: 80,
        // backgroundColor: '#f8f8f8',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    rangeText: {
        marginLeft: 5,
        textAlign: 'center'
    },
    textInput: {
        fontSize: 42,
        color: colors.black
    },
    topContainer: {
        height: Dimensions.get('screen').height / 2.3,
        backgroundColor: colors.primary,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        
    }
})

export default TopUpScreen;