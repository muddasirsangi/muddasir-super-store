"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ 
  initialQuantity = 1, 
  min = 1, 
  max = 99 
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decrease = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="mb-8">
      <label className="block text-sm font-bold mb-3 text-gray-700">Quantity</label>
      <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-2 w-fit">
        <button 
          onClick={decrease}
          disabled={quantity <= min}
          className="w-12 h-12 bg-white rounded-lg font-bold text-purple-600 hover:bg-purple-600 hover:text-white transition shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -
        </button>
        <span className="font-bold text-xl w-12 text-center">{quantity}</span>
        <button 
          onClick={increase}
          disabled={quantity >= max}
          className="w-12 h-12 bg-white rounded-lg font-bold text-purple-600 hover:bg-purple-600 hover:text-white transition shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </div>
  );
}
