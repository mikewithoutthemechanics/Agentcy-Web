import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Privacy() {
  return (
    <section className="min-h-screen py-32 px-6" style={{ background: '#0D1017', color: '#F5F5F3' }}>
      <div className="max-w-3xl mx-auto">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm mb-12 block transition-colors hover:text-[#3AAFA9]"
          style={{ color: 'rgba(245,245,243,0.4)' }}
        >
          ← Back to Agentcy
        </motion.a>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-12"
          style={{ color: '#F5F5F3' }}
        >
          Privacy<br />Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 leading-relaxed"
        >
          <p className="text-lg" style={{ color: 'rgba(245,245,243,0.4)' }}>Last updated: March 2026</p>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F3' }}>1. What We Collect</h2>
            <p style={{ color: 'rgba(245,245,243,0.5)' }}>We collect information you provide directly: name, email, company details, and project requirements through our contact form or direct communication.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F3' }}>2. How We Use It</h2>
            <p style={{ color: 'rgba(245,245,243,0.5)' }}>We use your information to respond to inquiries, deliver services, and improve our offerings. We do not sell or share your data with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F3' }}>3. Data Storage</h2>
            <p style={{ color: 'rgba(245,245,243,0.5)' }}>Your data is stored securely. We use industry-standard encryption and access controls. We retain data only as long as necessary to provide our services or as required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F3' }}>4. Third-Party Services</h2>
            <p style={{ color: 'rgba(245,245,243,0.5)' }}>We may use third-party tools (analytics, hosting, communication) that process data on our behalf. These providers are bound by their own privacy policies and our data processing agreements.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F3' }}>5. Your Rights</h2>
            <p style={{ color: 'rgba(245,245,243,0.5)' }}>You may request access to, correction of, or deletion of your personal data at any time. Contact us and we'll respond within 30 days.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F3' }}>6. Cookies</h2>
            <p style={{ color: 'rgba(245,245,243,0.5)' }}>This site may use essential cookies for functionality. We do not use tracking cookies for advertising.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F3' }}>7. Contact</h2>
            <p style={{ color: 'rgba(245,245,243,0.5)' }}>Privacy questions? Email us at <a href="mailto:michael@agentcy.co.za" className="underline" style={{ color: '#3AAFA9' }}>michael@agentcy.co.za</a>.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
