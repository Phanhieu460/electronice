import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

const api = axios.create()

api.defaults.baseURL = process.env.REACT_APP_SERVER_URL

api.interceptors.request.use(
  (config: any) => {
    const token = Cookies.get('auth')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default api
