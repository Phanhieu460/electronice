//@ts-nocheck
import orderApi from 'api/orderApi'
import { ListResponse } from 'models'
import { put, takeLatest } from 'redux-saga/effects'
import { orderCreateFailed, orderCreateSuccess } from './orderSlice'
import { ORDER_CREATE_SUCCESS } from 'features/types'

function* createOrder(action: any) {
  try {
    const response: ListResponse<any> = yield orderApi.createOrder(action.data)
    yield put(orderCreateSuccess(response))
  } catch (error) {
    yield put(orderCreateFailed())
  }
}

export default function* orderSaga() {
  yield takeLatest(ORDER_CREATE_SUCCESS, createOrder)
}
