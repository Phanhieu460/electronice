import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  order: [],
  info: {},
  message: '',
  status: 0
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderCreateRequest: (state, action: PayloadAction<any>) => {
      state.loading = true
    },
    orderCreateSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.order = action.payload.createOrder
      state.message = action.payload.message
      state.status = action.payload.status
    },
    orderCreateFailed: (state, action: PayloadAction<any>) => {
      state.loading = true
      state.error = action.payload
    },
    createInfomation: (state, action: PayloadAction<any>) => {
      console.log(action)
      state.info = action.payload
    }
  }
})
// Actions
export const { orderCreateRequest, orderCreateSuccess, orderCreateFailed, createInfomation } = orderSlice.actions

// Reducer
const orderReducer = orderSlice.reducer
export default orderReducer
