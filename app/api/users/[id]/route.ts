import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { posts: true },
  })

  if (!user) {
    return Response.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  return Response.json(user)
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const data = await req.json()
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data,
  })
  return Response.json(user)
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await prisma.user.delete({
    where: { id: Number(id) },
  })
  return new Response(null, { status: 204 })
}
