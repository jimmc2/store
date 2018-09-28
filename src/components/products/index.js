import React, { Component } from 'react';

import Product from '../product';

export default class Products extends Component {
    // const productsList = this.props.productsList; 
    render() {
        return (<div id="products" className="row">
            {this.props.productsList.map(product => <Product onRemoveProduct={this.props.onRemoveProduct} onAddProduct={this.props.onAddProduct} key={product.id} product={product}/>)}
            
        </div>);
    }
}
