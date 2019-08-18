import { combineReducers } from 'redux';
import productReducer from 'reducers/productReducer';
import cartReducer from 'reducers/cartReducer';

export default combineReducers({
    products: productReducer,
    carts: cartReducer
});