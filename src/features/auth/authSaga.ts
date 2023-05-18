//@ts-nocheck
import userApi from 'api/userApi'
import { ListResponse } from 'models'
import { call, delay, fork, put, take, takeLatest } from 'redux-saga/effects'
import { loginFailed, loginSuccess } from './authSlice'
import { USER_LOGIN, USER_REGISTER } from 'features/types'

function* login(email: string, password: string) {
  console.log(action)
  try {
    const response: ListResponse<User> = yield call(userApi.login(email, password))
    yield put(loginSuccess(response))
  } catch (error) {
    console.log('Login Failed', error)
    yield put(loginFailed())
  }
}
function* register(email: string, password: string) {
  try {
    const response: ListResponse<User> = yield userApi.register(email, password)
    yield put(loginSuccess(response))
  } catch (error) {
    console.log('Register Failed', error)
    yield put(loginFailed())
  }
}

export default function* authSaga() {
  yield takeLatest(USER_LOGIN, login)
  yield takeLatest(USER_REGISTER, register)
}
