// SEO Utilities for Bousso Baly Bags
// Optimized for local SEO in Senegal

export const SEO_CONFIG = {
  siteName: 'Bousso Baly Bags',
  siteUrl: 'https://boussosabalybags.sn',
  description: 'Boutique de sacs de créateurs authentiques à Dakar, Sénégal. Louis Vuitton, Gucci, Balenciaga. Livraison rapide en Afrique de l\'Ouest.',
  locale: 'fr_SN',
  localBusiness: {
    name: 'Bousso Baly Bags',
    type: 'ECommerceStore',
    address: {
      streetAddress: 'Dakar',
      addressLocality: 'Dakar',
      addressRegion: 'Dakar',
      postalCode: '00221',
      addressCountry: 'SN'
    },
    telephone: '+221 77 XXX XXXX',
    email: 'info@boussosabalybags.sn',
    url: 'https://boussosabalybags.sn',
    image: 'https://boussosabalybags.sn/logo.png',
    priceRange: '$$$$',
    sameAs: [
      'https://www.instagram.com/boussosabalybags',
      'https://www.facebook.com/boussosabalybags',
      'https://www.tiktok.com/@boussosabalybags'
    ]
  }
};

// Generate meta tags for pages
export const generateMetaTags = (page: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}) => {
  return {
    title: `${page.title} | Bousso Baly Bags - Sacs Authentiques à Dakar`,
    description: page.description,
    keywords: `${page.keywords || ''}, sacs authentiques Dakar, sacs créateur Sénégal, boutique sacs Dakar, Louis Vuitton Dakar, Gucci Dakar`,
    og: {
      title: page.title,
      description: page.description,
      image: page.image || 'https://boussosabalybags.sn/og-image.jpg',
      url: page.url || SEO_CONFIG.siteUrl,
      type: page.type || 'website',
      locale: SEO_CONFIG.locale
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      image: page.image || 'https://boussosabalybags.sn/og-image.jpg'
    }
  };
};

// Schema JSON-LD for structured data
export const generateSchemaMarkup = (type: 'Organization' | 'Product' | 'LocalBusiness' | 'BreadcrumbList', data?: any) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseSchema,
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        logo: 'https://boussosabalybags.sn/logo.png',
        description: SEO_CONFIG.description,
        address: {
          '@type': 'PostalAddress',
          ...SEO_CONFIG.localBusiness.address
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: SEO_CONFIG.localBusiness.telephone,
          email: SEO_CONFIG.localBusiness.email,
          availableLanguage: 'fr'
        },
        sameAs: SEO_CONFIG.localBusiness.sameAs
      };

    case 'LocalBusiness':
      return {
        ...baseSchema,
        ...SEO_CONFIG.localBusiness,
        address: {
          '@type': 'PostalAddress',
          ...SEO_CONFIG.localBusiness.address
        }
      };

    case 'Product':
      return {
        ...baseSchema,
        name: data?.name,
        description: data?.description,
        image: data?.image,
        brand: {
          '@type': 'Brand',
          name: data?.brand
        },
        offers: {
          '@type': 'Offer',
          price: data?.price,
          priceCurrency: data?.currency || 'XOF',
          availability: 'https://schema.org/InStock',
          url: data?.url
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 4.8,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 250
        }
      };

    case 'BreadcrumbList':
      return {
        ...baseSchema,
        itemListElement: data || []
      };

    default:
      return baseSchema;
  }
};

// Generate breadcrumb schema
export const generateBreadcrumbs = (items: Array<{ name: string; url: string }>) => {
  return generateSchemaMarkup('BreadcrumbList', items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  })));
};

// Sitemap generator (for SEO)
export const generateSitemap = () => {
  const baseUrl = SEO_CONFIG.siteUrl;
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/shop', changefreq: 'daily', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};

// Robots.txt generator
export const generateRobots = () => {
  return `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/

Sitemap: ${SEO_CONFIG.siteUrl}/sitemap.xml

User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0`;
};

// SEO-friendly slug generator
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

// Get canonical URL
export const getCanonicalUrl = (path: string): string => {
  return `${SEO_CONFIG.siteUrl}${path}`;
};

// Keywords for Senegal SEO
export const SENEGAL_SEO_KEYWORDS = {
  locations: ['Dakar', 'Sénégal', 'Afrique de l\'Ouest', 'WAEMU'],
  services: ['sacs authentiques', 'vente en ligne', 'livraison rapide', 'paiement sécurisé'],
  brands: ['Louis Vuitton', 'Gucci', 'Balenciaga', 'Yves Saint Laurent', 'Prada'],
  languages: ['français', 'anglais']
};
