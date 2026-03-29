import Link from 'next/link'

const lessons = [
  {
    href: '/components-demo',
    title: 'Components',
    description: 'Building blocks: props, children, lists, and conditional rendering.',
  },
  {
    href: '/styling-demo',
    title: 'Styling',
    description: 'Vanilla CSS, CSS Modules, Inline styles, and CSS-in-JS.',
  },
  {
    href: '/state-demo',
    title: 'Managing State',
    description: 'useState, filtering lists, and updating objects/arrays.',
  },
  {
    href: '/forms-demo',
    title: 'Building Forms',
    description: 'React Hook Form with Zod validation.',
  },
  {
    href: '/backend-demo',
    title: 'Connecting to Backend',
    description: 'useEffect, Axios, custom hooks, and React Query.',
  },
  {
    href: '/global-state-demo',
    title: 'Global State',
    description: 'Context, useReducer, and Zustand.',
  },
  {
    href: '/blog',
    title: 'Routing & Navigation',
    description: 'Dynamic routes, nested layouts, and catch-all segments.',
  },
  {
    href: '/api-demo',
    title: 'API Routes',
    description: 'CRUD endpoints with Prisma and Zod validation.',
  },
  {
    href: '/auth-demo',
    title: 'Authentication',
    description: 'JWT tokens, session cookies, and middleware protection.',
  },
]

export default function Home() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to NextStore</h1>
        <p className="text-gray-600 text-lg">
          A demo project showcasing Next.js fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <Link
            key={lesson.href}
            href={lesson.href}
            className="border rounded-lg p-5 hover:shadow-md hover:border-blue-400 transition-all group"
          >
            <h2 className="font-semibold text-lg group-hover:text-blue-600">
              {lesson.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{lesson.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
