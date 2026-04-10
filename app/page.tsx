import Link from 'next/link'

const lessons = [
  { href: '/products', label: 'Products', description: 'Browse products with server-side data fetching' },
  { href: '/components-demo', label: 'Components', description: 'Client vs server components, props, and composition' },
  { href: '/styling-demo', label: 'Styling', description: 'Tailwind CSS utility classes and responsive design' },
  { href: '/state-demo', label: 'State', description: 'useState, useEffect, and local component state' },
  { href: '/forms-demo', label: 'Forms', description: 'React Hook Form with Zod validation' },
  { href: '/backend-demo', label: 'Backend', description: 'Server actions and database access with Prisma' },
  { href: '/global-state-demo', label: 'Global State', description: 'Zustand for cross-component state management' },
  { href: '/api-demo', label: 'API Routes', description: 'Next.js API routes with request and response handling' },
  { href: '/auth-demo', label: 'Authentication', description: 'JWT-based auth with cookies and middleware' },
  { href: '/unit-testing-demo', label: 'Unit Testing', description: 'Writing tests with Vitest and Testing Library' },
  { href: '/blog', label: 'Blog', description: 'Dynamic routes and static generation' },
  { href: '/dashboard', label: 'Dashboard', description: 'Protected routes and layout patterns' },
  { href: '/about', label: 'About', description: 'Static page example' },
]

export default function Home() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to NextStore</h1>
        <p className="text-gray-600 text-lg">
          A demo project for learning Next.js fundamentals, built lesson by lesson.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map(({ href, label, description }) => (
          <Link
            key={href}
            href={href}
            className="border rounded-lg p-5 hover:shadow-md hover:border-blue-400 transition-all"
          >
            <h2 className="font-semibold text-lg mb-1">{label}</h2>
            <p className="text-sm text-gray-500">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
