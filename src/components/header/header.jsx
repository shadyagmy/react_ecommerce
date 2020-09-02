import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";
import "./header.scss"

import {ReactComponent as Logo} from "../../assets/original.svg";

export default function Header({currentUser}) {
    
    return (
        <div className='header'>
            <Link  className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">shop</Link>
                <Link className="option" to="/contact">contact</Link>
               
                {
                    currentUser ? 
                    
                    <div className="option" onClick={() =>  auth.signOut() }>Sign out</div>
                    :
                    <Link className="option" to="./signin">sign in</Link>

                }
               
            </div>
        </div>
    )
}

