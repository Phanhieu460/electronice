import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { Product } from 'models/product'

export interface ProductState {
  productList: Product[]
  productById?: Product[]
  loading: boolean
}

const initialState: ProductState = {
  loading: false,
  productList: [],
  productById: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList: state => {
      state.loading = true
    },
    fetchProductListSuccess: (state, action: any) => {
      console.log(action.payload)
      state.productList = action.payload?.products
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
    }
  }
})
// Actions
export const productActions = productSlice.actions

// Reducer
const productReducer = productSlice.reducer
export default productReducer
