import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

import { createMigrate } from 'redux-persist';
import { migrations } from './shop/numberOfChange';

const MIGRATION_DEBUG = false;


const persistConfig = {
    key: 'root',
    storage,
    version: 0,
    migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG }),
    whiteList: ['cart'], //list of reducers to persist
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});



export default persistReducer(persistConfig, rootReducer);

