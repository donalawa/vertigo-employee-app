import actionTypes from "../action-creators/actionTypes";

const initialState = {activeProduct: null, todayFoods: [], loading: false};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TODAY_FOODS:
            return {
                ...state,
                todayFoods: action.payload
            }
        case actionTypes.GET_TODAY_FOODS:
            return {
                ...state
            }
        case actionTypes.SET_ACTIVE_PRODUCT:
            return {
                ...state,
                activeProduct: action.payload
            }
        case actionTypes.GET_ACTIVE_PRODUCT:
            return  {
                ...state
            }
        default: {
            return state;
        }
    }
}

export default productReducer;