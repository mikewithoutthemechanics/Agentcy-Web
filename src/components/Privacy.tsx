import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Privacy() {
  return (
    <section className="bg-white text-black min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-400 hover:text-black transition-colors mb-12 block"
        >
          ← Back to Agentcy
        </motion.a>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-12"
        >
          Privacy<br />Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-gray-600 leading-relaxed"
        >
          <p className="text-lg text-gray-400">Last updated: March 2026</p>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">1. What We Collect</h2>
            <p>We collect information you provide directly: name, email, company details, and project requirements through our contact form or direct communication.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">2. How We Use It</h2>
            <p>We use your information to respond to inquiries, deliver services, and improve our offerings. We do not sell or share your data with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">3. Data Storage</h2>
            <p>Your data is stored securely. We use industry-standard encryption and access controls. We retain data only as long as necessary to provide our services or as required by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">4. Third-Party Services</h2>
            <p>We may use third-party tools (analytics, hosting, communication) that process data on our behalf. These providers are bound by their own privacy policies and our data processing agreements.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">5. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time. Contact us and we'll respond within 30 days.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">6. Cookies</h2>
            <p>This site may use essential cookies for functionality. We do not use tracking cookies for advertising.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">7. Contact</h2>
            <p>Privacy questions? Email us at <a href="mailto:michael@agentcy.co.za" className="text-black underline">michael@agentcy.co.za</a>.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
