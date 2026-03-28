// Dashboard users page — demonstrates loading.tsx and error.tsx
// Simulates a slow fetch to trigger loading UI
async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <p className="text-sm text-gray-500 mb-3">
        This page has a 2s delay to demonstrate loading.tsx
      </p>
      <ul className="space-y-2">
        {users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id} className="border rounded px-3 py-2 text-sm">
            <span className="font-medium">{user.name}</span>
            <span className="text-gray-500 ml-2">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
