import Link from 'next/link'

// Handling Not Found (slide 20) — custom 404 for blog posts
export default function BlogNotFound() {
  return (
    <div className="px-6 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">Blog Post Not Found</h2>
      <p className="text-gray-500 mb-4">
        The blog post you are looking for does not exist.
      </p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        &larr; Back to Blog
      </Link>
    </div>
  )
}
