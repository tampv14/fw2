// SearchResults.jsx
import { useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchProducts = async (query) => {
  const { data } = await axios.get(`http://localhost:3000/products?q=${query}`) 
  return data
}

const SearchResults = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get("query") || ""

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchProducts(query),
    enabled: !!query
  })

  if (isLoading) return <p className="p-4">Loading...</p>
  if (isError) return <p className="p-4 text-red-500">Error fetching products</p>

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-sm">
              <img src={product.images} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults