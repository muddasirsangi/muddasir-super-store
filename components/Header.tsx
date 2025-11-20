import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-3xl">🛍️</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
              Super Store
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-yellow-200 transition font-medium">Home</Link>
            <Link href="/products" className="text-white hover:text-yellow-200 transition font-medium">Products</Link>
            <Link href="/about" className="text-white hover:text-yellow-200 transition font-medium">About</Link>
            <Link href="/contact" className="text-white hover:text-yellow-200 transition font-medium">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-white hover:text-yellow-200 transition flex items-center gap-2 font-medium">
              <span className="text-2xl">🛒</span>
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Link>
            <Link href="/account" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-yellow-200 transition font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
