'use client'

// Client Component - needs interactivity (onClick, useState)
// This is the ONLY component that needs "use client" (slide 9, 11)
// Server components CANNOT: listen to browser events, maintain state, use effects

import { useState } from 'react'

export default function AddToCart() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center gap-2 mt-3">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
      >
        Add to Cart
      </button>
      {count > 0 && (
        <span className="text-sm text-gray-600">({count} added)</span>
      )}
    </div>
  )
}
