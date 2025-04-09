import { Search, Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const AppHeader = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
    }
  }
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 px-4 flex justify-center items-center gap-2">
        <p className="text-center text-sm md:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <div className="">
          <button className="font-semibold hover:underline transition-all duration-300 text-sm md:text-base flex items-center gap-1">
            ShopNow
          </button>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Exclusive
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-[#DB4444] hover:underline transition-all duration-300">
              Home
            </Link>
            <Link to="/contact" className="hover:text-[#DB4444] hover:underline transition-all duration-300">
              Contact
            </Link>
            <Link to="/about" className="hover:text-[#DB4444] hover:underline transition-all duration-300">
              About
            </Link>
            <Link to="/signin" className="hover:text-[#DB4444] hover:underline transition-all duration-300">
              Sign In
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
            <input
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                className="bg-gray-100 rounded-md py-2 px-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-[#DB4444]/50 transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <button className="md:hidden">
              <Search size={24} />
            </button>
            <button className="flex items-center gap-1">
              <Heart />
            </button>
            <button className="flex items-center gap-1">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default AppHeader