export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Get In Touch</h1>
          <p className="text-2xl text-gray-100 animate-slide-up">We'd love to hear from you!</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl">✉️</span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Send us a Message
              </h2>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-purple-500 focus:outline-none transition" 
                  placeholder="Your name" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-purple-500 focus:outline-none transition" 
                  placeholder="your@email.com" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Subject</label>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-purple-500 focus:outline-none transition" 
                  placeholder="How can we help?" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Message</label>
                <textarea 
                  className="w-full border-2 border-gray-200 p-4 rounded-xl h-32 focus:border-purple-500 focus:outline-none transition" 
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg">
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-10 rounded-3xl shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <span className="text-4xl">📧</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Email</h3>
                    <p className="text-white/90">support@superstore.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <span className="text-4xl">📞</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Phone</h3>
                    <p className="text-white/90">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <span className="text-4xl">📍</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Address</h3>
                    <p className="text-white/90">123 Store Street<br />Shopping City, SC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <span className="text-4xl">🕐</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Business Hours</h3>
                    <p className="text-white/90">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl shadow-xl text-white transform hover:scale-105 transition-all">
              <h3 className="font-bold text-2xl mb-3">💡 Need Quick Help?</h3>
              <p className="text-white/90 mb-4 text-lg">Check out our FAQ page for instant answers to common questions.</p>
              <a href="/faq" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105">
                Visit FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
