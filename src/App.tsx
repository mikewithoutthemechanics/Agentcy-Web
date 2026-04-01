import { useState, useCallback, useEffect } from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import NightworkShowcase from './components/NightworkShowcase';
import HorizontalShowcase from './components/HorizontalShowcase';
import Team from './components/Team';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Tickets from './components/Tickets';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Blog from './components/Blog';
import CaseStudies from './components/CaseStudies';
import Romy from './components/Romy';

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
      document.removeEventListener('click', clickHandler);
    };
  }, []);
  return path;
}

function Layout({ children }: { children: React.ReactNode }) {
  return <><div style={{ background: '#F5F5F3', color: '#0D1017' }}>{children}</div><Footer /></>;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);
  const path = usePath();

  // Sub-pages
  if (path === '/romy') return <Layout><Romy /></Layout>;
  if (path === '/terms') return <Layout><Terms /></Layout>;
  if (path === '/privacy') return <Layout><Privacy /></Layout>;
  if (path === '/blog') return <Layout><Blog /></Layout>;
  if (path === '/case-studies') return <Layout><CaseStudies /></Layout>;

  // Main landing
  return (
    <>
      {!loaded && <Loader onComplete={handleComplete} />}
      <main style={{ background: '#F5F5F3', color: '#0D1017', minHeight: '100vh' }}>
        <Hero />
        <About />
        <HorizontalShowcase />
        <Team />
        <Schedule />
        <Testimonials />
        <Tickets />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
