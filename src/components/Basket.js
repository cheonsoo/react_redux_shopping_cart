import React, { Component } from 'react';
import util from 'util.js'
import { connect } from 'react-redux';
import { removeFromCart, checkingOut } from 'actions/cartActions';

class Basket extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Basket is empty" : <div>You have {cartItems.length} products in the basket</div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map((item, idx) => (
                                <li key={idx}>
                                    <b>{item.title}</b>
                                    X {item.count}
                                    <button className="btn btn-danger" onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>X</button>
                                </li>
                            ))}
                        </ul>
                        Total: {util.formatCurrency(cartItems.reduce((accumulate, current) => accumulate + current.price * current.count, 0))}
                        
                        <br />
                        <button className="btn btn-primary" onClick={evt => this.props.checkingOut()}>Check Out</button>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.carts.cartItems
});

export default connect(mapStateToProps, { removeFromCart, checkingOut })(Basket);