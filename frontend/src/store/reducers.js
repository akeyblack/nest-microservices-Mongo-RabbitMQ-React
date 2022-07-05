import { combineReducers } from 'redux';
import { cartReducer } from './Cart/reducers'
import { contactUsReducer } from './ContactUs/reducers';


export default combineReducers({
    cart: cartReducer,
    contactUs: contactUsReducer
});
