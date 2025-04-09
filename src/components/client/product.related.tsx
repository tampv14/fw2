import { Heart, ShoppingCart, Eye } from "lucide-react"

const relatedProducts = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      image: "../../picture/Frame 610.png",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      image: "../../picture/Frame 611.png",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      image: "../../picture/Frame 612.png",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviews: 99,
    },
    {
      id: 4,
      name: "RGB liquid CPU Cooler",
      image: "../../picture/Frame 613.png",
      price: 160,
      originalPrice: 170,
      rating: 5,
      reviews: 65,
    },
  ]

const ProductRelated = () => {
  return (
    <div>
      <div className="mt-16">
        <div className="flex items-center mb-6">
          <div className="w-5 h-10 bg-[#DB4444] rounded mr-2"></div>
          <h2 className="text-lg font-medium">Related Item</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-[#F5F5F5] p-4 rounded-md relative overflow-hidden">
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-[#DB4444] text-white text-xs font-medium py-1 px-2 rounded z-10">
                    -{product.discount}%
                  </div>
                )}

                <button
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} />
                </button>

                <div className="relative h-48 mb-4 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover max-h-full transition-transform duration-500 group-hover:scale-110 w-full h-full"
                  />
                </div>

                <button className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShoppingCart size={18} />
                  <span>Add To Cart</span>
                </button>
              </div>

              <div className="mt-3 space-y-1">
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-[#DB4444] font-medium">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                </div>
              </div>

              <div className="absolute right-2 top-16 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-300">
                  <Eye size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductRelated