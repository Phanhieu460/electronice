//@ts-nocheck
import { PayloadAction } from '@reduxjs/toolkit'
import productApi from 'api/productApi'
import { ListParams, ListResponse, Product } from 'models'
import { call, debounce, put, takeLatest } from 'redux-saga/effects'
import { productActions } from './productSlice'

function* fetchProductList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Product> = yield call(productApi.getAll, action.payload)
    yield put(productActions.fetchProductListSuccess(response))
  } catch (error) {
    console.log('Failed to fetch Product list', error)
    yield put(productActions.fetchProductListFailed())
  }
}

function* fetchProductById(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Product> = yield call(productApi.getById(action.payload.id))
    yield put(productActions.fetchProductByIdSuccess(response))
  } catch (error) {
    console.log('Failed to fetch Product By Id', error)
    yield put(productActions.fetchProductByIdFailed())
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductList, fetchProductList)
  yield takeLatest(productActions.fetchProductById, fetchProductById)
}
