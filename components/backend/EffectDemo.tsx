'use client'

// useEffect + dependencies + cleanup (slides 2-7)
import { useState, useEffect } from 'react'

export default function EffectDemo() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Empty array [] — runs once on mount
  useEffect(() => {
    console.log('Component mounted')
  }, [])

  // With dependency [count] — runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  // Cleanup — clearInterval when unmount or re-run
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="space-y-3">
      <p className="text-sm">
        <span className="font-medium">Timer:</span> {seconds}s (cleanup clears
        interval on unmount)
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
        >
          Count: {count}
        </button>
        <span className="text-sm text-gray-500">
          (document title updates via useEffect)
        </span>
      </div>
    </div>
  )
}
