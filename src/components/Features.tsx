import React from 'react';
import { CheckCircle, Truck, Shield, Headphones } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: '100% AUTHENTIQUES',
      description: 'Tous nos sacs sont vérifiés et certifiés authentiques'
    },
    {
      icon: Truck,
      title: 'LIVRAISON RAPIDE',
      description: 'Livraison partout en Afrique de l\'Ouest en 24h-72h'
    },
    {
      icon: Shield,
      title: 'PAIEMENT SÉCURISÉ',
      description: 'Paiement sécurisé et protection d\'acheteur garantie'
    },
    {
      icon: Headphones,
      title: 'SERVICE CLIENT',
      description: 'Support client disponible via WhatsApp 24/7'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
