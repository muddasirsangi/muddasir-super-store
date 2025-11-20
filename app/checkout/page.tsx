export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">💳 Checkout</h1>
          <p className="text-xl text-gray-100">Complete your purchase securely</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📦</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shipping Information
                </h2>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">First Name</label>
                    <input type="text" placeholder="John" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Address</label>
                  <input type="text" placeholder="123 Main Street" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">City</label>
                    <input type="text" placeholder="New York" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">ZIP Code</label>
                    <input type="text" placeholder="10001" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Phone</label>
                  <input type="text" placeholder="(555) 123-4567" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                </div>
              </form>
            </div>

            {/* Payment Information */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">💳</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Payment Information
                </h2>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">CVV</label>
                    <input type="text" placeholder="123" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-3xl shadow-2xl text-white sticky top-24">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <span>📋</span> Order Summary
              </h2>
              
              <div className="space-y-4 mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="flex justify-between text-lg">
                  <span className="text-white/90">Subtotal</span>
                  <span className="font-bold">$479.97</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-white/90">Shipping</span>
                  <span className="font-bold">$10.00</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-white/90">Tax</span>
                  <span className="font-bold">$48.00</span>
                </div>
                <div className="border-t-2 border-white/30 pt-4 flex justify-between text-2xl">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">$537.97</span>
                </div>
              </div>

              <button className="w-full bg-white text-purple-600 px-6 py-4 rounded-xl font-bold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg mb-4">
                Place Order 🚀
              </button>

              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <p className="text-sm text-white/90 text-center mb-2">
                  🔒 Secure checkout
                </p>
                <p className="text-xs text-white/80 text-center">
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
