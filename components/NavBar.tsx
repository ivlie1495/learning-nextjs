import Link from 'next/link'

// Server Component (default) - no "use client" needed
// Covers: Routing & Navigation (slide 7), Server Components (slide 8)
export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        NextStore
      </Link>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
      </div>
    </nav>
  )
}
