import React from 'react'
import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
import "./cart-dropdown.styles.scss"
import {selectCartItems} from '../../redux/cart/cart.selector'
import {connect } from "react-redux"
export const CartDropdown = ({cartItems}) => {
    return (
        <div className = "cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem=> (
                    <CartItem  key={cartItem.id} item={cartItem}/>
                ))}
            </div>

                <CustomButton>Go To CheckOut</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);