import { ListParams, ListResponse } from 'models/common'
import api from './apiClient'
import { User } from 'models/user'

const productApi = {
  getProfileById(id: string): Promise<ListResponse<User>> {
    const url = `/api/users/profile/${id}`
    return api.get(url)
  },
  updateProfile(id: string, data: any): Promise<ListResponse<User>> {
    const url = `/api/users/profile/${id}`
    return api.patch(url, data)
  }
}

export default productApi
