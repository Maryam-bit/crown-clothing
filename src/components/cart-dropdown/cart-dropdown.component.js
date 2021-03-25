import React from 'react'
import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
import "./cart-dropdown.styles.scss"
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selector'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import {toggleCartHidden} from "../../redux/cart/cart.actions"

export const CartDropdown = ({ cartItems, history, hidden, dispatch }) => {
    return (
        <>
            {
                !hidden ?
                    <div className="cart-dropdown">
                        <div className="cart-items">
                            {cartItems.length ? (
                                cartItems.map(cartItem => (
                                    <CartItem key={cartItem.id} item={cartItem} />
                                ))
                            ) : (
                                <span className="empty-message">your cart is empyy</span>
                            )}
                        </div>

                        <CustomButton
                            onClick={() => {
                                history.push('/checkout');
                                dispatch(toggleCartHidden())
                            }}>
                            Go To CheckOut
                        </CustomButton>
                    </div>
                    :
                    null
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
})
export default withRouter(connect(mapStateToProps)(CartDropdown));