import { combineReducers } from 'redux';
import cartReducer from './cartReducers';
import productReducer from './productReducer';
import walletReducer from './walletReducers';
import  addressReducer from './addressReducer';

const  reducers = combineReducers({
    cart: cartReducer,
    product: productReducer,
    wallet: walletReducer,
    address: addressReducer
});

export default reducers;