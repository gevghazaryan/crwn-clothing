import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebase.util";
import { connect } from 'react-redux';

import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/071 crown.svg";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser,hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
             <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SING IN </Link>
                }
        <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropDown />
        }
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);