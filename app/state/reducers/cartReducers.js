import actionTypes from "../action-creators/actionTypes";

const initialState = { cartItems: [], loading: false, homeDelivery: false, cartTotal: 0 };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: action.payload
            }

        case actionTypes.GET_CART_ITEMS:
            return {
                ...state,
            }

        case actionTypes.REMOVE_CART_ITEM:
            let newItems = state.cartItems.map(item => item.id != action.payload);

            return  {
                ...state,
                cartItems: [...newItems]
            }

        case actionTypes.SET_HOME_DELIVERY:
            return {
                ...state,
                homeDelivery: action.payload
            }
        case actionTypes.SET_CART_TOTAL:
            return  {
                ...state,
                cartTotal: action.payload
            }
        default:
            return state;
    }
}

export default reducer;