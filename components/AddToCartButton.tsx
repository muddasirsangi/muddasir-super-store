"use client";

import { useState } from "react";

interface AddToCartButtonProps {
  productName: string;
}

export default function AddToCartButton({ productName }: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="flex gap-4 mb-8">
      <button 
        onClick={handleAddToCart}
        className={`flex-1 ${isAdded ? 'bg-green-600' : 'bg-gradient-to-r from-purple-600 to-blue-600'} text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 shadow-lg`}
      >
        {isAdded ? '✓ Added to Cart!' : '🛒 Add to Cart'}
      </button>
      <button 
        onClick={handleWishlist}
        className={`px-6 py-4 border-2 ${isWishlisted ? 'border-red-500 bg-red-50' : 'border-purple-600'} ${isWishlisted ? 'text-red-500' : 'text-purple-600'} rounded-xl font-bold hover:bg-purple-50 transition`}
      >
        {isWishlisted ? '❤️' : '🤍'}
      </button>
    </div>
  );
}
