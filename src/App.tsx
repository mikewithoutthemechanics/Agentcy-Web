import { useState, useCallback, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyAgentcy from './components/WhyAgentcy';
import Results from './components/Results';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

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
  return <><div style={{ background: '#F5F5F3', color: '#0D1017' }}>{children}</div><Footer /></>;
}

export default function App() {
  const path = usePath();

  // Sub-pages
  if (path === '/terms') return <Layout><Terms /></Layout>;
  if (path === '/privacy') return <Layout><Privacy /></Layout>;

  // Main landing
  return (
    <>
      <main style={{ background: '#F5F5F3', color: '#0D1017', minHeight: '100vh' }}>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyAgentcy />
        <Results />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
