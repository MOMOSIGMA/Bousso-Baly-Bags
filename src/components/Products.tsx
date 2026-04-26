import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  featured?: boolean;
}

interface ProductsProps {
  products: Product[];
  title?: string;
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({
  products,
  title = 'NOS MEILLEURES VENTES',
  onAddToCart,
  onProductClick
}) => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('fr-SN', {
      style: 'currency',
      currency: currency === 'FCFA' ? 'XOF' : currency
    }).format(price);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-gray-200">
                <img
                  src={product.image}
                  alt={`${product.brand} - ${product.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onClick={() => onProductClick?.(product)}
                />

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart
                    size={18}
                    className={favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>

                {product.featured && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    BESTSELLER
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-gray-500 font-semibold mb-1">{product.brand}</p>
                
                <h3
                  className="text-sm font-bold text-black mb-2 hover:text-gray-600 cursor-pointer line-clamp-2"
                  onClick={() => onProductClick?.(product)}
                >
                  {product.name}
                </h3>

                <p className="text-xs text-gray-600 mb-3">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">
                    {formatPrice(product.price, product.currency)}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart?.(product)}
                  className="w-full mt-3 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <ShoppingCart size={16} />
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
