"use client";

import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1, image: "/products/headphones.jpg" },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 2, image: "/products/watch.jpg" },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">🛒 Shopping Cart</h1>
          <p className="text-xl text-gray-100">{cartItems.length} items in your cart</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Your cart is empty</h2>
            <Link href="/products" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  <div className="flex items-center gap-6">
                    <div className="w-28 h-28 bg-gradient-to-br from-purple-200 to-blue-200 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={`https://picsum.photos/seed/cart-${item.id}/200/200`}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/200x200/6366f1/ffffff?text=${encodeURIComponent(item.name.substring(0, 10))}`;
                        }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-gray-800">{item.name}</h3>
                      <p className="text-purple-600 font-bold text-lg">${item.price}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                        className="w-10 h-10 bg-white rounded-lg font-bold text-purple-600 hover:bg-purple-600 hover:text-white transition shadow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-10 h-10 bg-white rounded-lg font-bold text-purple-600 hover:bg-purple-600 hover:text-white transition shadow"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-2xl text-purple-600 mb-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 font-semibold hover:text-red-700 hover:underline transition"
                      >
                        🗑️ Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎁</span>
                  <div>
                    <h3 className="font-bold text-lg">Add a coupon code</h3>
                    <p className="text-white/90">Save more on your purchase!</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    className="flex-1 px-4 py-3 rounded-xl text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-3xl shadow-2xl text-white sticky top-24">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <span>📋</span> Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-white/90">Subtotal</span>
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-white/90">Shipping</span>
                    <span className="font-bold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-white/90">Tax</span>
                    <span className="font-bold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t-2 border-white/30 pt-4 flex justify-between text-2xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout" 
                  className="block w-full bg-white text-purple-600 text-center px-6 py-4 rounded-xl font-bold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg mb-4"
                >
                  Proceed to Checkout 🚀
                </Link>

                <Link 
                  href="/products" 
                  className="block w-full bg-white/10 backdrop-blur-sm text-white text-center px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
                >
                  Continue Shopping
                </Link>

                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <p className="text-sm text-white/90 text-center">
                    🔒 Secure checkout powered by SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
