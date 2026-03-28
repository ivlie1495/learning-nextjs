// Custom Data Fetching Hook (slides 17-18)
// Reusable hook so multiple components can fetch without repeating code
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get<T>(url)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch data')
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}
