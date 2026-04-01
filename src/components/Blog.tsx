import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
}

const posts: Post[] = [
  {
    slug: "your-next-customer-wont-visit-your-website",
    title: "Your Next Customer Won't Visit Your Website — An AI Agent Will",
    excerpt: "AI agents are starting to shop, compare, and shortlist businesses on behalf of users. If your business isn't machine-readable, you're invisible.",
    date: "29 March 2026",
    readTime: "5 min",
    tag: "AI & Automation",
    content: `Here's a shift most SMEs haven't clocked yet: the person searching for your service might not be a person at all.

AI agents — the kind built into ChatGPT, Perplexity, Apple Intelligence, and dozens of startups — are increasingly acting on behalf of users. "Find me a plumber in Sandton who can come today." "Compare three web developers for a restaurant site." "Book the cheapest flight to Cape Town next Friday."

The agent doesn't browse your website. It reads your data. It checks your structured markup, your Google Business profile, your reviews, your service descriptions — and it decides whether to recommend you. All before a human ever sees your name.

This means the rules have changed. Your website isn't just for humans anymore. It's a data source that AI agents query, interpret, and rank.

Three things that matter now more than ever:

1. Machine-readable services. If your site says "we offer innovative digital solutions," an AI agent has no idea what you actually do. "We build custom software for SMEs in South Africa" — now it knows.

2. Structured data everywhere. JSON-LD schema on every page. Service descriptions, pricing ranges, service areas, reviews, FAQs. Give the agent everything it needs to recommend you.

3. Reputation signals. AI agents weight reviews, mentions, and consistency heavily. If your Google reviews say one thing and your website says another, the agent flags it.

We're building for a world where your customer's first interaction with your business is an AI agent doing due diligence on your behalf. If the agent can't understand what you offer, how much it costs, and whether you're any good — it moves on to the next business on the list.

The companies that prepare for this now will capture demand that doesn't even exist yet. The ones that wait will wonder where their leads went.

Your website isn't a brochure anymore. It's a sales pitch to machines.`
  },
  {
    slug: "why-smes-are-ditching-spreadsheets-for-ai",
    title: "Why SMEs Are Ditching Spreadsheets for AI (And Never Going Back)",
    excerpt: "The spreadsheet was the SME's best friend for 30 years. Here's why growing businesses are replacing them with AI-powered tools — and what they're getting in return.",
    date: "28 March 2026",
    readTime: "5 min",
    tag: "SME & AI",
    content: `Every SME has the same story: a critical spreadsheet that runs the business. Customer lists in Excel. Stock tracking in Google Sheets. Invoices in a template someone made in 2019.

Spreadsheets are brilliant — until they aren't. The moment you have 500 rows, multiple users, or need real-time data, they start breaking. Formulas get overwritten. Versions diverge. Someone accidentally deletes a column.

AI doesn't just replace the spreadsheet. It replaces the thinking behind it.

Instead of manually tracking no-shows and calculating fill rates, an AI agent watches your bookings in real-time, predicts cancellations before they happen, and automatically offers slots to waitlisted customers.

Instead of manually reconciling stock levels, an AI system monitors everything, predicts what you'll need next week, and generates purchase orders automatically.

The shift isn't from spreadsheet to "better spreadsheet." It's from manual thinking to automated intelligence.

SMEs making this switch report saving 10-15 hours per week on admin alone. That's not a productivity tweak — that's getting an extra day back.

The best part? You don't need a data science team. Modern AI tools are built for business owners, not engineers. If you can use a spreadsheet, you can use AI.

The question isn't whether to make the switch. It's how long you can afford not to.`
  },
  {
    slug: "how-south-african-smes-are-using-ai-to-compete",
    title: "How South African SMEs Are Using AI to Compete With Big Business",
    excerpt: "You don't need a corporate budget to use AI. Here's how small businesses across South Africa are using AI tools to punch above their weight.",
    date: "27 March 2026",
    readTime: "6 min",
    tag: "SME & AI",
    content: `South African SMEs face a unique challenge: operating in a complex market with load shedding, currency volatility, and infrastructure gaps — while competing against well-resourced corporates.

AI is the equaliser.

A Cape Town restaurant chain with 4 locations uses AI to predict demand based on weather, events, and historical patterns. They order exactly what they need — no waste, no shortages. Their competitors with 50 locations have teams doing this manually.

A Johannesburg accounting firm automated their entire client onboarding with AI. Documents get extracted, categorised, and filed without human intervention. They handle 3x the clients with the same team.

A Durban logistics company uses AI to optimise delivery routes in real-time, accounting for traffic, load shedding schedules, and fuel costs. They deliver faster than national carriers at half the cost.

The pattern? SMEs aren't using AI to do what big businesses do. They're using it to do things big businesses can't — move fast, adapt quickly, and serve customers personally.

The cost barrier has collapsed. What used to require a R500k annual software licence now costs R2k/month in API calls and a custom-built agent.

South African SMEs that adopt AI now won't just survive — they'll dominate their niches.`
  },
  {
    slug: "ai-agents-vs-traditional-automation",
    title: "AI Agents vs Traditional Automation: What's Actually Different",
    excerpt: "Everyone's selling 'AI-powered' tools. Here's what actually separates an AI agent from a glorified if-statement — and when you need which.",
    date: "26 March 2026",
    readTime: "5 min",
    tag: "AI & Automation",
    content: `Traditional automation follows rules. If X happens, do Y. It's predictable, reliable, and limited to what you explicitly program.

AI agents are different. They interpret context, make decisions, and adapt to scenarios you never specifically planned for. A payroll agent doesn't just process timesheets — it flags anomalies, suggests corrections, and learns from patterns over time.

The real difference shows up at the edges. When your business has 90% standard workflows and 10% edge cases, traditional automation breaks on the 10%. AI agents handle both.

That said, not everything needs AI. If your workflow is truly linear and predictable, a simple automation is cheaper, faster, and more reliable. The skill is knowing which tool fits which problem.

At Agentcy, we build both. The magic is in choosing right.

Rule of thumb: if your team spends time making judgment calls, AI helps. If they're just following steps, traditional automation is enough.`
  },
  {
    slug: "custom-software-vs-saas",
    title: "When to Build Custom Software vs Buying SaaS",
    excerpt: "SaaS is great until you're duct-taping 12 tools together. Here's how to know when it's time to build your own.",
    date: "25 March 2026",
    readTime: "4 min",
    tag: "Software",
    content: `The SaaS trap: you sign up for one tool, then another to fill its gaps, then another to connect those two. Before you know it, you're paying for 8 subscriptions and your team still copies data between spreadsheets.

Custom software makes sense when:
- Your workflow is unique to your business
- You're spending more time managing tools than doing work
- You need data from multiple systems in one place
- Off-the-shelf solutions handle 70% but miss the critical 30%

SaaS makes sense when:
- The problem is standard (email, docs, accounting)
- You need it running today, not in 6 weeks
- The vendor actively maintains and improves it

The hybrid approach usually wins: buy the commodity layers, build the competitive advantage layers. Your booking system? SaaS. Your AI-powered demand forecasting that gives you an edge? Build that.`
  },
  {
    slug: "integration-architecture-patterns",
    title: "5 Integration Patterns That Actually Scale",
    excerpt: "Stop building point-to-point integrations that break every time something changes. Here are patterns that survive growth.",
    date: "24 March 2026",
    readTime: "6 min",
    tag: "Integrations",
    content: `After building hundreds of integrations, we've learned which patterns hold up under pressure.

1. Event-Driven Architecture — Systems publish events instead of calling each other directly. When a booking is made, it publishes an event. Your CRM, notifications, and analytics all subscribe independently.

2. API Gateway Pattern — One entry point for all external APIs. Rate limiting, authentication, logging, and error handling live in one place.

3. Message Queue Pattern — For high-volume data flows. Don't process 10,000 updates synchronously. Queue them, process them in order, retry failures automatically.

4. Webhook Relay — Receive webhooks from one system, transform the payload, forward to another. Simple but powerful for connecting SaaS tools.

5. Data Sync Pattern — Periodic full sync for accuracy, real-time webhooks for speed. Combine both for systems that need to be eventually consistent.

The pattern you choose depends on your volume, latency requirements, and how many systems need to stay in sync. Start simple, evolve as needed.`
  },
  {
    slug: "the-real-cost-of-not-automating",
    title: "The Real Cost of Not Automating Your Business",
    excerpt: "Every hour your team spends on manual work has a price tag. Here's how to calculate it — and why the number is bigger than you think.",
    date: "23 March 2026",
    readTime: "4 min",
    tag: "Automation",
    content: `Most SMEs know they should automate but can't justify the investment. Here's the math they're missing.

Take a simple example: invoice processing. Your finance person spends 2 hours a day matching invoices to POs, entering data, and chasing approvals. That's 10 hours a week. At R300/hour fully loaded cost, that's R12,000/month — R144,000/year — on a task a bot can do in seconds.

Now multiply that across every manual process: stock counts, report generation, customer follow-ups, data entry between systems.

Most SMEs we audit find 20-40 hours per week of automatable work. At average SA salary rates, that's R300k-R600k per year in hidden costs.

The automation itself might cost R50k-R150k to build. The ROI pays for itself in 2-6 months.

The real cost of not automating isn't the salary you're paying. It's the growth you're not achieving because your team is buried in busywork.`
  },
  {
    slug: "how-ai-search-engines-find-your-business",
    title: "How AI Search Engines Find (and Recommend) Your Business",
    excerpt: "ChatGPT, Perplexity, and Google AI Overviews are changing how customers discover businesses. Here's how to show up.",
    date: "22 March 2026",
    readTime: "5 min",
    tag: "SEO & AI",
    content: `AI search is different from Google search. Traditional SEO optimises for keywords and backlinks. AI search optimises for answers.

When someone asks ChatGPT "who builds custom AI software in South Africa," it doesn't return 10 blue links. It recommends 2-3 businesses based on what it's been trained on and what it can find.

Here's how to get recommended:

1. Write clear, factual content about what you do. AI models cite content that directly answers questions. "We build custom software for SMEs" beats "innovative solutions for the digital age."

2. Get mentioned on authoritative sites. AI models weigh sources. Being listed on industry directories, mentioned in news articles, or referenced in blog posts builds your authority.

3. Use structured data (schema.org). JSON-LD markup tells AI exactly what your business does, where it's located, and what services it offers.

4. Create FAQ content. AI models love structured Q&A content. Add an FAQ section that directly answers common customer questions.

5. Keep content fresh. AI models prefer recent, updated content over stale pages from 2022.

The businesses that optimise for AI search now will have a massive advantage as these tools become the default way people find services.`
  },
  {
    slug: "json-ld-structured-data-for-smes",
    title: "Structured Data: The SEO Secret Most SMEs Miss",
    excerpt: "Adding JSON-LD schema to your website is free, takes 10 minutes, and can dramatically improve how search engines and AI tools understand your business.",
    date: "21 March 2026",
    readTime: "4 min",
    tag: "SEO & AI",
    content: `Structured data is invisible code on your website that tells search engines and AI exactly what your business is. Think of it as a label that says "this is a software company in Cape Town that offers AI integration services."

Without it, search engines guess. With it, they know.

The most important schema types for SMEs:

- Organization — Your business name, logo, contact info, social profiles
- Service — What you offer, pricing, service area
- FAQPage — Your FAQs in a format search engines can display directly
- Article — For blog posts, with author, date, and topic
- LocalBusiness — Physical location, hours, reviews

Adding JSON-LD is simple. It's a script tag in your HTML head with a JSON object describing your business. No coding skills required — Google's Structured Data Markup Helper generates it for you.

The payoff? Rich snippets in search results, inclusion in AI training data, and better visibility in voice search and AI assistants.

It's free, it's fast, and most of your competitors haven't done it. That's the opportunity.`
  },
  {
    slug: "building-for-scale-start-small",
    title: "Why the Best Software Starts Small",
    excerpt: "Every enterprise system started as a simple tool that solved one problem well. Here's why SMEs should build the same way.",
    date: "20 March 2026",
    readTime: "5 min",
    tag: "Software",
    content: `The biggest mistake SMEs make with custom software? Trying to build everything at once.

"We need a CRM, an inventory system, a booking platform, an invoicing tool, and an analytics dashboard. Can you build it all?"

No. And you shouldn't want us to.

The best software starts with one painful problem and solves it completely. WaitUp didn't start as a full booking management platform. It started as a simple tool that filled empty yoga class slots. Once that worked, we added features.

This approach works because:

1. You learn what you actually need. The features you think you need on day one are different from what you need on day 30.

2. You get value faster. A working solution in 4 weeks beats a perfect solution in 6 months.

3. You reduce risk. Small builds mean small investments. If the direction changes, you haven't wasted 6 months.

4. Your team adopts it faster. One new tool is easy to learn. Five new tools overwhelm everyone.

Start with the pain. Solve it. Measure the result. Then decide what to build next.

That's how every successful software product was built — including the ones made by billion-dollar companies.`
  },
  {
    slug: "ai-for-customer-support-smes",
    title: "AI Customer Support That Actually Helps (Not Annoys)",
    excerpt: "Most chatbots frustrate customers. Here's how to build AI support that your customers actually appreciate.",
    date: "19 March 2026",
    readTime: "5 min",
    tag: "SME & AI",
    content: `Everyone hates bad chatbots. The ones that loop you through the same 3 options. The ones that can't understand "I want a refund." The ones that make you type AGENT six times to reach a human.

Here's the thing: that's not an AI problem. That's a design problem.

Good AI support does three things:

1. Knows when to stop. The best AI support agents know their limits. When they can't help, they escalate to a human immediately — with full context so the customer doesn't repeat themselves.

2. Has access to real data. An AI that can look up your order status, check your account balance, and process a return is 10x more useful than one that just answers FAQs from a document.

3. Sounds like a person, not a script. Natural language understanding means the AI handles typos, slang, and frustrated customers without losing the thread.

For SMEs, the sweet spot is AI-assisted support — not fully automated. The AI handles 70% of queries (order status, booking changes, FAQ answers) and hands off the complex stuff to your team.

Your team becomes 3x more productive without customers feeling like they're talking to a wall.

The cost? A custom support agent built for your business costs less than hiring one additional support person. And it works 24/7.`
  },
  {
    slug: "data-driven-decisions-for-small-business",
    title: "You Don't Need Big Data — You Need the Right Data",
    excerpt: "SMEs think data-driven decisions require expensive analytics platforms. Here's what you actually need to start making smarter calls today.",
    date: "18 March 2026",
    readTime: "4 min",
    tag: "SME & AI",
    content: `Big data is a big business term. SMEs hear "data-driven" and think they need a data warehouse, a team of analysts, and a R500k BI platform.

You don't.

What you need is the right data, in the right place, at the right time.

For most SMEs, 5-10 key metrics will drive 80% of better decisions:

- Revenue by product/service (what's actually making money)
- Customer acquisition cost (how much you spend to get a customer)
- Customer lifetime value (how much a customer is worth over time)
- Churn rate (how many customers you're losing)
- Operational bottleneck (where work gets stuck)

These numbers already exist in your tools — your POS, your CRM, your accounting software. The problem isn't collecting data. It's connecting it.

An integration layer that pulls these numbers into one dashboard — updated daily — gives you more insight than most enterprise analytics platforms.

Add AI on top, and it starts telling you things: "Your Tuesday afternoon slots are underperforming — consider a promotion." "Customer X hasn't booked in 3 weeks — they might be churning." "Your R50 service is more profitable than your R200 service when you factor in time."

That's not big data. That's smart data. And it's available to every SME right now.`
  },
  {
    slug: "whatsapp-business-automation-south-africa",
    title: "Why WhatsApp Is the Best Automation Channel for SA Businesses",
    excerpt: "South Africa runs on WhatsApp. Here's how to automate your business processes through the app your customers already use.",
    date: "17 March 2026",
    readTime: "5 min",
    tag: "Automation",
    content: `97% of South African smartphone users have WhatsApp. Not email. Not an app. Not a web portal. WhatsApp.

If you're sending booking confirmations by email, 40% never get opened. If you're sending them by WhatsApp, 98% get read within 3 minutes.

WhatsApp Business API (through the WhatsApp Business Platform) lets you automate:

- Appointment confirmations and reminders
- Order updates and delivery notifications
- Customer support conversations
- Payment confirmations
- Waitlist notifications
- Feedback collection

The key is building a bot that feels like a conversation, not a phone tree. WhatsApp users expect quick, natural responses — not numbered menus.

At Agentcy, we build WhatsApp automations that handle the entire customer journey: from first inquiry to booking to follow-up. The customer never leaves the app.

For SA businesses, this isn't a nice-to-have. WhatsApp is where your customers live. Meet them there.

Setup cost? A Meta Business account (free) + the WhatsApp Business API (pay per conversation) + a custom automation layer. Total monthly cost for most SMEs: under R2,000.

That's less than you spend on coffee for the office.`
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  if (selectedPost) {
    return (
      <section className="bg-white text-black min-h-screen py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-sm text-gray-400 hover:text-black transition-colors mb-12 block"
          >
            ← Back to blog
          </button>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <meta itemProp="datePublished" content={selectedPost.date} />
            <meta itemProp="author" content="Agentcy" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{selectedPost.tag}</span>
            <h1 itemProp="headline" className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mt-4 mb-6">{selectedPost.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-12">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedPost.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedPost.readTime}</span>
            </div>
            <div itemProp="articleBody" className="prose prose-lg max-w-none">
              {selectedPost.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-6">{para}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <a href="#contact" className="flex items-center gap-2 text-lg font-semibold hover:text-gray-500 transition-colors">
                Want to talk about this? <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.article>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white text-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9]"
          >
            Thinking
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl text-gray-500 max-w-sm mt-6 md:mt-0 leading-relaxed"
          >
            What we've learned building software and AI for real businesses.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 md:p-8 flex flex-col min-h-[280px] md:min-h-[320px] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{post.tag}</span>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight mb-4">{post.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-auto">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mt-6 pt-6 border-t border-gray-200">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { posts };
