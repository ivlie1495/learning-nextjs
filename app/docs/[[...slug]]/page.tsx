// Optional Catch-all Segments (slides 6-8)
// Matches: /docs, /docs/intro, /docs/guides/routing, etc.
export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params

  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Docs</h1>
      {slug ? (
        <div>
          <p className="text-gray-600 mb-2">
            Path: <code className="bg-gray-100 px-2 py-1 rounded">/docs/{slug.join('/')}</code>
          </p>
          <p className="text-sm text-gray-500">
            Segments: {JSON.stringify(slug)}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">
          This is the docs index. Try visiting /docs/intro or
          /docs/guides/routing.
        </p>
      )}
    </div>
  )
}
