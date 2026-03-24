/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Tickets from './components/Tickets';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <Team />
      <Schedule />
      <Testimonials />
      <Tickets />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
