'use client'

// Handling Errors (slide 21) — catches errors in this route segment
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="text-center py-8">
      <h2 className="text-xl font-bold text-red-600 mb-2">
        Something went wrong!
      </h2>
      <p className="text-gray-500 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        Try again
      </button>
    </div>
  )
}
