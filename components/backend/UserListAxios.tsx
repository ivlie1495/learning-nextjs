'use client'

// Fetching Data with axios + useEffect (slides 8-14)
// Shows: loading indicator, error handling, async/await, user service
import { useState, useEffect } from 'react'
import { getUsers, type User } from '@/services/userService'

export default function UserListAxios() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await getUsers()
        setUsers(res.data)
      } catch {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) return <p className="text-gray-500">Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li key={user.id} className="border rounded px-3 py-2 text-sm">
          <span className="font-medium">{user.name}</span>
          <span className="text-gray-500 ml-2">{user.email}</span>
        </li>
      ))}
    </ul>
  )
}
