import React, { Component } from 'react';
import { useSelector } from 'react-redux';

class Test extends Component {
    render() {
        const { products } = useSelector(state => state.products.data);
        return (
            <div>TEST: {products ? products.length : 0}</div>
        );
    }
}

export default Test;