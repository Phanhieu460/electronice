import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ListResponse } from 'models/common'
import { Product } from 'models/product'

export interface ProductState {
  productList: Product[]
  loading: boolean
}

const initialState: ProductState = {
  loading: false,
  productList: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList: state => {
      state.loading = true
    },
    fetchProductListSuccess: (state, action: PayloadAction<ListResponse<Product>>) => {
      state.productList = action.payload.data
      state.loading = false
    },
    fetchProductListFailed: state => {
      state.loading = false
    }
  }
})
