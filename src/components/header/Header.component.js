import React from 'react'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.styles'
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'

const Header = ({ currentUser }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop
                </OptionLink>
                <OptionLink to="/shop">
                    Contact
                </OptionLink>
                {currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGNOUT</OptionLink>
                    :
                    <OptionLink to="/signin">SIGNIN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            <CartDropdown />
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);