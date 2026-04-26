import React from 'react';

interface HeroProps {
  onShopClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section className="relative bg-cream overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/74/68/5d/74685daf19d268329257c3660d03a866.jpg"
          alt="Sacs de créateurs authentiques - Bousso Baly Bags"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 flex items-center min-h-[600px]">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">
            LUXE. STYLE.
            <br />
            <span className="text-yellow-300">AUTHENTICITÉ.</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-md">
            Sacs de créateurs authentiques pour femmes exigeantes.
            <br />
            <span className="text-sm">✓ 100% authentiques • Livraison rapide • Paiement sécurisé</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onShopClick}
              className="btn-primary bg-black hover:bg-gray-800 text-white text-center"
            >
              DÉCOUVRIR LA BOUTIQUE
            </button>
            
            <a
              href="https://wa.me/221772941818"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp bg-green-500 hover:bg-green-600 text-white text-center"
            >
              💬 Commander sur WhatsApp
            </a>
          </div>

          {/* Brands */}
          <div className="mt-12">
            <p className="text-sm text-gray-300 mb-4">NOS MARQUES PARTENAIRES</p>
            <div className="flex flex-wrap gap-6 items-center opacity-80">
              <img src="https://via.placeholder.com/80x40?text=GUCCI" alt="Gucci" className="h-6" />
              <img src="https://via.placeholder.com/80x40?text=LV" alt="Louis Vuitton" className="h-6" />
              <img src="https://via.placeholder.com/80x40?text=BALENCIAGA" alt="Balenciaga" className="h-6" />
              <img src="https://via.placeholder.com/80x40?text=YSL" alt="Yves Saint Laurent" className="h-6" />
              <img src="https://via.placeholder.com/80x40?text=PRADA" alt="Prada" className="h-6" />
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:flex md:w-1/2 justify-end items-center pr-0">
          <img
            src="https://i.pinimg.com/736x/94/64/64/9464640aa6adf348c9bc7c9545db53fe.jpg"
            alt="Sac Louis Vuitton - Collection Bousso Baly Bags Dakar"
            className="max-w-md object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
