'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NavAuthStatus() {
  const [name, setName] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setName(data?.name ?? data?.email ?? null)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setName(null)
    router.refresh()
  }

  if (loading) return null

  if (!name) {
    return (
      <Link href="/login" className="text-sm hover:text-gray-300">
        Login
      </Link>
    )
  }

  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-gray-300">{name}</span>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
      >
        Logout
      </button>
    </div>
  )
}
