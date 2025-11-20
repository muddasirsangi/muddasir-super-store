import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Wireless Headphones", price: 79.99, image: "/products/headphones.jpg", category: "Electronics", rating: 4.5 },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/products/watch.jpg", category: "Electronics", rating: 4.8 },
  { id: 3, name: "Running Shoes", price: 89.99, image: "/products/shoes.jpg", category: "Fashion", rating: 4.6 },
  { id: 4, name: "Coffee Maker", price: 49.99, image: "/products/coffee.jpg", category: "Home", rating: 4.7 },
];

const categories = [
  { name: "Electronics", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { name: "Fashion", icon: "👗", color: "from-pink-500 to-rose-500" },
  { name: "Home", icon: "🏠", color: "from-green-500 to-emerald-500" },
  { name: "Sports", icon: "⚽", color: "from-orange-500 to-yellow-500" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/hero/1920/800" 
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-blue-600/90"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-400 text-purple-900 rounded-full font-semibold text-sm animate-scale">
            🎉 Special Offer: Up to 50% OFF!
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up drop-shadow-2xl">
            Welcome to <span className="text-yellow-300">Super Store</span>
          </h1>
          <p className="text-2xl mb-8 text-gray-100 animate-slide-up drop-shadow-lg">Discover amazing products at unbeatable prices</p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Link href="/products" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition transform hover:scale-105 shadow-2xl">
              🛍️ Shop Now
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "📦", number: "10,000+", label: "Products" },
              { icon: "😊", number: "50,000+", label: "Happy Customers" },
              { icon: "⭐", number: "4.9/5", label: "Rating" },
              { icon: "🚚", number: "Free", label: "Shipping" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl hover:shadow-lg transition transform hover:scale-105">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ⭐ Featured Products
            </h2>
            <p className="text-gray-600 text-lg">Handpicked items just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                href={`/products?category=${category.name}`} 
                className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center text-white transform hover:scale-105 group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{category.icon}</div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative py-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/promo/1920/400" 
            alt="Promo background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">🔥 Limited Time Offer!</h2>
          <p className="text-2xl mb-6 drop-shadow-md">Get 30% OFF on your first order</p>
          <Link href="/products" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl">
            Claim Your Discount
          </Link>
        </div>
      </section>
    </div>
  );
}
