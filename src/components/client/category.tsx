import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "../../interface/product";

const Category = () => {
  const { cateName } = useParams();

  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    },
  });

  const filtered = products?.filter((p) => p.category === cateName);

  if (isLoading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 my-10">
      <h2 className="text-xl font-bold mb-4">Category: {cateName}</h2>

      {filtered && filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 relative group transition-all duration-300"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -35%
              </span>
              <div className="relative overflow-hidden">
                <img
                  src={product.images}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
                  🛒 Add To Cart
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-red-500 text-lg font-bold">
                ${product.price}{" "}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default Category;
