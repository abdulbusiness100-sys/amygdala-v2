import { CheckCircle2, Sparkles, X, Radar, Handshake, Server, ArrowRight, Globe, Palette, Share2, ShoppingBag, Target, Mail, Users, Headphones, Settings, Building, BrainCircuit, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";

export default function Services() {
  const serviceLayers = [
    {
      title: "TOP OF FUNNEL",
      subtitle: "Visibility & Acquisition",
      tagline: "Where your market discovers you",
      icon: Radar,
      color: "from-gold to-gold-dark",
      services: [
        { name: "Website Design & Development", icon: Globe, result: "Average 47% increase in time-on-site" },
        { name: "Brand Identity & Strategy", icon: Palette, result: "Brands we build command 23% higher prices" },
        { name: "Social Media Automation", icon: Share2, result: "3x engagement with 70% less time" },
        { name: "E-commerce Optimization", icon: ShoppingBag, result: "Average 34% revenue increase in 90 days" },
        { name: "Lead Generation Systems", icon: Target, result: "2.3x more qualified leads per dollar" },
        { name: "Paid & Organic Acquisition", icon: Rocket, result: "Average 4.2x ROAS across clients" },
      ]
    },
    {
      title: "MIDDLE FUNNEL",
      subtitle: "Conversion & Sales",
      tagline: "Where interest becomes revenue",
      icon: Handshake,
      color: "from-gold-dark to-gold",
      services: [
        { name: "Lead Nurturing & Email Automation", icon: Mail, result: "67% of closed deals touch 5+ automated emails" },
        { name: "Full Sales Cycle Management", icon: Users, result: "Average 2.1x close rate improvement" },
        { name: "Customer Success & Retention", icon: Headphones, result: "38% increase in customer lifetime value" },
        { name: "Sales Process Automation", icon: Settings, result: "Sales teams save 12 hours/week" },
      ]
    },
    {
      title: "BACK END",
      subtitle: "Infrastructure & Scale",
      tagline: "Where businesses become empires",
      icon: Server,
      color: "from-gold to-gold-dark",
      services: [
        { name: "Full Application Development", icon: Globe, result: "From concept to MVP in 8-12 weeks" },
        { name: "Custom CRM Development", icon: Building, result: "CRMs built for exactly how you sell" },
        { name: "AI Integration & Automation", icon: BrainCircuit, result: "40% reduction in manual workload" },
        { name: "Go-To-Market Strategy", icon: Rocket, result: "GTM plans that actually execute" },
        { name: "Enterprise Operations", icon: Building, result: "Scale without the growing pains" },
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'STRAND',
      tagline: 'For businesses ready to build foundations',
      price: '$3,000 - $5,000',
      period: '/month',
      features: ['Single-layer focus (Top, Middle, or Back)', 'Weekly strategy calls', 'Implementation guidance', 'Performance dashboards', 'Email support'],
      cta: 'Book Discovery Call',
      popular: false,
    },
    {
      name: 'WEB',
      tagline: 'For businesses ready to integrate',
      price: '$7,500 - $15,000',
      period: '/month',
      features: ['Multi-layer integration', 'Bi-weekly strategy calls', 'Hands-on implementation', 'Dedicated account manager', 'Custom automations', 'Priority support'],
      cta: 'Book Discovery Call',
      popular: true,
    },
    {
      name: 'NETWORK',
      tagline: 'For businesses ready to dominate',
      price: '$20,000+',
      period: '/month',
      features: ['Full-stack deployment', 'Weekly executive sessions', 'Complete done-for-you', 'Team deployment', 'AI integration', '24/7 priority support', 'Revenue share options'],
      cta: 'Book Executive Call',
      popular: false,
    },
  ];

  const faqs = [
    { q: 'How long before I see results?', a: 'Most clients see measurable improvements within the first 4-6 weeks. Full system implementation typically takes 8-12 weeks, with optimization continuing thereafter.' },
    { q: 'What industries do you work with?', a: 'We specialize in B2B services, agencies, consultancies, SaaS, and high-ticket B2C. If your business relies on lead generation and sales processes, we can help.' },
    { q: "Do I need technical skills?", a: 'No. We handle all the technical implementation. For the Strand tier, we provide training and guidance anyone can follow.' },
    { q: "What's the minimum commitment?", a: 'We recommend a minimum of 3 months to see full results, but we offer flexible arrangements based on your needs and goals.' },
    { q: "Can I start with one layer and expand?", a: 'Absolutely. Many clients start with a single focus area and expand as they see results. Our system is designed to grow with you.' },
  ];


  return (
    <div className="overflow-hidden relative min-h-screen grain">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-px h-12 bg-gold mx-auto mb-8"></div>
            <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">OUR SERVICES</p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6">
              Full-Stack Growth.<br />
              <span className="text-gradient">Every Layer Covered.</span>
            </h1>
            <p className="text-xl text-charcoal-medium max-w-2xl mx-auto">
              From your first website visitor to your hundredth enterprise client.<br />
              One unified system. One partner. Zero gaps.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Layers */}
      <section className="py-24 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceLayers.map((layer, li) => (
            <div key={li} className="mb-24 last:mb-0">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                    <layer.icon className="w-7 h-7 text-charcoal" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-charcoal">{layer.title}</h2>
                    <p className="font-accent text-sm text-charcoal-medium">{layer.subtitle} — {layer.tagline}</p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {layer.services.map((service, si) => (
                  <ScrollReveal key={si} delay={si * 0.5}>
                    <div className="glass p-6 rounded-2xl h-full card-3d">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 text-gold" />
                        </div>
                        <h3 className="font-display text-lg text-charcoal">{service.name}</h3>
                      </div>
                      <div className="bg-gold/5 px-3 py-2 rounded-lg">
                        <p className="font-accent text-xs text-gold">{service.result}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">ENGAGEMENT MODELS</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">How We Work Together</h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={i} delay={i * 1}>
                <div className={`relative h-full rounded-3xl p-8 transition-all duration-300 flex flex-col card-3d
                  ${tier.popular 
                    ? 'glass border-2 border-gold shadow-xl' 
                    : 'glass'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-charcoal px-4 py-1 rounded-full text-xs font-accent font-bold flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-3 h-3" /> MOST POPULAR
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="font-display text-3xl text-charcoal mb-2">{tier.name}</h3>
                    <p className="text-sm text-charcoal-medium">{tier.tagline}</p>
                  </div>

                  <div className="mb-8">
                    <span className="font-display text-2xl text-charcoal">{tier.price}</span>
                    <span className="text-charcoal-medium text-sm">{tier.period}</span>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" />
                        <span className="text-charcoal-medium text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full py-6 text-lg font-accent ${tier.popular ? 'gold-gradient text-charcoal border-0' : ''}`}
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="audit" className="py-24 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
               <div className="w-px h-8 bg-gold mb-6"></div>
               <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
                 Get Your Free <span className="text-gradient">Growth Audit</span>
               </h2>
               <p className="text-charcoal-medium text-lg mb-8">
                 Tell us about your business and we'll identify the biggest opportunities to unify your growth stack. No obligation.
               </p>
               <ul className="space-y-4 mb-8">
                 {['Identify leaks in your funnel', 'Discover quick wins', 'Custom integration roadmap'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-charcoal">
                     <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                       <CheckCircle2 className="w-4 h-4 text-gold" />
                     </div>
                     {item}
                   </li>
                 ))}
               </ul>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <LeadForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section id="book-call" className="py-24 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">SCHEDULE A CALL</p>
            <h2 className="font-display text-4xl text-charcoal mb-6">Book Your Strategy Call</h2>
            <p className="text-charcoal-medium mb-12">Select a time that works for you. 30 minutes. Pure value.</p>
          </ScrollReveal>
          <div className="glass rounded-2xl overflow-hidden p-4">
             <iframe 
               src="https://calendly.com/spidxr253/30min?hide_gdpr_banner=1&background_color=fafaf8&text_color=1a1a1a&primary_color=c4a052"
               width="100%"
               height="700"
               frameBorder="0"
               title="Schedule a call"
               className="rounded-xl"
             />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl text-charcoal">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}

function renderCheck(val: boolean | string) {
  if (val === true) return <CheckCircle2 className="w-5 h-5 text-gold" />;
  if (val === false) return <X className="w-5 h-5 text-charcoal-medium" />;
  return val;
}
