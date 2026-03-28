import Link from 'next/link'

// Nested Layout (slide 13) — sidebar shared across dashboard pages
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <aside className="w-48 bg-gray-50 p-4 min-h-[calc(100vh-64px)]">
        <h2 className="font-bold text-lg mb-3">Dashboard</h2>
        <nav className="space-y-2 text-sm">
          <Link
            href="/dashboard"
            className="block text-gray-700 hover:text-black"
          >
            Overview
          </Link>
          <Link
            href="/dashboard/settings"
            className="block text-gray-700 hover:text-black"
          >
            Settings
          </Link>
          <Link
            href="/dashboard/users"
            className="block text-gray-700 hover:text-black"
          >
            Users
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
