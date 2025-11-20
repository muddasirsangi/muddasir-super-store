"use client";

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-56 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center overflow-hidden">
          <img 
            src={`https://picsum.photos/seed/product-${product.id}/400/400`}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x400/8b5cf6/ffffff?text=${encodeURIComponent(product.name)}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            -20%
          </div>
          <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            HOT
          </div>
        </div>
      </Link>
      <div className="p-5">
        <p className="text-xs text-purple-600 font-semibold mb-2 uppercase tracking-wide">{product.category}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-600 transition line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-500">(128 reviews)</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-purple-600">${product.price}</span>
            <span className="text-sm text-gray-400 line-through ml-2">${(product.price * 1.25).toFixed(2)}</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-md">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}
