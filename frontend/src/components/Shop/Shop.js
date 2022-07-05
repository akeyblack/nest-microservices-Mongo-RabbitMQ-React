import React from 'react';
import {
    Route,
    NavLink
  } from "react-router-dom";

import Cart from './Cart/Cart';
import Checkout from './Checkout';
import Complete from './Complete';



function Shop (props) {

    const isCheckoutActive = (match,location) => location.pathname.includes('complete') ||  location.pathname.includes('checkout') ;

    return (<div className="cart">
        <div className="cart__stages">
            <div className="cart__stage_current">Shopping Cart
                <span>1</span>
            </div>
            <NavLink    to="/shop/checkout"
                        className="cart__stage" 
                        activeClassName="cart__stage_current"
                        isActive={isCheckoutActive}
                        onClick={ (event) => event.preventDefault() }>Checkout
                <span>2</span>
            </NavLink>
            <NavLink    to="/shop/complete" 
                        className="cart__stage" 
                        activeClassName="cart__stage_current"
                        onClick={ (event) => event.preventDefault() }>Order Complete
                <span>3</span>
            </NavLink>
        </div>
            <Route exact path="/shop">
                <Cart/>
            </Route>
            <Route path="/shop/checkout">
                <Checkout/>
            </Route>
            <Route path="/shop/complete">
                <Complete/>
            </Route>
    </div>
    );
}

export default Shop