import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Features from '../components/Features';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';
import productsData from '../data/products.json';

export const Home: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleAddToCart = (product: any) => {
    setCartCount(prev => prev + (product.quantity || 1));
    alert(`${product.name} ajouté au panier!`);
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} />
      
      <Hero onShopClick={() => handleScroll('products')} />
      
      <Categories
        categories={productsData.categories}
        onCategoryClick={(categoryId) => {
          console.log('Category selected:', categoryId);
          handleScroll('products');
        }}
      />
      
      <Products
        products={productsData.products.filter(p => p.featured)}
        title="NOS MEILLEURES VENTES"
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
      />
      
      <Features />
      
      <Products
        products={productsData.products}
        title="TOUS NOS PRODUITS"
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
      />
      
      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product) => {
            handleAddToCart(product);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default Home;
