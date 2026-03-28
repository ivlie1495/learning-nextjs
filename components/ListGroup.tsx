'use client'

// List Group (slide 2) - Rendering Lists (slide 4) + Conditional Rendering (slide 5)
// Also demonstrates: Fragment (slide 3), State (slide 6), Events (slide 7)
import { useState } from 'react'

interface ListGroupProps {
  title: string
  items: string[]
}

export default function ListGroup({ title, items }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {items.map((item, index) => (
            <li
              key={item}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer p-1 rounded ${
                selectedIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
