import { createSlice } from '@reduxjs/toolkit'
import { Product } from 'models/product'

export interface ProductState {
  productList: Product[]
  productById?: Product[]
  productSearch?: Product[]
  pages: number
  count: number
  loading: boolean
}

const initialState: ProductState = {
  loading: false,
  productList: [],
  productById: [],
  productSearch: [],
  pages: 0,
  count: 0
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList: state => {
      state.loading = true
    },
    fetchProductListSuccess: (state, action: any) => {
      state.productList = action.payload?.products
      state.pages = action.payload?.pages
      state.count = action.payload?.count
      state.loading = false
    },
    fetchProductListFailed: state => {
      state.loading = false
    },
    fetchProductById: state => {
      state.loading = true
    },
    fetchProductByIdSuccess: (state, action: any) => {
      state.productById = action.payload
      state.loading = false
    },
    fetchProductByIdFailed: state => {
      state.loading = false
    },
    fetchProductSearch: state => {
      state.loading = true
    },
    fetchProductSearchSuccess: (state, action: any) => {
      state.productSearch = action.payload?.products
      state.count = action.payload?.count
      state.loading = false
    },
    fetchProductSearchFailed: state => {
      state.loading = false
    }
  }
})
// Actions
export const {
  fetchProductList,
  fetchProductListSuccess,
  fetchProductListFailed,
  fetchProductById,
  fetchProductByIdSuccess,
  fetchProductByIdFailed,
  fetchProductSearch,
  fetchProductSearchSuccess,
  fetchProductSearchFailed
} = productSlice.actions

// Reducer
const productReducer = productSlice.reducer
export default productReducer
