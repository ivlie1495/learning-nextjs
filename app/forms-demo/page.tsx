import LoginForm from '@/components/forms/LoginForm'
import TodoList from '@/components/forms/TodoList'

// Building Forms demo page
export default function FormsDemoPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Building Forms</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          React Hook Form + Zod Validation
        </h2>
        <p className="text-sm text-gray-500">
          Login form with email and password validation using Zod schema.
        </p>
        <LoginForm />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Exercise: Todo List
        </h2>
        <p className="text-sm text-gray-500">
          React Hook Form with required validation, add/delete todos, clear
          input after submit.
        </p>
        <TodoList />
      </section>
    </div>
  )
}
