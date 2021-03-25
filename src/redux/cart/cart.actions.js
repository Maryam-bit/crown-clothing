import CartActionTypes from "./cart.types"

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export{
    toggleCartHidden,
    addItem,
    clearItemFromCart,
    removeItem
}