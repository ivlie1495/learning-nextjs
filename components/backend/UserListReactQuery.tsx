'use client'

// Using React Query (slides 19-20)
import { useQuery } from '@tanstack/react-query'
import { getUsers, type User } from '@/services/userService'

export default function UserListReactQuery() {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => getUsers().then((res) => res.data),
  })

  if (isLoading) return <p className="text-gray-500">Loading...</p>
  if (error) return <p className="text-red-500">Something went wrong</p>

  return (
    <ul className="space-y-2">
      {data?.map((user) => (
        <li key={user.id} className="border rounded px-3 py-2 text-sm">
          <span className="font-medium">{user.name}</span>
          <span className="text-gray-500 ml-2">{user.email}</span>
        </li>
      ))}
    </ul>
  )
}
