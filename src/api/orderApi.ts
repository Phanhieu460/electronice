import { ListResponse } from 'models/common'
import api from './apiClient'

const orderApi = {
  createOrder(order: any): Promise<ListResponse<any>> {
    const url = `api/orders`
    return api.post(url, order)
  }
}

export default orderApi
