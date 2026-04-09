export async function GET() {
  console.log(process.env.DATABASE_URL, process.env.NEXT_PUBLIC_API_KEY)
  return Response.json({ ok: true })
}
