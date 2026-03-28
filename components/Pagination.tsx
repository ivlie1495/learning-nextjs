// Server Component - static UI, no interactivity needed
export default function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          {page}
        </button>
      ))}
    </div>
  )
}
