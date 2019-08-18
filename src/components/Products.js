import React, { Component } from 'react'
import util from 'util.js'
import { connect } from 'react-redux';
import { fetchProducts } from 'actions/productActions';
import { addToCart } from 'actions/cartActions';

class Products extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        const productItems = this.props.products.map((product, idx) => (
            <div key={idx} className="col-md-4">
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}>
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>
                    </a>
                    <div>
                        <b>{util.formatCurrency(product.price)}</b><br /><br />
                        <button className="btn btn-primary" onClick={() => this.props.addToCart(this.props.cartItems, product)}>Add To Cart</button><hr />
                    </div>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: (state.products.filteredItems && state.products.filteredItems.length > 0) ? state.products.filteredItems : state.products.data,
        cartItems: state.carts.cartItems
    }
};

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);