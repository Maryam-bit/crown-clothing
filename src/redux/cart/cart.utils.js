export const addItemToCart = (cartItems, addToCart) => {
    const exsistingCartItem = cartItems.find(cartItem => cartItem.id == addToCart.id)

    if(exsistingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id == addToCart.id 
            ?
            {...cartItem, quantity: cartItem.quantity+1}
            :
            cartItem
            )
    }
    return [...cartItems, {...addToCart, quantity: 1}]
}