import React, { useState } from 'react'
import {connect} from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import config from '../../config';

import {setMoneyType, setDeliveryInfo} from '../../store/Cart/actions'

function Checkout (props) {

    const togleMoneyType = () => { 
        props.setMoneyType(!props.moneyType);
    }

    const [delInfo, setDelInfo] = useState({
        telegram: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        companyName: "",
        email: "",
        notes: "",
    });

    const sendToServer = () => {
        console.log(delInfo);
        setDeliveryInfo(delInfo);
        const body = {
            cartSum: props.cartSum,
            moneyType: props.moneyType,
            deliveryType: props.deliveryType,
            deliveryCost: props.deliveryCost,
            deliveryInfo: delInfo,
            items: props.cart,
        }
        const url = config.url + "orders";
        
        const metaData = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
            fetch(
                url, metaData
            ).then(res => console.log(res)
            ).catch(e => console.log(e)
            );
    }


    return (<div className="checkout">
        {Boolean(! props.cartSum) && <Redirect to="/home/"/>}
        <div className="checkout__left">
            <h2>Delivery Address</h2>
            <form>
                <div className="checkout__input" style={{width: "48%"}}>
                    <label htmlFor="checkoutFirstName">First name*</label>
                    <input id="checkoutFirstName" onChange={
                        e => {
                            console.log("LOG+ " + delInfo.firstName); setDelInfo({...delInfo, firstName: e.target.value})
                    }} type="text"/>
                </div>
                <div className="checkout__input" style={{width: "48%"}}>
                    <label htmlFor="checkoutLastName">Last name*</label>
                    <input id="checkoutLastName" onChange={
                        e => setDelInfo({...delInfo, lastName: e.target.value})
                    } type="text"/>
                </div>
                <div className="checkout__input">
                    <label htmlFor="checkoutCompanyName">Company name</label>
                    <input id="checkoutCompanyName" onChange={
                        e => setDelInfo({...delInfo, CompanyName: e.target.value})
                    } type="text"/>
                </div>
                <div className="checkout__input" style={{width: "48%"}}>
                    <label htmlFor="checkoutEmail">Email Address</label>
                    <input id="checkoutEmail" onChange={
                        e => setDelInfo({...delInfo, email: e.target.value})
                    } type="text"/>
                </div>
                <div className="checkout__input" style={{width: "48%"}}>
                    <label htmlFor="checkoutPhone">Phone Number*</label>
                    <input id="checkoutPhone" onChange={
                        e => setDelInfo({...delInfo, phone: e.target.value})
                    } type="text"/>
                </div>
                <div className="checkout__input">
                    <label htmlFor="checkoutAddress">Address*</label>
                    <input id="checkoutAddress" onChange={
                        e => setDelInfo({...delInfo, address: e.target.value})
                    } type="text"/>
                </div>
                <div className="checkout__input">
                    <label htmlFor="checkoutTelegram">Telegram</label>
                    <input id="checkoutTelegram" onChange={
                        e => setDelInfo({...delInfo, telegram: e.target.value})
                    } type="text"/>
                </div>
                <div className="checkout__input">
                    <label htmlFor="checkoutNotes">Order Notes</label>
                    <textarea id="checkoutNotes" onChange={
                        e => setDelInfo({...delInfo, notes: e.target.value})
                    }/>
                </div>
            </form>
        </div>
        <div className="checkout__right">
            <h2>Order Details</h2>
            <div className="checkout__summary">
                <div>
                    <span><b>Subtotal</b></span>
                    <span>{props.cartSum}₴</span>
                </div>
                <div>
                    <span><b>Delivery</b></span>
                    <span>{props.deliveryType ? "Pick Up" : "Delivery"}</span>
                </div>
                <div>
                    <span><b>Order Total</b></span>
                    <span><b>{props.deliveryType ? props.cartSum : props.deliveryCost+props.cartSum }₴</b></span>
                </div>
                <div className="checkout__money-choose">
                    <section>
                        <input  className="checkout__radio" 
                        checked={!props.moneyType}
                        type="radio" 
                        id="cash" 
                        name="cashOption"
                        onChange={togleMoneyType}/>
                        <label htmlFor="cash">In Cash</label>
                    </section>
                    <section>
                        <input  className="checkout__radio" 
                            checked={props.moneyType}
                            type="radio" 
                            id="emoney" 
                            name="emoneyOption"
                            onChange={togleMoneyType}/>
                        <label htmlFor="emoney">eMoney</label>
                    </section>
                </div>
                <Link type="submit" className="checkout__submit" to="/shop/complete" onClick={sendToServer}>Place Order</Link>
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = state => {
    return {
        cartSum: state.cart.cartSum,
        moneyType: state.cart.moneyType,
        deliveryType: state.cart.deliveryType,
        deliveryCost: state.cart.deliveryCost,
        cart: state.cart.cart,
        deliveryInfo: state.cart.deliveryInfo,
    }
}

const mapDispatchToProps = {
    setMoneyType,
    setDeliveryInfo,
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);