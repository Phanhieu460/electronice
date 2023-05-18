import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'models/user'

export interface ProfileState {
  isLoggedIn: boolean
  logging?: boolean
  currentUser?: User
}

const initialState: ProfileState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.logging = true
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true
      state.logging = false
      state.currentUser = action.payload
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false
    },

    logout(state) {
      state.isLoggedIn = false
      state.currentUser = undefined
    }
  }
})

// Actions
export const { login, loginSuccess, loginFailed } = authSlice.actions

// Reducer
const authReducer = authSlice.reducer
export default authReducer
