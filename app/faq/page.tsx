export default function FAQPage() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.",
      icon: "🚚"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition with tags attached.",
      icon: "🔄"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and times vary by location.",
      icon: "🌍"
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email.",
      icon: "📦"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
      icon: "💳"
    },
    {
      question: "Can I change my order after placing it?",
      answer: "You can modify your order within 1 hour of placing it. Contact our support team immediately.",
      icon: "✏️"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">❓ FAQ</h1>
          <p className="text-2xl text-gray-100 animate-slide-up">Find answers to common questions</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl flex-shrink-0">{faq.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 p-10 rounded-3xl text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl mb-6 text-white/90">Our support team is here to help!</p>
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
