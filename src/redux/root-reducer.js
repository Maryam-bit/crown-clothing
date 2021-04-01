import {combineReducers} from 'redux';
import userReducer from "./user/user.reducer"
import dataReducer from "./data/data.reducer"
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer" 
import shopReducer from './shop/shop.reducer'
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}
const rootReducer =  combineReducers ({
    user: userReducer,
    data: dataReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)