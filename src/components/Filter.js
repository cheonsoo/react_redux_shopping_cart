import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProductsByPrice } from 'actions/productActions';

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">{this.props.count} product found</div>
                <div className="col-md-4">
                    <label>
                        Order by
                        <select className="form-control" value={this.props.sort}
                                onChange={evt => this.props.sortProductsByPrice(this.props.products, this.props.filteredItems, evt.target.value)}>
                            <option value=''>-----</option>
                            <option value='ASC'>lowest</option>
                            <option value='DESC'>highest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter Size
                        <select className="form-control" value={this.props.size}
                                onChange={evt => this.props.filterProducts(this.props.products, evt.target.value)}>
                            <option value="">-----</option>
                            <option value="X">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.data,
    filteredItems: state.products.filteredItems,
    size: state.products.size
});

export default connect(mapStateToProps, { filterProducts, sortProductsByPrice })(Filter);