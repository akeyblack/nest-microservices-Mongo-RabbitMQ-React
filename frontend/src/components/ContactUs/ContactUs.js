import React from 'react';
import Address from './Address';
import ContactForm from './ContactForm'

function ContactUs() {
    return ( <div className="contact-us">
        <div className="contact-us__article">
            <h2>Contact Us</h2>
            <h3>We are a second-generation family business established in 1972</h3>
        </div>
        <ContactForm/>
        <Address/>
    </div>
    );
}

export default ContactUs;