import React, { useState, useCallback, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyAgentcy from './components/WhyAgentcy';
import Results from './components/Results';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Audit from './components/Audit';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import JsonLd from './components/JsonLd';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Agentcy",
  "url": "https://www.agentcy.co.za",
  "logo": "https://agentcy.co.za/og.png",
  "description": "Agentcy sends AI engineers into South African businesses to eliminate operational drag. We audit, architect, and automate workflows, AI integrations, and custom tools. Based in Ballito and Knysna.",
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://twitter.com/yourhandle",
    "https://www.linkedin.com/company/yourcompany"
  ]
};

function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handler);
    const clickHandler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a');
      if (a && a.href.startsWith(window.location.origin) && !a.href.includes('#')) {
        e.preventDefault();
        window.history.pushState({}, '', a.pathname);
        setPath(a.pathname);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('popstate', handler);
      window.removeEventListener('click', clickHandler);
    };
  }, []);
  return path;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JsonLd key="organization-schema" data={organizationSchema} />
    </>
  );
}

export default function App() {
  const path = usePath();

  // Sub-pages
  if (path === '/audit') return <Layout><Audit /></Layout>;
  if (path === '/terms') return <Layout><Terms /></Layout>;
  if (path === '/privacy') return <Layout><Privacy /></Layout>;

  // Main landing
  return (
    <>
      <main style={{ background: '#0D1017', color: '#F5F5F3', minHeight: '100vh' }}>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyAgentcy />
        <Results />
        <CaseStudies />
        <Team />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
