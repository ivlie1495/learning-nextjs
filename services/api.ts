// Reusable API Client (slide 15)
// Centralized axios config instead of repeating in every component
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
