import Link from 'next/link'

// Blog list page — links to dynamic routes
export default function BlogPage() {
  const posts = [
    { id: 1, title: 'Getting Started with Next.js' },
    { id: 2, title: 'Understanding React Hooks' },
    { id: 3, title: 'CSS Modules vs Tailwind' },
  ]

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
