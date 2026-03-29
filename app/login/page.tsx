import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="text-sm text-gray-500">
        Sign in with a user created in the API demo. Password is always &quot;password&quot;.
      </p>
      <LoginForm />
    </div>
  )
}
