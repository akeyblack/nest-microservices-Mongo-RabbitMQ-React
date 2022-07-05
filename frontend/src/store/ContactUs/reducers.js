import { CONTACT_US_CHANGE_FIRST_NAME, 
    CONTACT_US_CHANGE_LAST_NAME, 
    CONTACT_US_CHANGE_SUBJECT, 
    CONTACT_US_CHANGE_MESSAGE 
} from './actions'

const defaultState = {
    firstName: '',
    lastName: '',
    subject: '',
    message: ''
}

export const contactUsReducer = (state = defaultState,action) => {
    switch(action.type) {
        case CONTACT_US_CHANGE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            }
        case CONTACT_US_CHANGE_LAST_NAME: 
            return {
                ...state,
                lastName: action.payload
            }
        case CONTACT_US_CHANGE_SUBJECT: 
            return {
                ...state,
                subject: action.payload
            }
        case CONTACT_US_CHANGE_MESSAGE: 
            return {
                ...state,
                message: action.payload
            }
        default: 
            return state;
    }
}