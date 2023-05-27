import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
<<<<<<< HEAD
import productSlice from '../features/product/productSlider'
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    // add reducer product: productSlice
    product: productSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
=======
import productReducer from 'features/product/productSlice'
import authReducer from 'features/auth/authSlice'
import cartReducer from 'features/cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cartData']
}

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  cartData: cartReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(sagaMiddleware)
>>>>>>> e3242c077d317cb8131da72dc4bdd85437d73fef
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
