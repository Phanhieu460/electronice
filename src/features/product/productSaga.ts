//@ts-nocheck
import productApi from 'api/productApi'
import { GET_PRODUCT_BY_ID, GET_PRODUCT_LIST, PRODUCT_SEARCH } from 'features/types'
import { ListResponse, Product } from 'models'
import { put, takeLatest } from 'redux-saga/effects'
import {
  fetchProductByIdFailed,
  fetchProductByIdSuccess,
  fetchProductListFailed,
  fetchProductListSuccess,
  fetchProductSearchFailed,
  fetchProductSearchSuccess
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
    const response: ListResponse<Product> = yield productApi.getById(action.id)
    yield put(fetchProductByIdSuccess(response))
  } catch (error) {
    console.log('Failed to fetch Product By Id', error)
    yield put(fetchProductByIdFailed())
  }
}

function* searchProduct(action: any) {
  try {
    const response: ListResponse<Product> = yield productApi.search(action.search)
    yield put(fetchProductSearchSuccess(response))
  } catch (error) {
    console.log('Search Failed', error)
    yield put(fetchProductSearchFailed())
  }
}

export default function* productSaga() {
  yield takeLatest(GET_PRODUCT_LIST, fetchProductList)
  yield takeLatest(GET_PRODUCT_BY_ID, fetchProductById)
  yield takeLatest(PRODUCT_SEARCH, searchProduct)
}
