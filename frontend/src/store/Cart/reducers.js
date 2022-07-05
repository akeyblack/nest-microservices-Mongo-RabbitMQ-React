import { CART_CHANGE_ITEMS, CART_CHANGE_DELIVERY_TYPE, CART_CHANGE_MONEY_TYPE, 
    CART_DELETE_CART_ITEM, CART_ADD_CART_ITEM, CART_SET_DELIVERY_INFO } from "./actions";
import items from "./menuExample";

const defaultState = {
    cart: [],
    cartSum: 0,
    deliveryType: false,
    telegram: "",
    deliveryCost: 50,
    moneyType: false,
    deliveryInfo: {
        telegram: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        companyName: "",
        email: "",
        notes: "",
    },
    items
}

function getCartSum (state) {
    let cartSum = 0;
    state.cart.forEach(element => {
        if(state.items.find(array => array.find(x=>x.id===element.id)).find(x=>x.id===element.id))
            cartSum += state.items.find(array => array.find(x=>x.id===element.id)).find(x=>x.id===element.id).price[Number(element.size)]*element.count;
    });
    return cartSum;
}

export const cartReducer = (state = defaultState,action) => { 
    switch(action.type) {
        case CART_ADD_CART_ITEM:
            let cart = state.cart;
            if (!state.items.find(array => array.find(x=>x.id===action.payload.id)))
                return state;
            else {
                if (cart.find(value => (value.id===action.payload.id && value.size===action.payload.size)))
                    cart.find(value => (value.id===action.payload.id && value.size===action.payload.size)).count++;
                else 
                    cart.push({id:action.payload.id, size:action.payload.size, count: 1});
                return {
                    ...state,
                    cart,
                    cartSum: getCartSum(state)
                }
            }
        case CART_DELETE_CART_ITEM: 
            let cartD = state.cart;
            if(cartD.find(value => (value.id===action.payload.id && value.size===action.payload.size)).count<=1) {
                let index = cartD.indexOf(cartD.find(value =>(value.id===action.payload.id && value.size===action.payload.size)));
                cartD.splice(index, 1);
            } else {
                cartD.find(value => (value.id===action.payload.id && value.size===action.payload.size)).count--;
            }
            return {
                ...state,
                cart: cartD,
                cartSum: getCartSum(state)
            }
        case CART_CHANGE_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case CART_CHANGE_DELIVERY_TYPE:
            return {
                ...state,
                deliveryType: action.payload
            }
        case CART_CHANGE_MONEY_TYPE:
            return {
                ...state,
                moneyType: action.payload
            }
        case CART_SET_DELIVERY_INFO:
            return {
                ...state,
                deliveryInfo: action.payload
            }
        default: 
            return state;
    }
}