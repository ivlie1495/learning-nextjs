'use client'

// Exercise: Build a Simple Todo List (slide 13)
// - React Hook Form, required validation, error message,
//   add/delete todos, clear input after submit
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  todo: z.string().min(1, 'Todo is required'),
})

type FormData = z.infer<typeof schema>

interface Todo {
  id: number
  text: string
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    // eslint-disable-next-line react-hooks/purity
    setTodos([...todos, { id: Date.now(), text: data.todo }])
    reset()
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className="space-y-4 max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="flex-1">
          <input
            {...register('todo')}
            className="border rounded px-3 py-2 w-full text-sm"
            placeholder="Add a todo..."
          />
          {errors.todo && (
            <p className="text-red-500 text-xs mt-1">{errors.todo.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between border rounded px-3 py-2 text-sm"
          >
            <span>{todo.text}</span>
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
