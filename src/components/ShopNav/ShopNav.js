import React, { Component } from 'react';
import './ShopNav.css';
import { Link } from 'react-router-dom';

export default class ShopNav extends Component {
  render() {
    // console.log(this.state.products);
    return (
      <div className='shop-left'>
        <ul>
          <Link to={'/shop'} onClick={() => this.props.getall()}>
            Browse All
          </Link>
          <br />
          <Link to='/shop/new' onClick={() => this.props.getnew()}>
            New Items
          </Link>
          <hr />
          <ul>
            <li>
              <Link to={'shop/shirt'}>Shirts</Link>
            </li>
            <li>
              <Link to={`/shop/sweater`}>Sweaters</Link>
            </li>
            <li>
              <Link to={`/shop/pants`}>Pants</Link>
            </li>
            <li>
              <Link to={`/shop/shoe`}>Shoes</Link>
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}
