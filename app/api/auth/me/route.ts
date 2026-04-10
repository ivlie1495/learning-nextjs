import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'

const DEMO_USERS = [
  { id: 1, name: 'Alice', email: 'alice@example.com', createdAt: '2024-01-01T00:00:00.000Z' },
  { id: 2, name: 'Bob', email: 'bob@example.com', createdAt: '2024-01-01T00:00:00.000Z' },
]

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  if (!token) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    )
  }

  try {
    const payload = await verifyToken(token)
    const user = DEMO_USERS.find((u) => u.id === payload.id)

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    )
  }
}
