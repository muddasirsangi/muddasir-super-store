export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">🚚 Shipping Information</h1>
          <p className="text-2xl text-gray-100 animate-slide-up">Fast, reliable delivery to your door</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Shipping Options */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shipping Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-3xl shadow-xl text-white transform hover:scale-105 hover:rotate-2 transition-all duration-300">
                <div className="text-6xl mb-4">🚚</div>
                <h3 className="font-bold text-2xl mb-3">Standard Shipping</h3>
                <p className="text-white/90 text-lg mb-2">5-7 business days</p>
                <p className="text-3xl font-bold mb-2">FREE</p>
                <p className="text-white/80">on orders over $50</p>
                <p className="text-white/80 mt-2">$5.99 for orders under $50</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-3xl shadow-xl text-white transform hover:scale-105 hover:rotate-2 transition-all duration-300">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="font-bold text-2xl mb-3">Express Shipping</h3>
                <p className="text-white/90 text-lg mb-2">2-3 business days</p>
                <p className="text-3xl font-bold mb-2">$14.99</p>
                <p className="text-white/80">Fast delivery</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-3xl shadow-xl text-white transform hover:scale-105 hover:rotate-2 transition-all duration-300">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="font-bold text-2xl mb-3">Overnight Shipping</h3>
                <p className="text-white/90 text-lg mb-2">Next business day</p>
                <p className="text-3xl font-bold mb-2">$24.99</p>
                <p className="text-white/80">Lightning fast!</p>
              </div>
            </div>
          </div>

          {/* Shipping Policy */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">📋</span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shipping Policy
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "⏱️", text: "All orders processed within 1-2 business days" },
                { icon: "📍", text: "Track your order with real-time updates" },
                { icon: "🌍", text: "International shipping to most countries" },
                { icon: "✍️", text: "Signature required for high-value orders" },
                { icon: "📦", text: "Secure packaging for all items" },
                { icon: "🔄", text: "Easy returns within 30 days" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all transform hover:translate-x-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-gray-700 text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International Shipping */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-10 rounded-3xl text-white shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-4">🌎</div>
              <h2 className="text-4xl font-bold mb-4">International Shipping</h2>
              <p className="text-xl text-white/90 mb-6">
                We ship to over 100 countries worldwide! Delivery times and costs vary by location.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-bold text-lg mb-1">🇺🇸 USA</p>
                  <p className="text-white/90">3-5 business days</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-bold text-lg mb-1">🇪🇺 Europe</p>
                  <p className="text-white/90">5-10 business days</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-bold text-lg mb-1">🌏 Asia</p>
                  <p className="text-white/90">7-14 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
