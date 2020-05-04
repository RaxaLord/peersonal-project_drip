import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      address: '',
      state: '',
      zipcode: '',
      registerMode: true,
    };

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  toggleRegisterMode() {
    this.setState({
      registerMode: !this.state.registerMode,
    });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async login() {
    const { email, password } = this.state;
    const user = await axios
      .post('/auth/login', { email, password })
      .catch((err) => console.log('something went wrong'));
    console.log('from login:', user);

    window.location.replace('#/shop');
    window.location.reload();
  }

  async register() {
    const {
      email,
      first_name,
      last_name,
      address,
      state,
      zipcode,
      password,
    } = this.state;
    const user = await axios
      .post('/auth/register', {
        email,
        first_name,
        last_name,
        address,
        state,
        zipcode,
        password,
      })
      .catch((err) => console.log(err));
    console.log('from register:', user);

    window.location.replace('#/shop');
    window.location.reload();
  }

  render() {
    // console.log(this.state);
    return (
      <div className='form-container'>
        {this.state.registerMode ? (
          <div className='login-form'>
            <img
              src='https://i.pinimg.com/originals/3c/c3/60/3cc360c9d72636c6c8556adb1df342a9.jpg'
              alt='form holder'
              className='login-pic'
            />

            <div className='input-fields'>
              <input
                type='text'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={(e) => this.changeHandler(e)}
              />
              <button onClick={this.login}>Login</button>

              <div>
                <span>Don't Have An Account?</span>
                <button
                  onClick={() => this.toggleRegisterMode()}
                  className='input-changer'
                >
                  Create An Account
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className='login-form'>
            <img
              src='https://cdn.shopify.com/s/files/1/1147/7882/products/ydwtl-hoodies-s-black-x-neon-yellow-painter-hoodie-you-dont-want-this-life-uk-streetwear-brand-13325190430764_620x.jpg?v=1586294346'
              alt='form holder'
              className='login-pic'
            />
            <div id='register' className='input-fields'>
              <input
                type='text'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                type='text'
                name='first_name'
                placeholder='First Name'
                value={this.state.first_name}
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                type='text'
                name='last_name'
                placeholder='Last Name'
                value={this.state.last_name}
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                type='text'
                name='address'
                placeholder='Street Address'
                value={this.state.address}
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                type='text'
                name='state'
                placeholder='State'
                value={this.state.state}
                onChange={(e) => this.changeHandler(e)}
                size='40'
                maxLength='2'
              />
              <input
                type='text'
                name='zipcode'
                placeholder='Zipcode'
                value={this.state.zipcode}
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                type='text'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={(e) => this.changeHandler(e)}
              />
              <button onClick={this.register}>Register</button>

              <div>
                <span>Already have an account?</span>
                <button
                  onClick={() => this.toggleRegisterMode()}
                  className='input-changer'
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
