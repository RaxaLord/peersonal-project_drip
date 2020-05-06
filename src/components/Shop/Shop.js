import React, { Component } from 'react';
import './Shop.css';
import ShopNav from '../ShopNav/ShopNav';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };

    this.getNew = this.getNew.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    axios.get('/api/all_products').then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  getAll() {
    axios.get('/api/all_products').then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  getNew() {
    axios.get('/api/new_items').then((res) => {
      this.setState({
        products: res.data,
      });
    });
    console.log('button hit');
  }

  render() {
    // console.log(this.state.products);

    const mappedProducts = this.state.products.map((product) => {
      return (
        <div className='product' key={product.product_id}>
          <Link to={`/product/${product.product_id}`}>
            <img src={product.img} alt={product.desciption} className='image' />
            <div className='middle'>
              <h1>{product.name}</h1>
              <hr />
              <h3>{product.size}</h3>
              <hr />
              View Product
            </div>
          </Link>
        </div>
      );
    });

    // console.log(mappedProducts);

    return (
      <div className='shop'>
        <div className='shop-content'>
          <ShopNav getnew={this.getNew} getall={this.getAll} />
          <div className='shop-right'>{mappedProducts}</div>
        </div>
      </div>
    );
  }
}
