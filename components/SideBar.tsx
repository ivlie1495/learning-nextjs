// Server Component - renders on the server, no JS shipped to client
export default function SideBar() {
  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home']

  return (
    <aside className="w-48 shrink-0 bg-gray-50 p-4 rounded-lg">
      <h2 className="font-bold text-lg mb-3">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button className="text-gray-700 hover:text-black hover:font-medium w-full text-left">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
