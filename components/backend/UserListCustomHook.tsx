'use client'

// Using the custom useFetch hook (slides 17-18)
import useFetch from '@/hooks/useFetch'
import type { User } from '@/services/userService'

export default function UserListCustomHook() {
  const { data, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  )

  if (loading) return <p className="text-gray-500">Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <ul className="space-y-2">
      {data?.map((user) => (
        <li key={user.id} className="border rounded px-3 py-2 text-sm">
          <span className="font-medium">{user.name}</span>
          <span className="text-gray-500 ml-2">{user.phone}</span>
        </li>
      ))}
    </ul>
  )
}
