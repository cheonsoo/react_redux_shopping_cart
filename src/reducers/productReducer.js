import * as TYPES from 'actions/types';

const initialState = {
    data: [],
    filteredItems: [],
    size: ''
};

export default function(state=initialState, action) {
    switch(action.type) {
        case TYPES.FETCH_PRODUCTS:
            return { ...state, data: action.payload, filteredItems: [] };
        case TYPES.FILTER_PRODUCTS_BY_SIZE:
            return { ...state, filteredItems: action.payload.items, size: action.payload.size };
        case TYPES.SORT_PRODUCTS_BY_PRICE:
            return { ...state, filteredItems: action.payload };
        default:
            return state;
    }
}