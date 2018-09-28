import React, { Component } from 'react'


export default class CartItem extends Component {
  render() {
    const item = this.props.item;
    return (
        <div className='row product-row'>
            <div className='col-md-3 product-image'>
                <img src="http://placehold.it/60x37/000/fff&text=Product_No4" className="img-fluid " alt="" />
            </div>
            <div className='col-md-5 prod-name'>
                {item.name}
                    </div>
            <div className='col-md-1 prod-q'>
                x{Number(item.q)}
                    </div>
            <div className='col-md-3 prod-p'>
                ${(Number(item.price) * Number(item.q)).toFixed(2)}
            </div>
        </div>
      
    )
  }
}



