import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      name: 'Amygdala',
      tagline: 'DONE WITH YOU',
      description: 'We build the assets, you run the controls. Perfect for teams with existing marketing staff.',
      features: ['System Audit', 'Asset Creation', 'CRM Setup', 'Weekly Consulting'],
      cta: 'Book Consult',
      popular: false,
    },
    {
      name: 'Medulla',
      tagline: 'DONE FOR YOU',
      description: 'Complete takeover. We build, run, and optimize the entire acquisition engine.',
      features: ['Everything in Amygdala', 'Full Media Buying', 'Copywriting & Creative', '24/7 Optimization', 'Guaranteed Lead Volume'],
      cta: 'Apply Now',
      popular: true,
    },
    {
      name: 'Cerebral',
      tagline: 'EXECUTIVE PARTNER',
      description: 'Fractional CMO & Growth Team implementation for enterprise scaling.',
      features: ['Full Team Access', 'Strategy Workshops', 'Revenue Share Model', 'Custom Tech Stack'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    { q: 'How long before I see results?', a: 'Most clients see measurable improvements within the first 4-6 weeks. Full system implementation typically takes 6-8 weeks, with optimization continuing thereafter.' },
    { q: 'What industries do you work with?', a: 'We specialize in B2B services, agencies, consultancies, SaaS, and high-ticket B2C. If your business relies on lead generation and sales calls, we can help.' },
    { q: "Do I need technical skills?", a: 'No. We handle all the technical implementation. For the Amygdala tier, we provide training anyone can follow.' },
    { q: "What's the minimum commitment?", a: 'We recommend a minimum of 3 months to see full results, but we offer flexible arrangements based on your needs and goals.' },
  ];

  useEffect(() => {
    // Dynamically load Calendly script if not already present
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, we might need to re-initialize the widget
      // @ts-ignore
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/spidxr253/30min',
          text: 'Book Your Strategy Call',
          color: '#0b6315',
          textColor: '#ffffff',
          branding: true
        });
      }
    }
  }, []);

  return (
    <div className="overflow-hidden bg-background min-h-screen">
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-background to-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Partnership <span className="text-gradient">Models</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose how you want to deploy the engine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((tier, i) => (
              <ScrollReveal key={i} delay={i * 2}>
                <div className={`relative h-full rounded-3xl p-8 border transition-all hover:-translate-y-2 duration-300 flex flex-col
                  ${tier.popular 
                    ? 'bg-gradient-to-b from-primary/20 to-primary/5 border-primary shadow-2xl shadow-primary/20' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6b7b3a] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-3 h-3" /> POPULAR
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className={`text-sm font-bold tracking-widest uppercase ${tier.popular ? 'text-primary-foreground' : 'text-gray-500'}`}>
                      {tier.tagline}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8 min-h-[80px]">{tier.description}</p>

                  <div className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 ${tier.popular ? 'text-[#6b7b3a]' : 'text-primary'}`} />
                        <span className="text-gray-300 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full py-6 text-lg" 
                    variant={tier.popular ? "khaki" : "outline"}
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

      {/* Comparison Table */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compare All Tiers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-400">
              <thead className="text-xs uppercase bg-white/5 text-white">
                <tr>
                  <th className="px-6 py-4 rounded-tl-xl">Feature</th>
                  <th className="px-6 py-4">Amygdala</th>
                  <th className="px-6 py-4 bg-primary/10">Medulla</th>
                  <th className="px-6 py-4 rounded-tr-xl">Cerebral</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: "Strategy Calls", a: "Weekly", m: "Weekly", c: "Weekly + On-Demand" },
                  { name: "Done-For-You Build", a: false, m: true, c: true },
                  { name: "Live Dashboards", a: false, m: true, c: true },
                  { name: "Dedicated Account Manager", a: false, m: true, c: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                    <td className="px-6 py-4 text-sm">{renderCheck(row.a)}</td>
                    <td className="px-6 py-4 text-sm bg-primary/5">{renderCheck(row.m)}</td>
                    <td className="px-6 py-4 text-sm">{renderCheck(row.c)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="audit" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                 Get Your Free <span className="text-gradient">Growth Audit</span>
               </h2>
               <p className="text-gray-400 text-lg mb-8">
                 Tell us about your business and we'll identify the biggest opportunities to improve your acquisition system. No obligation.
               </p>
               <ul className="space-y-4 mb-8">
                 {['Identify leaks in your funnel', 'Discover quick wins', 'Custom roadmap'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-300">
                     <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                       <CheckCircle2 className="w-4 h-4 text-primary" />
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
      <section id="book-call" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Book Your Strategy Call</h2>
          <p className="text-gray-400 mb-12">Select a time that works for you.</p>
          <div className="bg-background rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
             <div 
               className="calendly-inline-widget" 
               data-url="https://calendly.com/spidxr253/30min?background_color=0b6315"
               style={{ minWidth: '320px', height: '700px' }}
             />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-[#6b7b3a]">Questions</span>
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}

function renderCheck(val: boolean | string) {
  if (val === true) return <CheckCircle2 className="w-5 h-5 text-green-500" />;
  if (val === false) return <X className="w-5 h-5 text-gray-600" />;
  return val;
}
