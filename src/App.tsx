import { useEffect } from 'react';
import './index.css';
import Home from './pages/Home';
import { generateSchemaMarkup, generateMetaTags, SEO_CONFIG } from './utils/seo';

function App() {
  useEffect(() => {
    // Add meta tags for SEO
    const homeMeta = generateMetaTags({
      title: 'Boutique de Sacs Authentiques à Dakar',
      description: 'Achetez les meilleurs sacs de créateurs authentiques (Louis Vuitton, Gucci, Balenciaga) à Dakar, Sénégal. Livraison rapide en Afrique de l\'Ouest.',
      keywords: 'sacs authentiques Dakar, Louis Vuitton Dakar, Gucci Sénégal, boutique en ligne Dakar',
      url: SEO_CONFIG.siteUrl
    });

    // Set page title
    document.title = homeMeta.title;

    // Update meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', homeMeta.description);

    // Update keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', homeMeta.keywords);

    // Add language meta
    let langMeta = document.querySelector('meta[name="language"]');
    if (!langMeta) {
      langMeta = document.createElement('meta');
      langMeta.setAttribute('name', 'language');
      langMeta.setAttribute('content', 'French');
      document.head.appendChild(langMeta);
    }

    // Add local business schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(generateSchemaMarkup('Organization'));
    document.head.appendChild(schemaScript);

    // Add geo targeting
    let geoMeta = document.querySelector('meta[name="geo.placename"]');
    if (!geoMeta) {
      geoMeta = document.createElement('meta');
      geoMeta.setAttribute('name', 'geo.placename');
      geoMeta.setAttribute('content', 'Dakar, Senegal');
      document.head.appendChild(geoMeta);
    }

    // Set HTML lang attribute
    document.documentElement.lang = 'fr';

    // Optimize for Core Web Vitals
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, continue without it
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Home />
    </div>
  );
}

export default App;
