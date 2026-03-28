'use client'

// Updating Array (slide 7) + Array of Objects (slide 8)
// No push/splice — use spread, filter, map instead
import { useState } from 'react'

export default function FruitList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana'])
  const [input, setInput] = useState('')

  // Exercise: addFruit - spread to create new array
  function addFruit() {
    if (!input.trim()) return
    setFruits([...fruits, input.trim()])
    setInput('')
  }

  // Exercise: removeFruit - filter to create new array
  function removeFruit(fruit: string) {
    setFruits(fruits.filter((f) => f !== fruit))
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addFruit()}
          placeholder="Enter a fruit"
          className="border rounded px-3 py-1 text-sm"
        />
        <button
          onClick={addFruit}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="space-y-1">
        {fruits.map((fruit) => (
          <li key={fruit} className="flex items-center justify-between text-sm">
            <span>{fruit}</span>
            <button
              onClick={() => removeFruit(fruit)}
              className="text-red-500 hover:text-red-700 text-xs"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
