import { notFound } from 'next/navigation'
import Link from 'next/link'

// Dynamic Route (slides 3-4) — app/blog/[id]/page.tsx
// Also demonstrates: not-found handling (slide 20)
const posts: Record<string, string> = {
  '1': 'Getting Started with Next.js',
  '2': 'Understanding React Hooks',
  '3': 'CSS Modules vs Tailwind',
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const title = posts[id]

  if (!title) notFound()

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <Link href="/blog" className="text-blue-600 hover:underline text-sm">
        &larr; Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mt-4">Blog Post: {id}</h1>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  )
}
