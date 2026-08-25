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
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Agentcy',
    description: 'AI engineers on-site anywhere in South Africa — workflow automation, AI integration, custom tools, and agentic solutions.',
    url: 'https://agentcy.co.za',
    telephone: '+27837915428',
    email: 'ai@agentcy.co.za',
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
    priceRange: 'R',
    logo: 'https://agentcy.co.za/og.svg'
  };

  // FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Where in South Africa do you work?', acceptedAnswer: { '@type': 'Answer', text: 'We\'re based in Ballito and Knysna, but we travel to clients anywhere in South Africa. We also run fully remote engagements for businesses that don\'t need on-site presence.' } },
      { '@type': 'Question', name: 'What industries do you work with?', acceptedAnswer: { '@type': 'Answer', text: 'We work across retail, logistics, property management, professional services, and manufacturing. If your business has processes, people, and tools — we can help.' } },
      { '@type': 'Question', name: 'How long does a typical engagement take?', acceptedAnswer: { '@type': 'Answer', text: 'The Starter Audit takes 2–3 weeks. A full automation engagement typically runs 6–12 weeks from first meeting to go-live, depending on scope.' } },
      { '@type': 'Question', name: 'Do we need technical expertise in-house?', acceptedAnswer: { '@type': 'Answer', text: 'No. We design for your team, not for engineers. We handle the build, integration, and training — your team just uses what we create.' } },
      { '@type': 'Question', name: 'Is WhatsApp really that important for SA businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Over 90% of South African internet users are on WhatsApp, and most small-to-medium businesses live in it. We set up WhatsApp CRM, automated replies, and lead capture so nothing slips through.' } }
    ]
  };

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Integration',
    provider: { '@type': 'Organization', name: 'Agentcy' },
    areaServed: 'South Africa'
  };

  [localSchema, faqSchema, serviceSchema].forEach(s => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(s);
    document.head.appendChild(el);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

