import { ListParams, ListResponse } from 'models/common'
import { Product } from 'models/product'
import api from './apiClient'

const productApi = {
  getAll(pageNumber: number): Promise<ListResponse<Product>> {
    const url = `api/products?pageNumber=${pageNumber}`
    return api.get(url)
  },
  getById(id: string): Promise<ListResponse<Product>> {
    const url = `/api/products/${id}`
    return api.get(url)
  }
}

export default productApi
