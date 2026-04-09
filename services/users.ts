interface UserData {
  name: string
  email: string
}

interface User extends UserData {
  id: number
  role: string
}

export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }
  return response.json()
}
