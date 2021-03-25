import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/icon.svg';
import './cart-icon.styles.scss'
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selector'
import {createSelector, createStructuredSelector} from 'reselect'

import {connect} from "react-redux"
export const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <>
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);