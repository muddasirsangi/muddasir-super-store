import ProductDetailImages from "@/components/ProductDetailImages";
import RelatedProducts from "@/components/RelatedProducts";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  const product = {
    id: id,
    name: "Wireless Headphones",
    price: 79.99,
    originalPrice: 99.99,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    category: "Electronics",
    inStock: true,
    rating: 4.8,
    reviews: 256,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-gray-600">
            <a href="/" className="hover:text-purple-600">Home</a> / 
            <a href="/products" className="hover:text-purple-600"> Products</a> / 
            <span className="text-purple-600"> {product.name}</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <ProductDetailImages productId={id} productName={product.name} />

          {/* Product Details */}
          <div>
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-bold mb-4">
              {product.category}
            </span>
            
            <h1 className="text-5xl font-bold mb-4 text-gray-800">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-2xl font-bold text-gray-800">{product.rating}</span>
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-bold text-purple-600">${product.price}</span>
              <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-full font-bold">
                -20% OFF
              </span>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>
            
            {/* Stock Status */}
            <div className="mb-8">
              <span className={`px-6 py-3 rounded-xl font-bold text-lg ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? '✓ In Stock - Ready to Ship' : '✗ Out of Stock'}
              </span>
            </div>

            {/* Quantity Selector */}
            <QuantitySelector />

            {/* Action Buttons */}
            <AddToCartButton productName={product.name} />

            {/* Features */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-gray-800">Product Features</h3>
              <ul className="space-y-3">
                {[
                  "Premium quality materials",
                  "1-year warranty included",
                  "Free shipping on orders over $50",
                  "30-day return policy",
                  "24/7 customer support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            You May Also Like
          </h2>
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
}
