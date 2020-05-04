import React, { Component } from 'react';
import './ShopNav.css';
import { Link } from 'react-router-dom';

export default class ShopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

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
          <Link to={'shop/shirt'} onClick={() => this.props.bytype()}>
            Shirts
          </Link>
          <br />
          <Link to={`/shop/sweater`}>Sweaters</Link>
          <br />
          <Link to={`/shop/pants`}>Pants</Link>
          <br />
          <Link to={`/shop/shoe`}>Shoes</Link>
          <br />
        </ul>
      </div>
    );
  }
}
