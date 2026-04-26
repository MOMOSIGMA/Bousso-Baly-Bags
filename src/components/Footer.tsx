import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Merci de vous être inscrit! Vérifiez votre email.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-900 py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">NEWSLETTER</h3>
            <p className="text-gray-300">Recevez les offres exclusives et les nouveautés</p>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded bg-white text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold flex items-center gap-2 transition"
            >
              <Send size={18} />
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">BOUSSO BALY BAGS</h4>
            <p className="text-gray-400 text-sm mb-4">
              Votre boutique en ligne de sacs de créateurs authentiques à Dakar, Sénégal.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
                f
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
                📷
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
                🎵
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">À PROPOS DE NOUS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Nos engagements</a></li>
              <li><a href="#" className="hover:text-white transition">Authenticité</a></li>
              <li><a href="#" className="hover:text-white transition">Livraison & retours</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">SERVICE CLIENT</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+221772941818" className="hover:text-white transition">+221 77 294 18 18</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@boussosabalybags.sn" className="hover:text-white transition">info@boussosabalybags.sn</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">NOUS CONTACTER</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/221772941818"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-center text-sm font-bold transition"
              >
                💬 Discuter sur WhatsApp
              </a>
              <a
                href="mailto:info@boussosabalybags.sn"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center text-sm font-bold transition"
              >
                ✉️ Envoyer un email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>&copy; 2024 Bousso Baly Bags - Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition">Conditions d'utilisation</a>
              <a href="#" className="hover:text-white transition">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
