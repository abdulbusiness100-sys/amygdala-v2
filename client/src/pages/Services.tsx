import { CheckCircle2, Sparkles, Radar, Handshake, Server, Globe, Palette, Share2, ShoppingBag, Target, Mail, Users, Headphones, Settings, Building, BrainCircuit, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceLayers.map((layer, li) => (
            <ScrollReveal key={li}>
              <div className="border-2 border-charcoal rounded-3xl p-8 bg-gradient-to-br from-white to-cream/80" data-testid={`section-service-layer-${li}`}>
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-charcoal/10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                    <layer.icon className="w-7 h-7 text-charcoal" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-charcoal">{layer.title}</h2>
                    <p className="font-accent text-sm text-charcoal-medium">{layer.subtitle} | {layer.tagline}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {layer.services.map((service, si) => (
                    <div 
                      key={si} 
                      className="border border-charcoal/20 bg-gradient-to-b from-white to-cream/50 p-5 rounded-xl h-full hover:border-charcoal/40 transition-colors"
                      data-testid={`card-service-${li}-${si}`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-4 h-4 text-gold" />
                        </div>
                        <h3 className="font-display text-base text-charcoal leading-tight">{service.name}</h3>
                      </div>
                      <div className="bg-gold/5 px-3 py-2 rounded-lg border border-gold/10">
                        <p className="font-accent text-xs text-gold">{service.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Service Tiers - Cylinders Side by Side */}
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
              <ScrollReveal key={i} delay={i * 0.2}>
                <div 
                  className={`relative h-full flex flex-col items-center transition-all duration-300 group`}
                  data-testid={`cylinder-tier-${i}`}
                >
                  {/* Cylinder Top */}
                  <div className={`w-full h-8 rounded-t-full border-2 border-charcoal ${tier.popular ? 'bg-gradient-to-r from-gold to-gold-dark' : 'bg-gradient-to-b from-cream to-white'}`}></div>
                  
                  {/* Cylinder Body */}
                  <div className={`w-full flex-1 border-l-2 border-r-2 border-charcoal p-8 bg-gradient-to-b from-white to-cream/80 ${tier.popular ? 'border-gold' : ''}`}>
                    {tier.popular && (
                      <div className="text-center mb-4">
                        <span className="inline-flex items-center gap-2 gold-gradient text-charcoal px-4 py-1 rounded-full text-xs font-accent font-bold">
                          <Sparkles className="w-3 h-3" /> MOST POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="font-display text-3xl text-charcoal mb-2">{tier.name}</h3>
                      <p className="text-sm text-charcoal-medium">{tier.tagline}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                          <span className="text-charcoal-medium text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full py-5 text-base font-accent ${tier.popular ? 'gold-gradient text-charcoal border-0' : ''}`}
                      variant={tier.popular ? "default" : "outline"}
                      onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
                      data-testid={`button-tier-${i}`}
                    >
                      {tier.cta}
                    </Button>
                  </div>
                  
                  {/* Cylinder Bottom */}
                  <div className={`w-full h-8 rounded-b-full border-2 border-charcoal ${tier.popular ? 'bg-gradient-to-r from-gold-dark to-gold' : 'bg-gradient-to-b from-cream/80 to-cream'}`}></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly - Black & Gold Theme */}
      <section id="book-call" className="py-24 bg-charcoal relative z-10 overflow-hidden" data-testid="section-book-call">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">SCHEDULE A CALL</p>
            <h2 className="text-4xl text-white mb-4 font-semibold tracking-tight">Book Your Strategy Call</h2>
            <p className="text-white/60 mb-12">Select a time that works for you. 45 minutes. Pure value.</p>
          </ScrollReveal>
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/5" data-testid="calendly-widget-container">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/spidxrnetwork/45min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=C4A052"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
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

