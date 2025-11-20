import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Wireless Headphones", price: 79.99, image: "/products/headphones.jpg", category: "Electronics", rating: 4.5 },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/products/watch.jpg", category: "Electronics", rating: 4.8 },
  { id: 3, name: "Running Shoes", price: 89.99, image: "/products/shoes.jpg", category: "Fashion", rating: 4.6 },
  { id: 4, name: "Coffee Maker", price: 49.99, image: "/products/coffee.jpg", category: "Home", rating: 4.7 },
  { id: 5, name: "Laptop Bag", price: 39.99, image: "/products/bag.jpg", category: "Fashion", rating: 4.4 },
  { id: 6, name: "Bluetooth Speaker", price: 59.99, image: "/products/speaker.jpg", category: "Electronics", rating: 4.9 },
  { id: 7, name: "Yoga Mat", price: 29.99, image: "/products/yoga.jpg", category: "Sports", rating: 4.3 },
  { id: 8, name: "Desk Lamp", price: 34.99, image: "/products/lamp.jpg", category: "Home", rating: 4.6 },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            All Products
          </h1>
          <p className="text-gray-600 text-lg">Discover our amazing collection</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64">
            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
              <h2 className="font-bold text-2xl mb-6 text-purple-600">🔍 Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Category</h3>
                <div className="space-y-2">
                  {["All", "Electronics", "Fashion", "Home", "Sports"].map((cat) => (
                    <label key={cat} className="flex items-center p-2 hover:bg-purple-50 rounded-lg cursor-pointer transition">
                      <input type="checkbox" className="mr-3 w-4 h-4 accent-purple-600" />
                      <span className="text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
                <input type="range" min="0" max="500" className="w-full accent-purple-600" />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span className="font-semibold">$0</span>
                  <span className="font-semibold">$500</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <label key={rating} className="flex items-center p-2 hover:bg-purple-50 rounded-lg cursor-pointer transition">
                      <input type="checkbox" className="mr-3 w-4 h-4 accent-purple-600" />
                      <span className="text-yellow-400">{"⭐".repeat(rating)}</span>
                      <span className="text-gray-600 ml-2">& up</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition shadow-md">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing <span className="font-bold text-purple-600">{products.length}</span> products</p>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
