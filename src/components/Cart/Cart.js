import React, { Component } from 'react';
import './Cart.css';
// import { Link } from 'react-router-dom';

export default class Cart extends Component {
  constructor() {
    super();

    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    window.location.replace('#/shop');
  }

  render() {
    return (
      <div className='cart-outer-container'>
        <h1>Thanks for shopping!</h1>
        <div className='cart-container'>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
          <div className='cart'>
            <img src='https://via.placeholder.com/100x100' alt='img desc' />
            <h1>product name</h1>
            <h1>product price</h1>
            <h1>product quantity</h1>
            <button>remove item</button>
          </div>
        </div>
        <div className='checkout-buttons'>
          <button onClick={() => this.goHome()}>continue shopping</button>
          <button>checkout</button>
        </div>
      </div>
    );
  }
}
