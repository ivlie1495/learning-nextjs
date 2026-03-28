'use client'

// Updating Object + Nested Object (slides 5-6)
// State must be updated immutably using spread operator
import { useState } from 'react'

export default function UserProfile() {
  const [user, setUser] = useState({
    name: 'Ivan',
    age: 25,
    address: {
      city: 'Jakarta',
      country: 'Indonesia',
    },
  })

  // Exercise: increaseAge - updates object immutably with spread
  function increaseAge() {
    setUser({ ...user, age: user.age + 1 })
  }

  // Updating nested object - must copy every level
  function updateCity(city: string) {
    setUser({
      ...user,
      address: { ...user.address, city },
    })
  }

  return (
    <div className="space-y-3">
      <div className="text-sm space-y-1">
        <p>
          <span className="font-medium">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-medium">Age:</span> {user.age}
        </p>
        <p>
          <span className="font-medium">City:</span> {user.address.city},{' '}
          {user.address.country}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={increaseAge}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
        >
          Increase Age
        </button>
        <button
          onClick={() => updateCity('Bandung')}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
        >
          Move to Bandung
        </button>
        <button
          onClick={() => updateCity('Jakarta')}
          className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          Move to Jakarta
        </button>
      </div>
    </div>
  )
}
