import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { getUserSession } from '../../redux/reducer';
import axios from 'axios';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.toggleLogout = this.toggleLogout.bind(this);
  }

  componentDidMount() {
    this.props.getUserSession();
  }

  toggleLoggedInMode() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  }

  toggleLogout() {
    axios.get('/auth/logout');
  }

  render() {
    console.log(this.props);
    return (
      <div className='header'>
        <a href='#/'>
          <img src='https://via.placeholder.com/100x50' alt='logo' />
        </a>

        <div className='login-cart'>
          {this.state.isLoggedIn ? (
            <div>
              <span onClick={() => this.toggleLoggedInMode()}>
                <a href='#/' onClick={this.toggleLogout}>
                  Sign Out
                </a>
              </span>
            </div>
          ) : (
            <div>
              <a href='#/login' onClick={() => this.toggleLoggedInMode()}>
                Sign In
              </a>
            </div>
          )}

          <div>cart</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUserSession })(Header);
