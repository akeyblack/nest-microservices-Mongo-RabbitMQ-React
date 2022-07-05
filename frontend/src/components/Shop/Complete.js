import React from 'react';
import {Link} from 'react-router-dom';

function Checkout () {
    return (<div className="complete">
        <div className="complete__image"/>
        <div className="complete__text">
            Thank you for ordering in our restaurant. You will receive a confirmation email shortly.
            Now check a Pizza Tracker progress with your order.
        </div>
        <Link className="complete__button" to="/home">Go To Home</Link>
    </div>
    );
}

export default Checkout;