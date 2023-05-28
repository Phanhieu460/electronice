//@ts-nocheck
import { PayloadAction } from '@reduxjs/toolkit'
import productApi from 'api/productApi'
import { ListParams, ListResponse, Product } from 'models'
import { call, debounce, put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCT_BY_ID, GET_PRODUCT_LIST } from 'features/types'
import {
  fetchProductListSuccess,
  fetchProductListFailed,
  fetchProductByIdSuccess,
  fetchProductByIdFailed
} from './productSlice'

function* fetchProductList(action: any) {
  try {
    const response: ListResponse<Product> = yield productApi.getAll(action.pageNumber)
    yield put(fetchProductListSuccess(response))
  } catch (error) {
    console.log('Failed to fetch Product list', error)
    yield put(fetchProductListFailed())
  }
}

function* fetchProductById(action: any) {
  try {
    const response: ListResponse<Product> = yield call(productApi.getById(action.id))
    yield put(fetchProductByIdSuccess(response))
  } catch (error) {
    console.log('Failed to fetch Product By Id', error)
    yield put(fetchProductByIdFailed())
  }
}

export default function* productSaga() {
  yield takeLatest(GET_PRODUCT_LIST, fetchProductList)
  yield takeLatest(GET_PRODUCT_BY_ID, fetchProductById)
}
