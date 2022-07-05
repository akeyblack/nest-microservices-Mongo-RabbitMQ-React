import React from 'react';
import {connect} from 'react-redux';
import {deleteCartItem} from '../../../store/Cart/actions';

import CartItem from './CartItem';

function CartList (props) {

    function cartFill () {
        return props.cart.map( item => {
            let menuItem = props.items.find(array => array.find(x=>x.id===item.id)).find(x=>x.id===item.id);
            return <CartItem 
                item = {menuItem}
                size={item.size} 
                price={menuItem.price[item.size]}
                count={item.count}
                key={item.id+"_"+item.size}
                pizza={menuItem.price.length>1}
                deleteItem={props.deleteCartItem}
                cartSum={props.cartSum}
            />
        });
    }

    let cartResult = cartFill();

    return ( <table className="cart__items">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            { cartResult.length ? cartResult : <div className="cart__empty">Nothing here</div> }
        </tbody>
    </table>
    );
}

const mapStateToProps = state => {
    return {  
        cart: state.cart.cart,
        items: state.cart.items,
        cartSum: state.cart.cartSum 
    }
}
const dispatchStateToProps = {
    deleteCartItem
}

export default connect(mapStateToProps,dispatchStateToProps)(CartList);