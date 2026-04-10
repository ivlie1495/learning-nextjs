import { NextResponse } from 'next/server'
import { signToken } from '@/lib/auth'

const DEMO_USERS = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
]

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (password !== 'password') {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const user = DEMO_USERS.find((u) => u.email === email)

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const token = await signToken({ id: user.id, email: user.email })

    const response = NextResponse.json({ success: true, user })
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60,
    })
    return response
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
