import * as TYPES from 'actions/types';

const API_HOST = 'http://localhost:3003';
const KEY_CART_ITEMS = 'cartItems';

export const fetchProducts = () => dispatch => {
    const url = `${API_HOST}/products`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        return dispatch({ type: TYPES.FETCH_PRODUCTS, payload: data });
    });
};

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

export const sortProductsByPrice = (products, filteredItems, sort) => dispatch => {
    const items = ((filteredItems && filteredItems.length > 0) ? filteredItems : products).slice();
    
    items.sort((a, b) => {
        if (sort === 'ASC') {
            return a.price > b.price ? 1 : -1;
        } else {
            return a.price > b.price ? -1 : 1;
        }
    });
    
    return dispatch({ type: TYPES.SORT_PRODUCTS_BY_PRICE, payload: items });
};

export const filterProducts = (products, size) => dispatch => {
    return dispatch({ type: TYPES.FILTER_PRODUCTS_BY_SIZE, payload: {
        size: size,
        items: size === '' ? products : products.filter(item => item.availableSizes.indexOf(size) >= 0)
    }});
};

export const checkingOut = () => dispatch => {
    localStorage.setItem('cartItems', '[]');
    return dispatch({ type: TYPES.CHECK_OUT, payload: [] });
};
