import React, { Component } from 'react'

import Products from 'components/Products';
import Filter from 'components/Filter';
import Basket from 'components/Basket';

import 'App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Shopping Cart</h1><hr />
                <div className="row">
                    <div className="col-md-8">
                        <Filter />
                        <Products />
                    </div>
                    <div className="col-md-4">
                        <Basket />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;