export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">🔄 Returns & Refunds</h1>
          <p className="text-2xl text-gray-100 animate-slide-up">Hassle-free returns within 30 days</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Return Policy */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">📜</span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Return Policy
              </h2>
            </div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, 
              you can return it within 30 days of delivery for a full refund.
            </p>
            
            <h3 className="font-bold text-2xl mb-4 text-gray-800">Return Requirements:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Items must be in original condition",
                "Tags must be attached",
                "Items must be unworn and unwashed",
                "Original packaging included",
                "Proof of purchase required",
                "No signs of wear or damage",
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700 font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to Return */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-10 rounded-3xl text-white shadow-2xl mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">📦</span>
              <h2 className="text-4xl font-bold">How to Return</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", text: "Log into your account and go to Order History", icon: "👤" },
                { step: "2", text: "Select the order you want to return", icon: "📋" },
                { step: "3", text: "Click 'Request Return' and follow instructions", icon: "🔄" },
                { step: "4", text: "Print the return label and attach to package", icon: "🖨️" },
                { step: "5", text: "Drop off at any authorized shipping location", icon: "📮" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <p className="text-lg text-white/95">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refund Processing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-8 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="font-bold text-3xl mb-4">Refund Processing</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Refunds are processed within 5-7 business days after we receive your return. 
                The refund will be credited to your original payment method.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">🔄</div>
              <h3 className="font-bold text-3xl mb-4">Exchanges</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Want to exchange for a different size or color? Simply return your item and place a new order. 
                We'll process your refund quickly!
              </p>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-10 rounded-3xl text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Need Help with a Return?</h2>
            <p className="text-xl mb-6 text-white/90">Our customer support team is here to assist you!</p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
            >
              Contact Support 💬
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
