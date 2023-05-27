import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import productSlice from '../features/product/productSlider'
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    // add reducer product: productSlice
    product: productSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
