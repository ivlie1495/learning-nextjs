// User Service (slide 16)
// Separates API logic from components
import api from '@/services/api'

export interface User {
  id: number
  name: string
  email: string
  phone: string
}

export function getUsers() {
  return api.get<User[]>('/users')
}

export function getUserById(id: number) {
  return api.get<User>(`/users/${id}`)
}
