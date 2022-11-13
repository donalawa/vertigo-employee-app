import actionTypes from "../action-creators/actionTypes"


let initialState = {addresses: []};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ADDRESSES:
            return {
                addresses: action.payload
            }
        case actionTypes.ADD_ADDRESS:
            return {
                ...state,
                addresses: [...state.addresses, action.payload]
            }
        default:
            return state
    }
}

export default reducer;