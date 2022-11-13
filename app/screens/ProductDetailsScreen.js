import React, { cloneElement, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from '../components/AppText';
import AppPageHeader from '../components/AppPageHeader';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function ProductDetails(props) {
    const navigation = useNavigation();
    
    return (    
        <Screen>
            <View style={styles.container}>
                <View>
                    <AppPageHeader title="Details" onPress={() => navigation.navigate('Landing')}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image} source={require('../../assets/images/burger.jpeg')}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <View>
                            <AppText style={styles.name}>Cheesse Pizza</AppText>
                            <AppText style={styles.categoryText}>Pizza</AppText>
                        </View>
                        <View style={styles.priceContainer}>
                            <AppText style={styles.priceText}>22,000 cfa</AppText>
                            <View style={styles.quantityContainer}>
                                <View style={styles.quantityButton}>
                                    <MaterialCommunityIcons size={18} color={colors.primary} name="minus" />
                                </View>
                                <AppText style={styles.quantityText}>0</AppText>
                                <View style={styles.quantityButton}>
                                    <MaterialCommunityIcons size={18} color={colors.primary} name="plus" />
                                </View>
                            </View>
                        </View>
                        <View style={styles.discriptionContainer}>
                            <AppText style={styles.discriptionText}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            </AppText>
                        </View>
                        <View style={styles.tappingsContainer}>
                            <AppText style={styles.tappingsTitle}>Available Tappings</AppText>
                            <View style={styles.tappings}>
                                <View style={styles.tapping}>
                                    <View style={styles.left}>
                                        <Image style={styles.smallImage} source={require('../../assets/images/addon.png')} />
                                        <AppText>Mushrooms</AppText>
                                    </View>
                                    <View style={styles.right}>
                                        <AppText>2,000 cfa</AppText>
                                        <View style={styles.radio}></View>
                                    </View>
                                </View>

                                <View style={styles.tapping}>
                                    <View style={styles.left}>
                                        <Image style={styles.smallImage} source={require('../../assets/images/addon.png')} />
                                        <AppText>Mushrooms</AppText>
                                    </View>
                                    <View style={styles.right}>
                                        <AppText>2,000 cfa</AppText>
                                        <View style={styles.radio}></View>
                                    </View>
                                </View>


                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <AppButton title="Add To Cart" />
                        </View>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20
    },

    container: {
 
    },

    contentContainer: {
    },

    categoryText: {
        fontSize: 18,
        color: colors.medium
    },

    discriptionContainer: { 
        marginTop: 15
    },

    discriptionText: {
        fontSize: 14,
        color: colors.medium
    },

    imageBox: {
        width: Dimensions.get('screen').width,
        // backgroundColor: 'red',
        height: Dimensions.get('screen').height / 3,
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    infoContainer:  {
        paddingHorizontal: 15
    },

    name: {
        fontSize: 22,
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    priceText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.medium
    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    quantityButton: {
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 8,
        borderRadius: '50%'
    },

    quantityText: {
        marginHorizontal: 8,
        fontSize: 20
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    radio: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: '50%',
        marginLeft: 10
    },

    right: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    smallImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10
    },

    tappings: {
        paddingTop: 20
    },

    tapping: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },

    tappingsContainer: {
        marginTop: 15
    },

    tappingsTitle: {
        fontSize: 18
    }
})

export default ProductDetails;