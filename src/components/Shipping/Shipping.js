import React, { Component } from 'react';
import axios from 'axios';
import './Shipping.css';
import { Link } from 'react-router-dom';

export default class Shipping extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      address: '',
      state: '',
      zipcode: '',
      updateMode: false,
    };
    this.update = this.update.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    axios.get('/auth/user_session').then((res) => {
      this.setState({
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        address: res.data.address,
        state: res.data.state,
        zipcode: res.data.zipcode,
      });
    });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  update() {
    const { first_name, last_name, address, state, zipcode } = this.state;

    axios.put('/auth/update', {
      first_name,
      last_name,
      address,
      state,
      zipcode,
    });

    // this.getUserInfo();

    // window.location.replace('#/shop');
    window.location.reload();
  }

  toggleUpdate() {
    this.setState({
      updateMode: !this.state.updateMode,
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className='form-container'>
        <div className='shipping-form'>
          <img
            src='https://i.pinimg.com/originals/32/30/ca/3230ca44155cceea8ca3f2e4fcefa76a.jpg'
            alt='form holder'
            className='login-pic'
          />

          <div className='input-fields'>
            {this.state.updateMode ? (
              <div className='input-fields'>
                <input
                  type='text'
                  name='first_name'
                  placeholder='First Name'
                  required
                  //   value={this.state.address}
                  onChange={(e) => this.changeHandler(e)}
                />
                <input
                  type='text'
                  name='last_name'
                  placeholder='Last Name'
                  required
                  //   value={this.state.address}
                  onChange={(e) => this.changeHandler(e)}
                />
                <input
                  type='text'
                  name='address'
                  placeholder='Street Address'
                  required
                  //   value={this.state.address}
                  onChange={(e) => this.changeHandler(e)}
                />
                <input
                  type='state'
                  name='state'
                  placeholder='State'
                  required
                  //   value={this.state.state}
                  onChange={(e) => this.changeHandler(e)}
                />
                <input
                  type='zipcode'
                  name='zipcode'
                  placeholder='Zipcode'
                  required
                  //   value={this.state.zipcode}
                  onChange={(e) => this.changeHandler(e)}
                />
                <hr />
                <button onClick={() => this.update()}>Update Info</button>
                <Link to='/shop'>
                  <button onClick={() => this.toggleUpdate()}>CANCEL</button>
                </Link>
              </div>
            ) : (
              <div>
                <h1>YOUR SHIPPING INFO:</h1>
                <b>
                  {this.state.first_name} {this.state.last_name}
                </b>
                <br />
                <i>
                  {this.state.address}
                  <br />
                  {this.state.state}, {this.state.zipcode}
                </i>
                <hr />
                <button onClick={() => this.toggleUpdate()}>
                  Change Address
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
