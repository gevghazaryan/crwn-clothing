import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebase.util";

import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/071 crown.svg";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
             <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            <Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SING IN </Link>
                }
            </Link>                
        </div>

    </div>
)

export default Header;