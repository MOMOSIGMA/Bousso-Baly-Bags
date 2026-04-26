import React, { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'ACCUEIL', href: '#' },
    { label: 'BOUTIQUE', href: '#shop' },
    { label: 'NOUVEAUTÉS', href: '#new' },
    { label: 'MARQUES', href: '#brands' },
    { label: 'À PROPOS', href: '#about' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <div className="flex justify-around items-center max-w-7xl mx-auto flex-wrap gap-2">
          <span>📦 Livraison rapide partout</span>
          <span>✓ Produits 100% authentiques</span>
          <span>🔒 Paiement sécurisé</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
             <img 
  src="/logo_bousso.png" 
  alt="Logo Bousso Baly Bags" 
  className="w-10 h-10 rounded" 
/>
              <div>
                <h1 className="font-serif text-xl font-bold text-black">BOUSSO BALY</h1>
                <p className="text-xs text-gray-600">AUTHENTIQUES. ÉLÉGANCE. CONFIANCE</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-black hover:text-gray-600 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Search size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <User size={20} />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="absolute right-4 top-4">
            <a
              href="https://wa.me/221772941818"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp fixed right-6 bottom-6 rounded-full shadow-lg"
              title="Contactez-nous sur WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.325 0-2.651-.402-3.798-1.162l-.273-.16-.283.095C6.884 6.485 6.663 11.918 8.889 14.141c1.148 1.147 2.475 1.541 3.798 1.541h.004c1.322 0 2.646-.395 3.794-1.139l.273-.16.282.095c.331.254.661.514 1.002.751-1.148 1.147-2.474 1.541-3.795 1.541z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-black hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
