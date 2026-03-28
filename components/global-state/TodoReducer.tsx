'use client'

// Exercise: Todo app with useReducer (slides 4-6)
// Complex actions: add_todo, delete_todo, toggle_todo
import { useReducer, useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface State {
  todos: Todo[]
}

type Action =
  | { type: 'add_todo'; payload: Todo }
  | { type: 'delete_todo'; payload: number }
  | { type: 'toggle_todo'; payload: number }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_todo':
      return { ...state, todos: [...state.todos, action.payload] }
    case 'delete_todo':
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      }
    case 'toggle_todo':
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t,
        ),
      }
    default:
      return state
  }
}

export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, { todos: [] })
  const [input, setInput] = useState('')

  function addTodo() {
    if (!input.trim()) return
    dispatch({
      type: 'add_todo',
      payload: { id: Date.now(), text: input.trim(), completed: false },
    })
    setInput('')
  }

  return (
    <div className="space-y-3 max-w-sm">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a todo..."
          className="border rounded px-3 py-1 text-sm flex-1"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="space-y-1">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between border rounded px-3 py-2 text-sm"
          >
            <span
              onClick={() =>
                dispatch({ type: 'toggle_todo', payload: todo.id })
              }
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: 'delete_todo', payload: todo.id })
              }
              className="text-red-500 hover:text-red-700 text-xs"
            >
              Delete
            </button>
          </li>
        ))}
        {state.todos.length === 0 && (
          <p className="text-gray-400 text-sm">No todos yet.</p>
        )}
      </ul>
    </div>
  )
}
