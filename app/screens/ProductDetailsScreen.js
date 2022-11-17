import React, { cloneElement, useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { useDispatch,  useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppText from '../components/AppText';
import AppPageHeader from '../components/AppPageHeader';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import { addItemToStorage, getAllItemsFromStorage } from '../utility/cart';
import { actionCreators } from '../state';
import Toast from 'react-native-toast-message';

function ProductDetails(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { addItemsToCart } = bindActionCreators(actionCreators, dispatch);
    const [newItem, setNewItem]  = useState({
        id: '',
        name: '',
        price: 0,
        image: '',
        addons: [],
        number: 1
    });

    // SIMULATING THE CART 
    let [testCart, setTestCart]  = useState([]);


    let activeProduct = useSelector(state => state.product.activeProduct)
    let cartItems = useSelector(state => state.cart.cartItems);
    let [activeQuantity, setActiveQuantity] = useState(1);

    const handleAddQuantity = async () => {
        let tappinsPrice = 0;
        if(newItem.addons.length > 0) {
             for(let tap of newItem.addons) {
                 tappinsPrice += +tap.price
             }
        }

        console.log(tappinsPrice)
        setNewItem({
            ...newItem,
            number: newItem.number  += 1,
            price: newItem.price += (+activeProduct.price + tappinsPrice)
        })
        // setNewItem({
        //     ...newItem,
        //     price: +activeProduct.price * newItem.number
        // })
        // console.log(newItem);
    }

    const reduceAddQuantity = async () => {
        let tappinsPrice = 0;
        if(newItem.addons.length > 0) {
             for(let tap of newItem.addons) {
                 tappinsPrice += +tap.price
             }
        }

        
        if(newItem.number > 1) {
            setNewItem({
                ...newItem,
                number: newItem.number  -= 1,
                price: newItem.price -= (+activeProduct.price + tappinsPrice)
            })
        }
    }

    const addonExist = (addon) => {
        let exist = false;
        // console.log('NEW ITEM BELOW')
        // console.log(newItem)
        for(let tappin of newItem.addons) {
            if(tappin.name == addon.name) {
                exist = true;
                break;
            }
        }
        return exist;
    }

    const handleAddTapping = (addon) => { 
        console.log(addonExist(addon))   
        if(newItem.addons.indexOf(addon) < 0) {
            // NEW ADDON
            // console.log('NEW ADDON');
            setNewItem({
                ...newItem,
                addons: [...newItem.addons, addon],
                price: newItem.price += (+addon.price * newItem.number)
            })

        }else {
            setNewItem({
                ...newItem,
                addons: newItem.addons.filter(add => add.name != addon.name),
                price: newItem.price -= (+addon.price * newItem.number)
            })
        }
    }

    const checkAddonsMatch = (itemAddons) => {
        let addonsMatch = false;
        if(itemAddons.length == newItem.addons.length) {
            // WE SET TO TRUE JUST INCASE THE ADDONS ARRAY  IS EMPTY 
            addonsMatch = true;
            for(let i = 0; i < itemAddons.length; i++) {
                let exist = false;
                for(let k = 0; k < itemAddons.length; k++) {
                    if(itemAddons[k].name == newItem.addons[i].name){
                        exist = true;
                    }

                }

                if(exist == false) {
                    addonsMatch = false;
                    // console.log('##########NO  new MATCH#############')
                    // console.log(newItem.addons);
                    // console.log(itemAddons)
                    break;
                }
         
            }
        }

        return addonsMatch;
    }

    const itemExistInCart  = (item) => {
        let itemExist = false;
        let itemsExistMatch = [];
        let indx = null;


        // COMPARE  ITEM NAMES FIRST
        for(let i = 0; i < testCart.length; i++) {
            if(testCart[i].id == item.id) {
                itemExist = true;
                indx = i;
                itemsExistMatch.push(indx)
            }
        }


        if(itemExist) {
            // THIS MEANS FIRST CASE PASS AND  ITEM DOES EXIST NOW COMPARE ADDONS
            // MAKE SURE BOTH ITEMS WITH SAME NAME HAVE SAME ADDONS LENGTH
            // RESET EXIST BACK TO FALSE FOR SECOND CHECK
            itemExist = false;
            for(let j = 0;  j  < itemsExistMatch.length;  j++) {
                if(checkAddonsMatch(testCart[itemsExistMatch[j]].addons)) {
                    itemExist = true;
                    let newTestArr = [...testCart];
                    newTestArr[itemsExistMatch[j]].number += 1;
                    newTestArr[itemsExistMatch[j]].price += (activeProduct.price * newItem.number)
                    setTestCart([
                        ...newTestArr
                    ])
                    break;
                }
            }
        }

        return itemExist;
    }

    const handleAddToCart = async () => {
        if(itemExistInCart(newItem)) {
            console.log('Item Exist Just Increase Quantity');
            
        }else {
            setTestCart([
                ...testCart,
                newItem
            ])
       
        }

        showToast({TYPE: "success", title: "Success", message: "Added Item To Cart"})
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Added Item To Cart 👋'
          });
    }


    const getItems = async()  => {
        let items = await getAllItemsFromStorage();
        if(items == null) {
            setTestCart([]);
        }else {
            setTestCart([...items])
        }
    }
    
    const handleAddItemsToStorage = async(items) => {
        let updatedList  = await addItemToStorage(items);
        // console.log(updatedList)
        addItemsToCart(updatedList);
    }

    
    useEffect(() => {
        if(testCart.length > 0){
            handleAddItemsToStorage(testCart)
        };
    }, [testCart])

    useEffect(() => {
        // console.log(activeProduct)
        // console.log(cartItems)
        setNewItem({
            id: activeProduct.id,
            name: activeProduct.name,
            price: +activeProduct.price,
            image: activeProduct.image,
            addons: [],
            number: 1
        })
        getItems();

    },[]);

    return (    
        <Screen>
            <View style={styles.container}>
                <View>
                    <AppPageHeader title="Details" onPress={() => navigation.navigate('Landing')}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image} source={{ uri: activeProduct.image }}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <View>
                            <AppText style={styles.name}>{activeProduct.name}</AppText>
                            <AppText style={styles.categoryText}>Pizza</AppText>
                        </View>
                        <View style={styles.priceContainer}>
                            <AppText style={styles.priceText}>{activeProduct.price} cfa</AppText>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={reduceAddQuantity} style={styles.quantityButton}>
                                    <MaterialCommunityIcons size={18} color={colors.primary} name="minus" />
                                </TouchableOpacity>
                                <AppText style={styles.quantityText}>{newItem?.number}</AppText>
                                <TouchableOpacity onPress={handleAddQuantity} style={styles.quantityButton}>
                                    <MaterialCommunityIcons size={18} color={colors.primary} name="plus" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.discriptionContainer}>
                            <AppText style={styles.discriptionText}>
                                {activeProduct.message}
                            </AppText>
                        </View>
                        <View style={styles.tappingsContainer}>
                            <AppText style={styles.tappingsTitle}>Available Tappings</AppText>
                            <View style={styles.tappings}>
                               {activeProduct.addOn.map((item) => <View key={item.name} style={styles.tapping}>
                                    <View style={styles.left}>
                                        <Image style={styles.smallImage} source={{ uri: item.image }} />
                                        <AppText style={styles.smallText}>{item.name}</AppText>
                                    </View>
                                    <TouchableOpacity onPress={() => handleAddTapping(item)} style={styles.right}>
                                        <AppText  style={styles.smallText}>+{item.price} cfa</AppText>
                                        <View style={[styles.radio, addonExist(item)  && styles.active]}></View>
                                    </TouchableOpacity>
                                </View>)}
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <AppButton  onPress={handleAddToCart} title="Add To Cart" />
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