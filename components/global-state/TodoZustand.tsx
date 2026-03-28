'use client'

// Exercise: Todo app with Zustand (slide 14)
import { useState } from 'react'
import { useTodoStore } from '@/stores/todoStore'

export default function TodoZustand() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodoStore()
  const [input, setInput] = useState('')

  function handleAdd() {
    if (!input.trim()) return
    addTodo(input.trim())
    setInput('')
  }

  return (
    <div className="space-y-3 max-w-sm">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add a todo..."
          className="border rounded px-3 py-1 text-sm flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700"
        >
          Add
        </button>
      </div>
      <ul className="space-y-1">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between border rounded px-3 py-2 text-sm"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 text-xs"
            >
              Delete
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <p className="text-gray-400 text-sm">No todos yet.</p>
        )}
      </ul>
    </div>
  )
}
