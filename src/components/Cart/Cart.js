import React, { Component } from 'react';
import './Cart.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      total: [],
    };

    this.goHome = this.goHome.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getCart = this.getCart.bind(this);
    this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    this.getCart();
    this.getTotal();
  }

  getTotal() {
    axios.get('/api/total').then((res) => {
      this.setState({
        total: res.data[0].sum,
      });
    });
  }

  getCart() {
    axios.get('/api/cart').then((res) => {
      this.setState({
        cart: res.data,
      });
    });
  }

  goHome() {
    window.location.replace('#/shop');
  }

  deleteItem(id) {
    // console.log(id);
    axios.delete(`/api/delete/${id}`).then(() => {
      this.getCart();
      this.getTotal();
    });
  }

  render() {
    console.log(this.state.cart);
    // console.log(this.state.total);

    const mappedCart = this.state.cart.map((product) => {
      return (
        <div className='item'>
          <img
            src={product.img}
            alt={product.description}
            className='item-img'
          />
          <h1>{product.name}</h1>
          <h1>{product.size}</h1>
          <h1>${product.price}</h1>
          <button onClick={() => this.deleteItem(product.cart_id)}>X</button>
        </div>
      );
    });

    return (
      <div className='cart-outer-container'>
        <div className='cart-inner'>
          <div className='cart-left'>{mappedCart}</div>

          <div className='cart-right'>
            <h1>TOTAL: {this.state.total}</h1>
            <button className='checkout-btn'>checkout</button>
            <hr />
            <button onClick={() => this.goHome()} className='checkout-home'>
              continue shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
}
