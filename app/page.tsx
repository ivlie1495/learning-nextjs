import Link from 'next/link'

// Server Component - the home page (slide 7: routing with page.tsx)
export default function Home() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to NextStore</h1>
      <p className="text-gray-600 text-lg mb-8">
        A demo project showcasing Next.js fundamentals: routing, client/server
        components, data fetching, and more.
      </p>
      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg"
      >
        Browse Products
      </Link>
    </div>
  )
}
