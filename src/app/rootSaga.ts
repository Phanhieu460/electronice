import authSaga from 'features/auth/authSaga'
import orderSaga from 'features/order/orderSaga'
import productSaga from 'features/product/productSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([productSaga(), authSaga(), orderSaga()])
}
