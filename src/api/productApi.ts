import { ListResponse } from 'models/common'
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
  },
  search(search: string): Promise<ListResponse<Product>> {
    const url = `/api/products/search?search=${search}`
    return api.post(url)
  }
}

export default productApi
