import Link from 'next/link'

// Global not-found page (slide 20)
export default function NotFound() {
  return (
    <div className="px-6 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        &larr; Go Home
      </Link>
    </div>
  )
}
