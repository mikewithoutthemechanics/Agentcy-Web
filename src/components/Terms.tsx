import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Terms() {
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
          Terms of<br />Service
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-gray-600 leading-relaxed"
        >
          <p className="text-lg text-gray-400">Last updated: March 2026</p>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">1. Overview</h2>
            <p>Agentcy ("we", "us", "our") provides custom software development, AI integration, and automation services. By engaging our services, you agree to these terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">2. Services</h2>
            <p>We build custom software, AI agents, integrations, and automated workflows as agreed in individual project statements of work. Each engagement is scoped and priced independently.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">3. Intellectual Property</h2>
            <p>Upon full payment, all custom code and deliverables become the client's property. We retain the right to reference completed work in our portfolio unless otherwise agreed.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">4. Payment</h2>
            <p>Payment terms are defined per project. Standard terms are 50% upfront, 50% on delivery — unless otherwise agreed in writing.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">5. Confidentiality</h2>
            <p>We treat all client data and business information as confidential. We do not share, sell, or expose client information to third parties.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">6. Limitation of Liability</h2>
            <p>Our liability is limited to the total value of the engagement. We are not liable for indirect, incidental, or consequential damages.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">7. Contact</h2>
            <p>Questions about these terms? Email us at <a href="mailto:michael@agentcy.co.za" className="text-black underline">michael@agentcy.co.za</a>.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
