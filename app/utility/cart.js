import AsyncStorage from '@react-native-async-storage/async-storage';

async function itemExist(item) {
    // Get all items from async storage
    try {
        let items = await AsyncStorage.getItem('cart');
        let itemsValue = JSON.parse(items);
        let itemExist = false;
  
        for(let i = 0; i < itemsValue.length; i++) {
            if(itemsValue[i].item.id == item.item.id) {
                itemExist = true;
                break;
            }
        }

        return itemExist;
    } catch (error) {
        console.log("Error getting all items");
    }
}


async function addItemToStorage (items) {
    
    await AsyncStorage.setItem('cart', JSON.stringify([...items]));

    let updatedItems = await getAllItemsFromStorage();

    return  updatedItems;
}

async function getAllItemsFromStorage () {
    // Get all items from async store
   try {
        let allItems = await AsyncStorage.getItem('cart');
        return JSON.parse(allItems);
   } catch (error) {
       console.log('Error getting all items');
   }
}


export {
    itemExist,
    getAllItemsFromStorage,
    addItemToStorage,
}

