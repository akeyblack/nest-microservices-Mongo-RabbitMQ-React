export const CART_CHANGE_CATEGORY ='CART_CHANGE_CATEGORY';
export const CART_CHANGE_CART ='CART_CHANGE_CART';
export const CART_CHANGE_ITEMS ='CART_CHANGE_ITEMS';
export const CART_CHANGE_DELIVERY_TYPE = 'CART_CHANGE_DELIVERY_TYPE';
export const CART_CHANGE_MONEY_TYPE = 'CART_CHANGE_MONEY_TYPE';
export const CART_DELETE_CART_ITEM = 'CART_DELETE_CART_ITEM';
export const CART_ADD_CART_ITEM = 'CART_ADD_CART_ITEM';
export const CART_SET_DELIVERY_INFO = 'CART_SET_DELIVERY_INFO';
//actions creators

export const setCart = item => ({
    type: CART_CHANGE_CART,
    payload: item
});

export const addCartItem = item => ({
    type: CART_ADD_CART_ITEM,
    payload: item
});
export const deleteCartItem = item => ({
    type: CART_DELETE_CART_ITEM, 
    payload: item
});

export const setItems = items => ({
    type: CART_CHANGE_ITEMS,
    payload: items
});

export const setDeliveryType = type => ({
    type: CART_CHANGE_DELIVERY_TYPE,
    payload: type
});

export const setMoneyType = type => ({
    type: CART_CHANGE_MONEY_TYPE,
    payload: type
});

export const setDeliveryInfo = type => ({
    type: CART_SET_DELIVERY_INFO,
    payload: type
})