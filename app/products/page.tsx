import SideBar from '@/components/SideBar'
import ProductList from '@/components/ProductList'
import Pagination from '@/components/Pagination'

// Server Component - products page with sidebar layout (slide 10, 11)
// Demonstrates: routing (folder-based), server-side data fetching, component composition
export default function ProductsPage() {
  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="flex gap-6">
        <SideBar />
        <div className="flex-1">
          <ProductList />
          <Pagination />
        </div>
      </div>
    </div>
  )
}
