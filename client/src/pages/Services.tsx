import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedServicesShowcase from "@/components/AnimatedServicesShowcase";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [, setLocation] = useLocation();

  const handleBookCall = () => {
    setLocation("/");
    setTimeout(() => {
      const element = document.getElementById("book-call-anchor");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  useEffect(() => {
    // Re-initialize Calendly inline widget if it's available
    const initCalendly = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/spidxrnetwork/45min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=C4A052',
          parentElement: document.querySelector('.calendly-inline-widget'),
        });
      }
    };

    // Try immediately
    initCalendly();

    // Also try after a short delay to ensure DOM is ready
    const timer = setTimeout(initCalendly, 1000);
    return () => clearTimeout(timer);
  }, []);

  const pricingTiers = [
    {
      name: 'Single Function',
      tagline: 'For businesses ready to build foundations',
      price: '$3,000 - $5,000',
      period: '/month',
      features: ['Single-layer focus (Top, Middle, or Back)', 'Weekly strategy calls', 'Implementation guidance', 'Performance dashboards', 'Email support'],
      cta: 'Book Discovery Call',
      popular: false,
    },
    {
      name: 'Dual Function',
      tagline: 'For businesses ready to integrate',
      price: '$7,500 - $15,000',
      period: '/month',
      features: ['Multi-layer integration', 'Bi-weekly strategy calls', 'Hands-on implementation', 'Dedicated account manager', 'Custom automations', 'Priority support'],
      cta: 'Book Discovery Call',
      popular: true,
    },
    {
      name: 'Full C-Suite',
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
    { q: 'What industries do you work with?', a: 'We work with hospitality, health & wellness, education, marketing agencies, merchandising, salons, and professional services. Our C-level operators have experience across 10+ industries.' },
    { q: "Do I need technical skills?", a: 'No. We handle all the technical implementation. For the Strand tier, we provide training and guidance anyone can follow.' },
    { q: "What's the minimum commitment?", a: 'We recommend a minimum of 3 months to see full results, but we offer flexible arrangements based on your needs and goals.' },
    { q: "Can I start with one layer and expand?", a: 'Absolutely. Many clients start with a single focus area and expand as they see results. Our system is designed to grow with you.' },
  ];


  return (
    <div className="overflow-hidden relative min-h-screen grain">
      {/* Scroll Statement */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-white pt-24">
        <motion.h2
          initial={{ opacity: 0.1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold text-charcoal text-center max-w-4xl leading-tight tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          We don&apos;t teach you how to build the machine.{" "}
          <span className="text-gold">We build it.</span>
        </motion.h2>
      </section>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-px h-12 bg-gold mx-auto mb-8"></div>
            <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">OUR SERVICES</p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6">
              C-Level Expertise.<br />
              <span className="text-gradient">Every Function Covered.</span>
            </h1>
            <p className="text-xl text-charcoal-medium max-w-2xl mx-auto">
              COO. CTO. CFO. CSO. — four C-level operators, one network.<br />
              We embed directly into your business and build the infrastructure you need to scale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Animated Services Showcase — Variant 4 from 21st.dev */}
      <AnimatedServicesShowcase />

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
                          <Sparkles className="w-3 h-3" fill="currentColor" /> MOST POPULAR
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
                      onClick={handleBookCall}
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
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/5 bg-[#1a1a1a] min-h-[700px]" data-testid="calendly-widget-container">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/spidxrnetwork/45min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=C4A052"
              style={{ minWidth: "320px", height: "700px" }}
              data-auto-load="true"
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

