import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// SEO: update document title and meta description
if (typeof document !== 'undefined') {
  document.title = 'Agentcy — AI Engineers on Site | Ballito & Knysna | South Africa';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', 'Agentcy sends AI engineers into South African businesses to eliminate operational drag. We audit, architect, and automate workflows, AI integrations, and custom tools. Based in Ballito and Knysna.');
  }

  // Add canonical
  const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', 'https://agentcy.co.za');
  if (!canonical.parentNode) document.head.appendChild(canonical);

  // Add JSON-LD LocalBusiness schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Agentcy',
    description: 'AI engineers on-site anywhere in South Africa — workflow automation, AI integration, custom tools, and agentic solutions.',
    url: 'https://agentcy.co.za',
    email: 'michael@agentcy.co.za',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Ballito',
        addressRegion: 'KwaZulu-Natal',
        addressCountry: 'ZA'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Knysna',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA'
      }
    ],
    areaServed: 'South Africa',
    priceRange: 'R'
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
