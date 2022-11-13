import actionTypes from "./actionTypes";

export const addItemsToCart = (items) => {
    return  (dispatch) => {
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: items
        })
    }
}

export const getCartItems = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_CART_ITEMS,
        })
    }
}

export const removeItemFromCart =  (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.REMOVE_CART_ITEM,
            payload: id
        })
    }
}

// PRODUCT ACTIONS

export const setActiveProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_ACTIVE_PRODUCT,
            payload: product
        })
    }
}

export const getActiveProduct = ()  => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_ACTIVE_PRODUCT
        })
    }
}

export const setTodayFoods = (foods) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_TODAY_FOODS,
            payload: foods
        })
    }
}

export const getTodayFoods = ()  => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_TODAY_FOODS
        })
    }
}

// WALLET ACTIONS

export const getWalletInfo = ()  => {
    return  (dispatch) => {
        dispatch({
            type: actionTypes.GET_WALLET_INFO
        })
    }
}

export const setWalletInfo = (info)  => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_WALLET_INFO,
            payload: info
        })
    }
}



// HOME DELIVERY

// CART TOTAL
export const setCartTotal = (value) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_CART_TOTAL,
            payload: value
        })
    }
}

