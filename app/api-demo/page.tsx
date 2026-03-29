import UserManager from '@/components/api/UserManager'

export default function ApiDemoPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">API Routes Demo</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          CRUD with Prisma + Zod Validation
        </h2>
        <p className="text-sm text-gray-500">
          Create, read, update, and delete users via Next.js API routes.
          Uses Prisma for database access and Zod for input validation.
        </p>
        <UserManager />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-700">API Endpoints</h2>
        <div className="bg-gray-50 rounded p-4 text-sm font-mono space-y-1">
          <p><span className="text-green-600">GET</span> /api/hello</p>
          <p><span className="text-green-600">GET</span> /api/users</p>
          <p><span className="text-blue-600">POST</span> /api/users</p>
          <p><span className="text-green-600">GET</span> /api/users/:id</p>
          <p><span className="text-yellow-600">PUT</span> /api/users/:id</p>
          <p><span className="text-red-600">DELETE</span> /api/users/:id</p>
        </div>
      </section>
    </div>
  )
}
