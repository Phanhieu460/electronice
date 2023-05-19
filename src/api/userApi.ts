import { User } from 'models/user'
import api from './apiClient'

const userApi = {
  login(data: User): Promise<User> {
    const url = '/api/users/login'
    return api.post(url, data)
  },
  register(data: User): Promise<User> {
    const url = '/api/users/register'
    return api.post(url, data)
  },
  profile(id: string): Promise<User> {
    const url = `/api/users/profile/${id}`
    return api.get(url)
  },
  updateProfile(data: User): Promise<User> {
    const url = `/ap/users/profile/${data._id}`
    return api.patch(url, data)
  }
}
export default userApi
