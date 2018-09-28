import React, { Component } from 'react'
import Products from '../products'
import { products } from '../../static/data/products.js';
import Cart from '../cart';

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            products: products,
            cart: {items:[], total:0}
            }
        this.removeProduct = this.removeProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }


    removeProduct(productToRemove) {
        let cart = Object.assign({}, this.state.cart);
        cart.total = 0
        let incart = false;
        for(let i = 0; i<cart.items.length;i++){
            if(productToRemove.id === cart.items[i].id){
                cart.items[i].q-=1;
                incart = true;
                if(cart.items[i].q === 0){cart.items.splice(i,1)}
            }
            ;}
        
        if(incart===false){
            alert("That item is not in your cart!");
            ;}
        for (let i = 0; i < cart.items.length; i++) {
            cart.total += (cart.items[i].price * cart.items[i].q);
        }    
        this.setState({ cart: cart })
    }
    addProduct(productToAdd) {
        let cart = Object.assign({}, this.state.cart);
        cart.total = 0
        let incart = false;
        for(let i = 0; i<cart.items.length;i++){
            if(productToAdd.id === cart.items[i].id){
                cart.items[i].q+=1;
                incart = true;
            }
            ;}
        if(incart===false){
            productToAdd.q = 1;
            cart.items.push(productToAdd);
            ;}
        for (let i = 0; i < cart.items.length; i++) {
            cart.total += (cart.items[i].price * cart.items[i].q);
        }    
        this.setState({ cart: cart })
    }

  
    render() {
    return <div className="row view-group">
        <div className="col-lg-9">
            <Products onRemoveProduct={this.removeProduct} onAddProduct={this.addProduct} productsList={this.state.products} />
        </div>
        <div className="col-lg-3 col-sm-12 product-row">
          <Cart cartItems={this.state.cart}/>
        </div>
      </div>;
  }
}
