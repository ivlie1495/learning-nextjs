// Server Component - static page, rendered at build time (slide 13: static rendering)
export default function AboutPage() {
  return (
    <div className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About NextStore</h1>
      <p className="text-gray-600 leading-relaxed">
        This is a demo project built to learn Next.js fundamentals. It
        demonstrates server and client components, file-based routing,
        server-side data fetching, and the difference between static and dynamic
        rendering.
      </p>
    </div>
  )
}
