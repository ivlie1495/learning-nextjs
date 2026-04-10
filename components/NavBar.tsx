import Link from 'next/link'
import NavAuthStatus from '@/components/auth/NavAuthStatus'

// Server Component (default) - no "use client" needed
// Covers: Routing & Navigation (slide 7), Server Components (slide 8)
export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        NextStore
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-gray-300 text-sm">
          Home
        </Link>
        <NavAuthStatus />
      </div>
    </nav>
  )
}
