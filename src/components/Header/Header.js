import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { getUserSession } from '../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();

    this.toggleLogout = this.toggleLogout.bind(this);
  }

  componentDidMount() {
    this.props.getUserSession();
  }

  toggleLogout() {
    axios.get('/auth/logout');
    window.location.replace('/');
  }

  render() {
    console.log(this.props);
    return (
      <div className='header'>
        <Link to='/' className='logo'>
          <h1>drip</h1>
          {/* <img src='https://via.placeholder.com/100x50' alt='logo' /> */}
        </Link>

        <div className='header-right'>
          <div>
            {this.props.user ? (
              <div>
                <div>
                  Signed in as {this.props.user.first_name},{' '}
                  <a href='#/' onClick={() => this.toggleLogout()}>
                    logout
                  </a>
                  ?
                </div>
              </div>
            ) : (
              <div>
                <a href='#/login'>Login</a>
              </div>
            )}
          </div>
          <div>
            <Link to='/cart'>
              <img
                src='https://img.favpng.com/5/19/25/shopping-cart-icon-product-return-png-favpng-1ZJU3szBCWCr5YYXDXtgqG4ja.jpg'
                alt='cart'
                width='75px'
                height='40px'
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUserSession })(Header);
