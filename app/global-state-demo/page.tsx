import CounterReducer from '@/components/global-state/CounterReducer'
import TodoReducer from '@/components/global-state/TodoReducer'
import ThemeDemo from '@/components/global-state/ThemeDemo'
import TodoZustand from '@/components/global-state/TodoZustand'

// Global State Management demo page
export default function GlobalStateDemoPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Global State Management</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          useReducer — Counter
        </h2>
        <p className="text-sm text-gray-500">
          Centralizes state updates with a reducer function and dispatch
          actions.
        </p>
        <CounterReducer />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          useReducer — Todo App (Complex Actions)
        </h2>
        <p className="text-sm text-gray-500">
          Add, delete, and toggle todos using dispatched actions with payloads.
          Click a todo to toggle it.
        </p>
        <TodoReducer />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          React Context — Theme Toggle
        </h2>
        <p className="text-sm text-gray-500">
          Shares theme state via Context API — no prop drilling needed.
        </p>
        <ThemeDemo />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">
          Zustand — Todo App
        </h2>
        <p className="text-sm text-gray-500">
          Same todo app powered by Zustand store. No provider needed — just
          import and use.
        </p>
        <TodoZustand />
      </section>
    </div>
  )
}
