import * as TYPES from 'actions/types';

const KEY_CART_ITEMS = 'cartItems';

export const addToCart = (cartItems, product) => dispatch => {

    let productAlreadyInCart = false;
    cartItems.forEach(item => {
        if (item.id === product.id) {
            productAlreadyInCart = true;
            item.count++;
        }
    });

    if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }

    localStorage.setItem(KEY_CART_ITEMS, JSON.stringify(cartItems));

    const items = JSON.parse(JSON.stringify(cartItems));
    
    return dispatch({ type: TYPES.ADD_TO_CART, payload: items });
};

export const removeFromCart = (cartItems, product) => dispatch => {
    const items = cartItems.filter(item => item.id !== product.id);
    localStorage.setItem(KEY_CART_ITEMS, JSON.stringify(items));
    return dispatch({ type: TYPES.REMOVE_FROM_CART, payload: items });
};

export const checkingOut = () => dispatch => {
    alert('Checking Out ...');
    localStorage.setItem('cartItems', '[]');
    return dispatch({ type: TYPES.CHECK_OUT, payload: [] });
};
