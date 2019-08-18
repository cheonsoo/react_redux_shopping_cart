import * as TYPES from 'actions/types';

const initialState = {
    data: [],
    cartItems: [],
    filteredItems: [],
    size: ''
};

if (localStorage.getItem("cartItems")) {
    const cartItems = localStorage.getItem("cartItems");
    initialState.cartItems = JSON.parse(cartItems);
}

export default function(state=initialState, action) {
    switch(action.type) {
        case TYPES.FETCH_PRODUCTS:
            return { ...state, data: action.payload, filteredItems: action.payload };
        case TYPES.ADD_TO_CART:
            return { ...state, cartItems: action.payload };
        case TYPES.REMOVE_FROM_CART:
            return { ...state, cartItems: action.payload };
        case TYPES.FILTER_PRODUCTS_BY_SIZE:
            return { ...state, filteredItems: action.payload.items, size: action.payload.size };
        case TYPES.SORT_PRODUCTS_BY_PRICE:
            return { ...state, filteredItems: action.payload };
        case TYPES.CHECK_OUT:
            return { ...state, cartItems: [], filteredItems: [], size: '' };
        default:
            return state;
    }
}