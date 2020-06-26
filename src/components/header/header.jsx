import React from 'react';
import {Link} from 'react-router-dom';
import "./header.scss"

import {ReactComponent as Logo} from "../../assets/original.svg";

export default function Header() {
    return (
        <div className='header'>
            <Link  className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">shop</Link>
                <Link className="option" to="/contact">contact</Link>
            </div>
        </div>
    )
}
