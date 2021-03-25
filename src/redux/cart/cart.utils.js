export const addItemToCart = (cartItems, addToCart) => {
    const exsistingCartItem = cartItems.find(cartItem => cartItem.id == addToCart.id)

    if (exsistingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id == addToCart.id
                ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        )
    }
    return [...cartItems, { ...addToCart, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const exsistingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToRemove.id)
    if (exsistingCartItem.quantity == 1) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id == cartItemToRemove.id
            ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            :
            cartItem
    )

}