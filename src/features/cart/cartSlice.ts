import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState: any = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      if (action.payload.variation === undefined) {
        const cartItem = state.filter((item: any) => item.id === action.payload._id)[0]
        if (cartItem === undefined) {
          return [
            ...state,
            {
              ...action.payload,
              quantity: action.payload.quantity ? action.payload.quantity : 1,
              cartItemId: uuidv4()
            }
          ]
        } else {
          return state.map((item: any) =>
            item.cartItemId === cartItem.cartItemId
              ? {
                  ...item,
                  quantity: action.payload.quantity ? item.quantity + action.payload.quantity : item.quantity + 1
                }
              : item
          )
        }
      } else {
        const cartItem = state.filter(
          (item: any) =>
            item.id === action.payload.id &&
            action.payload.selectedProductColor &&
            action.payload.selectedProductColor === item.selectedProductColor &&
            action.payload.selectedProductSize &&
            action.payload.selectedProductSize === item.selectedProductSize &&
            (action.payload.cartItemId ? action.payload.cartItemId === item.cartItemId : true)
        )[0]

        if (cartItem === undefined) {
          return [
            ...state,
            {
              ...action.payload,
              quantity: action.payload.quantity ? action.payload.quantity : 1,
              cartItemId: uuidv4()
            }
          ]
        } else if (
          cartItem !== undefined &&
          (cartItem.selectedProductColor !== action.payload.selectedProductColor ||
            cartItem.selectedProductSize !== action.payload.selectedProductSize)
        ) {
          return [
            ...state,
            {
              ...action.payload,
              quantity: action.payload.quantity ? action.payload.quantity : 1,
              cartItemId: uuidv4()
            }
          ]
        } else {
          return state.map((item: any) =>
            item.cartItemId === cartItem.cartItemId
              ? {
                  ...item,
                  quantity: action.payload.quantity ? item.quantity + action.payload.quantity : item.quantity + 1,
                  selectedProductColor: action.payload.selectedProductColor,
                  selectedProductSize: action.payload.selectedProductSize
                }
              : item
          )
        }
      }
    },
    decreaseQuantity: (state, action: any) => {
      console.log(action)
      if (action.payload.quantity === 1) {
        const remainingItems = (cartItems: any, product: any) =>
          cartItems.filter((cartItem: any) => cartItem.cartItemId !== product.cartItemId)
        return remainingItems(state, action.payload)
      } else {
        return state.map((item: any) =>
          item.cartItemId === action.payload.cartItemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
    },
    deleteFromCart: (state, action: any) => {
      const remainingItems = (cartItems: any, product: any) =>
        cartItems.filter((cartItem: any) => cartItem.cartItemId !== product.cartItemId)
      return remainingItems(state, action.payload)
    },
    deleteAllFromCart: (state, action: any) => {
      return state.filter((item: any) => {
        return false
      })
    }
  }
})

export const { addToCart, deleteFromCart, deleteAllFromCart, decreaseQuantity } = cartSlice.actions

// Reducer
const cartReducer = cartSlice.reducer
export default cartReducer
