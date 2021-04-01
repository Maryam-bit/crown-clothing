import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";
import rootReducer from "./root-reducer"
import {persistStore} from "redux-persist"
const Middlewares = [logger];

// if(process.env.NODE_ENV =='development'){
//     Middlewares.push(logger)
// }

const store = createStore(rootReducer, applyMiddleware(...Middlewares));
const persistor = persistStore(store)
export{
    store,
    persistor
}