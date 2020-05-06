import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import './mediaquery.css';
import { connect } from 'react-redux';
import { getUserSession } from './redux/reducer';

class App extends Component {
  componentDidMount() {
    this.props.getUserSession();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='app-body'>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/shop' component={Shop} />
            <Route path='/product/:id' component={Product} />
            <Route path='/cart' component={Cart} />
            <Route path='/update' component={Shipping} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUserSession })(App);
