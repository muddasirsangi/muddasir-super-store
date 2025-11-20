export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">👤 My Account</h1>
          <p className="text-xl text-gray-100">Manage your profile and orders</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl sticky top-24">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-6xl">👤</span>
                </div>
                <h2 className="font-bold text-2xl text-gray-800">John Doe</h2>
                <p className="text-gray-600">john@example.com</p>
                <span className="inline-block mt-2 px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">
                  ⭐ Gold Member
                </span>
              </div>
              
              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg">
                  <span>👤</span> Profile
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 rounded-xl transition">
                  <span>📦</span> Orders
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 rounded-xl transition">
                  <span>❤️</span> Wishlist
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 rounded-xl transition">
                  <span>⚙️</span> Settings
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition">
                  <span>🚪</span> Logout
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Information */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📝</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Profile Information
                </h2>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">First Name</label>
                    <input type="text" defaultValue="John" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Last Name</label>
                    <input type="text" defaultValue="Doe" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
                  <input type="email" defaultValue="john@example.com" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Phone</label>
                  <input type="tel" defaultValue="(555) 123-4567" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-purple-500 focus:outline-none transition" />
                </div>
                
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-lg">
                  Save Changes 💾
                </button>
              </form>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📦</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Recent Orders
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { id: 1001, date: "Nov 15, 2024", status: "Delivered", amount: 279.99, color: "green" },
                  { id: 1002, date: "Nov 10, 2024", status: "Shipped", amount: 159.99, color: "blue" },
                  { id: 1003, date: "Nov 5, 2024", status: "Processing", amount: 89.99, color: "yellow" },
                ].map((order) => (
                  <div key={order.id} className="border-2 border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-lg text-gray-800">Order #{order.id}</span>
                      <span className={`px-4 py-2 rounded-full font-bold text-sm bg-${order.color}-100 text-${order.color}-800`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">Placed on {order.date}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-2xl text-purple-600">${order.amount}</p>
                      <button className="text-purple-600 font-semibold hover:underline">View Details →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "📦", label: "Total Orders", value: "24" },
                { icon: "💰", label: "Total Spent", value: "$2,459" },
                { icon: "⭐", label: "Reward Points", value: "1,250" },
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-purple-500 to-blue-500 p-6 rounded-2xl text-white text-center shadow-xl transform hover:scale-105 transition-all">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
