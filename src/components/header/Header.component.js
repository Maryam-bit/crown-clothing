import React from 'react'
import { Link } from "react-router-dom"
import "./Header.styles.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"
const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/shop">
                    Contact
                </Link>
                {currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div>
                :
                <Link className="option" to="/signin">SIGNIN</Link>
                }
            </div>
        </div>
    )
}

export default Header;