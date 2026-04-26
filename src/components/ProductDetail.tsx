import React, { useState } from 'react';
import { Heart, Share2, ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface ProductDetailProps {
  product?: {
    id: number;
    name: string;
    brand: string;
    price: number;
    currency: string;
    image: string;
    images?: string[];
    description: string;
    longDescription?: string;
    condition: string;
    featured?: boolean;
  };
  onClose?: () => void;
  onAddToCart?: (product: any) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('fr-SN', {
      style: 'currency',
      currency: currency === 'FCFA' ? 'XOF' : currency
    }).format(price);
  };

  const handleAddToCart = () => {
    onAddToCart?.({
      ...product,
      quantity
    });
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Image Section */}
            <div>
              <div className="relative overflow-hidden rounded-lg h-96 bg-gray-200 mb-4">
                <img
                  src={images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Vue ${index + 1}`}
                      className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition ${
                        selectedImageIndex === index ? 'border-black' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div>
              {product.featured && (
                <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  BESTSELLER
                </span>
              )}

              <p className="text-sm text-gray-500 font-semibold mb-1">{product.brand}</p>
              <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(250 avis)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-black">
                  {formatPrice(product.price, product.currency)}
                </p>
                <p className="text-sm text-green-600 font-semibold mt-1">✓ Stock disponible</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4">{product.longDescription || product.description}</p>

              {/* Condition */}
              <div className="bg-gray-100 p-3 rounded mb-6">
                <p className="text-sm"><span className="font-bold">État:</span> {product.condition}</p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-3 rounded hover:bg-gray-800 transition flex items-center justify-center gap-2 font-bold"
                >
                  <ShoppingCart size={20} />
                  Ajouter au panier
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex-1 border-2 border-black py-3 rounded hover:bg-black hover:text-white transition flex items-center justify-center gap-2 font-bold"
                >
                  <Heart size={20} className={isFavorite ? 'fill-red-500 text-red-500' : ''} />
                  {isFavorite ? 'Ajouté' : 'Favoris'}
                </button>

                <button className="flex-1 border-2 border-black py-3 rounded hover:bg-black hover:text-white transition flex items-center justify-center gap-2 font-bold">
                  <Share2 size={20} />
                  Partager
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/221772941818"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded mt-4 transition text-center font-bold"
              >
                💬 Acheter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
