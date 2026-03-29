import { prisma } from '@/lib/prisma'
import { z } from 'zod/v4'

const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 chars'),
  email: z.string().email('Invalid email address'),
})

export async function GET() {
  const users = await prisma.user.findMany({
    include: { posts: true },
    orderBy: { createdAt: 'desc' },
  })
  return Response.json(users)
}

export async function POST(req: Request) {
  const body = await req.json()

  const result = userSchema.safeParse(body)

  if (!result.success) {
    return Response.json(
      {
        error: 'Validation failed',
        details: z.flattenError(result.error).fieldErrors,
      },
      { status: 400 }
    )
  }

  const user = await prisma.user.create({
    data: result.data,
  })
  return Response.json(user, { status: 201 })
}
