"use client";

const relatedProducts = [
  { name: "Smart Watch", price: 199.99, id: 2 },
  { name: "Bluetooth Speaker", price: 59.99, id: 6 },
  { name: "Wireless Earbuds", price: 89.99, id: 9 },
  { name: "Phone Case", price: 29.99, id: 10 }
];

export default function RelatedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {relatedProducts.map((item, i) => (
        <a key={i} href={`/products/${item.id}`} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-40 rounded-xl overflow-hidden mb-4">
            <img 
              src={`https://picsum.photos/seed/related-${item.id}/300/300`}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/300x300/8b5cf6/ffffff?text=${encodeURIComponent(item.name)}`;
              }}
            />
          </div>
          <h3 className="font-bold text-lg mb-2">{item.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm text-gray-600">4.5</span>
          </div>
          <p className="text-purple-600 font-bold text-xl mt-2">${item.price}</p>
        </a>
      ))}
    </div>
  );
}
