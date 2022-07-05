import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types' ;
import {Link} from 'react-router-dom';
import {setDeliveryType} from '../../../store/Cart/actions'

import CartList from './CartList';

function Cart (props) {
    const togleDeliveryType = () => { 
        props.setDeliveryType(!props.deliveryType);
    }



    return ( <>
        <CartList/>
        <div className="cart__delivery">
            <div className="cart__radio-img" style={{backgroundImage: "url('/scooter.svg')"}}/>
            <input  checked={!props.deliveryType}
                    className="cart__radio" 
                    type="radio" 
                    id="delivery" 
                    name="takeOption"
                    onChange={togleDeliveryType}/>
            <label htmlFor="delivery">With Delivery</label>
            <div className="cart__radio-img" style={{backgroundImage: "url('/cart-icon.png')"}}/>
            <input  className="cart__radio" 
                    checked={props.deliveryType}
                    type="radio" 
                    id="pickUp" 
                    name="takeOption"
                    onChange={togleDeliveryType}/>
            <label htmlFor="pickUp">Order with Pick Up</label>
        </div>
        <div className="cart__total">
            <span>{"Order with "} 
                <b>
                    {props.deliveryType ? "Pick Up" : "Delivery"}
                </b>
            </span>
            <span>Total: <b>{props.cartSum}₴</b></span>
        </div>
        <div className="cart__buttons">
            <Link className="cart__update-button" to="/home">Update Cart</Link>
            { Boolean(props.cartSum) && <Link className="cart__proceed-button" to="/shop/checkout">Proceed to Checkout</Link> }
        </div>
    </>
    );
}

const mapStateToProps = state => {
    return {
        deliveryType: state.cart.deliveryType,
        cartSum: state.cart.cartSum
    }
};

const mapDispatchToProps = {
    setDeliveryType
}

Cart.propTypes = {
    deliveryType: PropTypes.bool,
    cartSum: PropTypes.number
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);