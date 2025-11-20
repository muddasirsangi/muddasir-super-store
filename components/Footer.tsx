import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🛍️</span>
              Super Store
            </h3>
            <p className="text-gray-300 mb-4">Your one-stop shop for everything you need.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">📘</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">🐦</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">📷</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-yellow-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-200 transition">→ Products</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-200 transition">→ About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-200 transition">→ Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-yellow-200">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-300 hover:text-yellow-200 transition">→ Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-yellow-200 transition">→ Returns</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-yellow-200 transition">→ FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-yellow-200">Contact Us</h4>
            <p className="text-gray-300 mb-2">📧 support@superstore.com</p>
            <p className="text-gray-300 mb-4">📞 (555) 123-4567</p>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Subscribe to our newsletter</p>
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-400 border border-white/30" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>✨ &copy; 2024 Super Store. All rights reserved. Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
