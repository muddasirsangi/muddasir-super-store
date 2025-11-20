export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">About Super Store</h1>
          <p className="text-2xl text-gray-100 animate-slide-up">Your trusted shopping partner since 2024</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">📖</span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Story</h2>
            </div>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Founded in 2024, Super Store has been committed to providing high-quality products at affordable prices. 
              We believe that everyone deserves access to great products without breaking the bank.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to make online shopping easy, convenient, and enjoyable for everyone. 
              With thousands of products across multiple categories, we're your one-stop shop for all your needs.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: "🚚", title: "Fast Shipping", desc: "Free shipping on orders over $50", color: "from-blue-500 to-cyan-500" },
            { icon: "💯", title: "Quality Products", desc: "Only the best for our customers", color: "from-purple-500 to-pink-500" },
            { icon: "🔒", title: "Secure Payment", desc: "Your data is safe with us", color: "from-green-500 to-emerald-500" },
            { icon: "💬", title: "24/7 Support", desc: "We're here to help anytime", color: "from-orange-500 to-red-500" },
            { icon: "🎁", title: "Special Offers", desc: "Exclusive deals for members", color: "from-yellow-500 to-orange-500" },
            { icon: "⭐", title: "Top Rated", desc: "4.9/5 customer satisfaction", color: "from-pink-500 to-rose-500" },
          ].map((feature, i) => (
            <div key={i} className={`bg-gradient-to-br ${feature.color} p-8 rounded-3xl shadow-xl text-white transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer`}>
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-2xl mb-3">{feature.title}</h3>
              <p className="text-white/90 text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">💎</span>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Customer satisfaction is our top priority",
                "We stand behind the quality of our products",
                "Transparent pricing with no hidden fees",
                "Committed to sustainable practices",
                "Supporting local communities",
                "Innovation in every aspect",
              ].map((value, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:translate-x-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700 text-lg font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", emoji: "👩‍💼" },
              { name: "Mike Chen", role: "CTO", emoji: "👨‍💻" },
              { name: "Emily Davis", role: "Head of Marketing", emoji: "👩‍🎨" },
              { name: "James Wilson", role: "Customer Success", emoji: "👨‍💼" },
            ].map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-xl text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <div className="text-7xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">{member.name}</h3>
                <p className="text-purple-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "10K+", label: "Products" },
              { number: "100+", label: "Countries" },
              { number: "4.9★", label: "Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center transform hover:scale-110 transition-all">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
