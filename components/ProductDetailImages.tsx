"use client";

interface ProductDetailImagesProps {
  productId: string;
  productName: string;
}

export default function ProductDetailImages({ productId, productName }: ProductDetailImagesProps) {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl h-[500px] overflow-hidden shadow-2xl">
        <img 
          src={`https://picsum.photos/seed/product-${productId}/600/600`}
          alt={productName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/600x600/6366f1/ffffff?text=${encodeURIComponent(productName)}`;
          }}
        />
      </div>
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl h-24 overflow-hidden cursor-pointer hover:ring-4 ring-purple-500 transition">
            <img 
              src={`https://picsum.photos/seed/product-${productId}-view${i}/200/200`}
              alt={`${productName} view ${i}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/200x200/8b5cf6/ffffff?text=View+${i}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
