import React from 'react'

function CartItem (props) {
    const getSize = size => {
        switch(size) {
        case 0: 
            return "25 сm"
        case 1: 
            return '35 cm'
        case 2:
            return '45 cm'
        default:
            return 'error'
        }
    }
    return ( <tr className="cart-item">
        <td>
            <button className="cart-item__delete" onClick={() => props.deleteItem({id:props.item.id, size:props.size})}/>
            <img src={`/items/${props.item.img}`} alt="pizza"></img>
            <div className="cart-item__text">
                <span className="cart-item__name" maxLength="40">{props.item.name}</span>
                <span className="cart-item__description" maxLength="200">{props.item.description}</span>
                { props.pizza ? <span className="cart-item__description"><b>{getSize(props.size)}</b></span> : false}
            </div>
        </td>
        <td>
            <div className="cart-item__price">{props.price}₴</div>
        </td>
        <td>
            <div className="cart-item__price">{props.count}</div>
        </td>
        <td>
            <div className="cart-item__price">{props.count*props.price}₴</div>
        </td>
    </tr>
    );
}

export default CartItem;