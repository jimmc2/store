import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const prod = this.props.product
    return <div className="item col-xs-4 col-lg-4">
        <div className="thumbnail card">
          <div className="img-event">
          <img className="group list-group-image img-fluid" src={prod.image} alt={prod.name} />
          </div>
          <div className="caption card-body">
            <h4 className="group card-title inner list-group-item-heading">
              {prod.name}
            </h4>
            <p className="group inner list-group-item-text">
              {prod.description}
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-6">
              <p className="lead">${Number(prod.price).toFixed(2)}</p>
              </div>
              <div className="col-xs-12 col-md-6">
                <button className="btn btn-success" onClick={() => this.props.onAddProduct(prod)}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="pushy pull-right text-center">
            <div className="btn-group">
              <button className="btn btn-info" id="list">
                Do Nuthin
              </button>
              <button className="btn btn-danger" onClick={() => this.props.onRemoveProduct(prod)}  id="grid">Remove</button>
            </div>
          </div>
        </div>
      </div>;
  }
}
