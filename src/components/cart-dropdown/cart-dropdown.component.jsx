import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';

import './cart-dropdown.style.scss';


const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}

        <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown) 