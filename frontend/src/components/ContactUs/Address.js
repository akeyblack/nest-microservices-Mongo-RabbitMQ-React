import React from 'react';

function Address() {
    return ( <div className="contact-us__right">
        <h2>Our Address</h2>
        <div className="contact-us__text">
            17 Princess Road London, Greater London NW1 8JR, UK <br/>
            Support (+800) 856 800 604 <br/>
            E-mail: <span>info@pizzaro.com</span>
        </div>
        <h3>Opening Hours</h3>
        <span>
            <div className="contact-us__days">Monday: Tuesday: Wednesday: Thursday: Friday: Saturday: Sunday:</div>
            <div className="contact-us__hours">12-6 PM 12-6 PM 12-6 PM 12-6 PM 12-6 PM 12-4 PM Closed</div>
        </span>
        <h3>Careers</h3>
        <div className="contact-us__text">
            If you’re interested in employment opportunities at Pizzaro, please email us:
            <span>contact@yourstore.com</span>
        </div>
    </div>
    );
}

export default Address;