import actionTypes from "../action-creators/actionTypes";

let initialState = { balance: 0 };

const walletReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_WALLET_INFO:
            return {
                ...state,
                ...action.payload
            }
        case actionTypes.GET_WALLET_INFO:
            return {
                ...state
            }
        default:
            return state
    }
}


export default walletReducer;