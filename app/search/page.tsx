// Query String Parameters (slide 10)
// Try: /search?category=shoes&sort=price
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string }>
}) {
  const { category, sort } = await searchParams

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <p className="text-gray-600 mb-2">
        Try: <code className="bg-gray-100 px-2 py-1 rounded">/search?category=shoes&sort=price</code>
      </p>
      <div className="border rounded p-4 mt-4 text-sm space-y-1">
        <p>
          <span className="font-medium">Category:</span>{' '}
          {category || '(none)'}
        </p>
        <p>
          <span className="font-medium">Sort:</span> {sort || '(none)'}
        </p>
      </div>
    </div>
  )
}
