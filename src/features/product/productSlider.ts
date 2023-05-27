import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
  id: string
  image: string
  name: string
  price: number
  count: number
}

interface IProductState {
  productStore: ProductState[]
}

const initialState: IProductState = {
  productStore: [
    {
      id: '1',
      image: 'path/to/image1',
      name: 'Product 1 ',
      price: 200,
      count: 1
    },
    {
      id: '2',
      image: 'path/to/image1',
      name: 'Product 2 ',
      price: 150,
      count: 3
    }
  ]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: state => {
      //state.productStore.push(state)
    },
    remove: (state, { payload }) => {
      const newListProduct = state.productStore.filter(item => item.id !== payload.id)
      state.productStore = newListProduct
    },
    incrementByCount: (state, { payload }) => {
      const updateProductStore = state.productStore.map(product => {
        if (product.id === payload.id) {
          return {
            ...product,
            count: product.count + 1
          }
        }
        return product
      })

      state.productStore = updateProductStore
    },
    decrementByCount: (state, { payload }) => {
      const updateProductStore = state.productStore.map(product => {
        if (product.id === payload.id) {
          return {
            ...product,
            count: product.count === 0 ? product.count : product.count - 1
          }
        }
        return product
      })

      state.productStore = updateProductStore
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, remove, incrementByCount, decrementByCount } = productSlice.actions

export default productSlice.reducer
