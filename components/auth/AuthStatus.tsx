'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: number
  name: string | null
  email: string
  createdAt: string
}

export default function AuthStatus() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
    router.refresh()
  }

  if (loading) return <p className="text-gray-500">Checking auth...</p>

  if (!user) {
    return (
      <div className="border rounded p-4 bg-red-50">
        <p className="font-medium text-red-700">Not authenticated</p>
        <p className="text-sm text-gray-500 mt-1">
          Go to <a href="/login" className="text-blue-600 underline">/login</a> to sign in.
        </p>
      </div>
    )
  }

  return (
    <div className="border rounded p-4 bg-green-50 space-y-3">
      <p className="font-medium text-green-700">Authenticated</p>
      <div className="text-sm space-y-1">
        <p><span className="text-gray-500">ID:</span> {user.id}</p>
        <p><span className="text-gray-500">Name:</span> {user.name}</p>
        <p><span className="text-gray-500">Email:</span> {user.email}</p>
        <p><span className="text-gray-500">Created:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}
