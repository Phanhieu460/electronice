import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import productReducer from 'features/product/productSlice'
import authReducer from 'features/auth/authSlice'
import cartReducer from 'features/cart/cartSlice'

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  cartData: cartReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
