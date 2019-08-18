import * as TYPES from 'actions/types';

const initialState = {
    cartItems: []
};

if (localStorage.getItem("cartItems")) {
    const cartItems = localStorage.getItem("cartItems");
    initialState.cartItems = JSON.parse(cartItems);
}

export default function(state=initialState, action) {
    switch(action.type) {
        case TYPES.ADD_TO_CART:
            return { ...state, cartItems: action.payload };
        case TYPES.REMOVE_FROM_CART:
            return { ...state, cartItems: action.payload };
        case TYPES.CHECK_OUT:
            return { ...state, cartItems: [] };
        default:
            return state;
    }
}