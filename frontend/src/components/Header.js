import React from 'react';
import {NavLink} from "react-router-dom";

import {connect} from 'react-redux';

function Header(props) {

  const isHomeActive = (match,location) => location.pathname.includes('home');

  return (
    <nav className="header">
      <div className="header__logo"/>
      <ul className="header__list">
          <li className="header__item">
            <NavLink exact  activeClassName="header__item_current" 
                            className="header__item"
                            isActive={isHomeActive} to="/home">Order online</NavLink>
          </li>
          <li className="header__item">
            <NavLink activeClassName="header__item_current" className="header__item" to="/about">About</NavLink>
          </li>
          <li className="header__item">
            <NavLink activeClassName="header__item_current" className="header__item" to="/locator">Contact Us</NavLink>
          </li>
      </ul>
      <div className="header__call-us">
        <span className="header__call-us-title">Call and order in Kyiv</span>
        <span className="header__call-us-number">+380661615409</span>
      </div>
      <div className="header__order-cart">
        <NavLink className="header__order-text" to="/shop">
          {props.cartSum ? "Your Order: " + props.cartSum+"₴" : "Your Order is Empty"}
        </NavLink>
      </div>
    </nav>
  );
}

const mapStateToProps = ( state => {
  return {
    cartSum: state.cart.cartSum
  }
});

export default connect (mapStateToProps)(Header);
