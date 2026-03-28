'use client'

// useReducer — centralizes state updates (slides 2-3)
import { useReducer } from 'react'

interface State {
  count: number
}

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
      >
        -
      </button>
      <span className="text-lg font-bold w-8 text-center">{state.count}</span>
      <button
        onClick={() => dispatch({ type: 'increment' })}
        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 ml-2"
      >
        Reset
      </button>
    </div>
  )
}
