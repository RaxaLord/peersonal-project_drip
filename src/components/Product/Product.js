import React, { Component } from 'react';
import './Product.css';
import ShopNav from '../ShopNav/ShopNav';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };

    this.getNew = this.getNew.bind(this);
    this.getAll = this.getAll.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    // console.log('its a hit', this.props.match);
    axios.get(`/api/product/${this.props.match.params.id}`).then((res) => {
      this.setState({
        product: res.data,
      });
    });
  }

  getAll() {
    axios.get(`/api/all_products`).then((res) => {
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

  addToCart(id) {
    axios.post(`/api/cart/${id}`);
  }

  render() {
    // console.log(this.state.product);
    // console.log(this.state.cart);

    const mappedProduct = this.state.product.map((product) => {
      return (
        <div className='product-info' key={product.product_id}>
          <img
            src={product.img}
            alt={product.description}
            className='product-photo'
          />

          <div className='product-description'>
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <h3>
              SIZE: {product.size} || IN-STOCK: {product.quantity}
            </h3>
            <h3>${product.price}</h3>
            <Link to='/cart'>
              <button onClick={() => this.addToCart(product.product_id)}>
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='shop-content'>
          <ShopNav
            getnew={this.getNew}
            getall={this.getAll}
            // bytype={this.byType}
          />
          {mappedProduct}
        </div>
      </div>
    );
  }
}
