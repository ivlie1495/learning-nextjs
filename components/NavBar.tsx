import Link from 'next/link'

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
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
      </div>
    </nav>
  )
}
