import ProductCard from '@/components/ProductCard'

// Server Component - fetches data on the server (slide 12)
// No useState/useEffect needed — just make it async and fetch directly
export default async function ProductList() {
  // Server-side data fetching: simply await fetch in an async component
  const res = await fetch('https://fakestoreapi.com/products?limit=6')
  const products = await res.json()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
      {products.map(
        (product: {
          id: number
          title: string
          price: number
          description: string
        }) => (
          <ProductCard key={product.id} product={product} />
        ),
      )}
    </div>
  )
}
