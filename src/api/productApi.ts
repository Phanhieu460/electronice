import { ListParams, ListResponse } from 'models/common'
import { Product } from 'models/product'
import api from './apiClient'

const productApi = {
  getAll(params: ListParams): Promise<ListResponse<Product>> {
    const url = '/api/products'
    return api.get(url, { params })
  },
  getById(id: string): Promise<ListResponse<Product>> {
    const url = '/api/products/${id}'
    return api.get(url)
  }
}

export default productApi
