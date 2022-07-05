export const CONTACT_US_CHANGE_FIRST_NAME = 'CONTACT_US_CHANGE_FIRST_NAME';
export const CONTACT_US_CHANGE_LAST_NAME = 'CONTACT_US_CHANGE_LAST_NAME';
export const CONTACT_US_CHANGE_SUBJECT = 'CONTACT_US_CHANGE_SUBJECT';
export const CONTACT_US_CHANGE_MESSAGE = 'CONTACT_US_CHANGE_MESSAGE';

export const setFirstNameText = text => ({
    type: CONTACT_US_CHANGE_FIRST_NAME,
    payload: text
});

export const setLastNameText = text => ({
    type: CONTACT_US_CHANGE_LAST_NAME,
    payload: text
});

export const setSubjectText = text => ({
    type: CONTACT_US_CHANGE_SUBJECT,
    payload: text
});

export const setMessageText = text => ({
    type: CONTACT_US_CHANGE_MESSAGE,
    payload: text
});