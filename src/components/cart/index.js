import React, { Component } from 'react'
import CartItem from './cartitem.js'

export default class Cart extends Component {
  render() {
    return (
      <div className='cart container f'>
        <div className='cart-title'>Jim's Cart</div>
            {this.props.cartItems.items.map(item => <CartItem key={item.id} item={item} />)}
        <div className='cart-total'>
                <div className='col-md-9 tp'>Total: </div> 
                <div className='col-md-3 tp'>${Number(this.props.cartItems.total).toFixed(2)}</div>
        </div>
        
      </div>
    )
  }
}
