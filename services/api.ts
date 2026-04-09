// Reusable API Client (slide 15)
// Centralized axios config instead of repeating in every component
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
