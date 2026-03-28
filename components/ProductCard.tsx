import AddToCart from '@/components/AddToCart'

// Server Component that renders a Client Component (AddToCart) as a child
interface Product {
  id: number
  title: string
  price: number
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="bg-gray-200 h-40 rounded mb-3 flex items-center justify-center text-gray-400">
        Image
      </div>
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
        {product.description}
      </p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <AddToCart />
    </div>
  )
}
