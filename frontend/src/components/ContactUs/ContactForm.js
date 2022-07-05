import React from 'react';
import {connect} from 'react-redux'
import {setFirstNameText, setLastNameText, setSubjectText, setMessageText} from '../../store/ContactUs/actions';

function ContactForm(props) {

    let sendForm = (event) => {
        event.preventDefault();
        console.log("log");
    }

    function onFirstNameChange (event) {
        props.setFirstNameText(event.target.value);
    }

    function onLastNameChange (event) {
        props.setLastNameText(event.target.value);
    }

    function onSubjectChange (event) {
        props.setSubjectText(event.target.value);
    }

    function onMessageChange (event) {
        props.setMessageText(event.target.value);
    }

    return ( <div className="contact-us__left">
        <h2>Leave us a Message</h2>
        <div className="contact-us__text">
            Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis. 
        </div>
        <form onSubmit={sendForm}>
            <div className="contact-us__input" style={{width: "47%"}}>
                <label htmlFor="contact-us__first-name">First Name</label>
                <input id="contact-us__first-name" value={props.firstName} onChange={onFirstNameChange} maxLength="30"/>
            </div>
            <div className="contact-us__input" style={{width: "47%"}}>
                <label htmlFor="contact-us__last-name">Last Name</label>
                <input id="contact-us__last-name" value={props.lastName} onChange={onLastNameChange} maxLength="30"/>
            </div>
            <div className="contact-us__input">
                <label htmlFor="contact-us__subject">Subject</label>
                <input id="contact-us__subject" value={props.subject} onChange={onSubjectChange} maxLength="60"/>
            </div>
            <div className="contact-us__input" >
                <label htmlFor="contact-us__message">Message</label>
                <textarea   id="contact-us__message" style={{height: "180px"}} 
                            value={props.message} onChange={onMessageChange} 
                            maxLength="30"/>
            </div>
            <button className="contact-us__button">Send</button>
        </form>
    </div>
    );
}

const mapStateToProps = state => {
    return {
        firstName: state.contactUs.firstName,
        lastName: state.contactUs.lastName,
        subject: state.contactUs.subject,
        message: state.contactUs.message,
    };  
}

const mapDispatchToProps = {
    setFirstNameText,
    setLastNameText,
    setSubjectText,
    setMessageText  
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);