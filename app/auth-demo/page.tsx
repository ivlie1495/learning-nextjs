import AuthStatus from '@/components/auth/AuthStatus'

export default function AuthDemoPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Authentication Demo</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Current User (via /api/auth/me)
        </h2>
        <p className="text-sm text-gray-500">
          Reads the auth_token cookie, verifies the JWT, and returns the user.
        </p>
        <AuthStatus />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-700">Auth Endpoints</h2>
        <div className="bg-gray-50 rounded p-4 text-sm font-mono space-y-1">
          <p><span className="text-blue-600">POST</span> /api/auth/login — email + password, sets cookie</p>
          <p><span className="text-blue-600">POST</span> /api/auth/logout — clears cookie</p>
          <p><span className="text-green-600">GET</span> /api/auth/me — returns current user from JWT</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-700">Protected Routes (Middleware)</h2>
        <p className="text-sm text-gray-500">
          These routes redirect to /login if no auth_token cookie is present:
        </p>
        <div className="bg-gray-50 rounded p-4 text-sm font-mono space-y-1">
          <p>/dashboard/:path*</p>
          <p>/profile/:path*</p>
          <p>/api/protected/:path*</p>
        </div>
        <p className="text-sm text-gray-500">
          Try visiting <a href="/dashboard" className="text-blue-600 underline">/dashboard</a> while
          logged out — you will be redirected to /login.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-700">How It Works</h2>
        <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
          <li>User submits login form</li>
          <li>POST /api/auth/login validates credentials</li>
          <li>JWT token is signed and set as httpOnly cookie</li>
          <li>Middleware checks auth_token on protected routes</li>
          <li>GET /api/auth/me verifies JWT and returns user data</li>
        </ol>
      </section>
    </div>
  )
}
