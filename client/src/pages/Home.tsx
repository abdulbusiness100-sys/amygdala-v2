import { useLocation } from "wouter";
import { ArrowRight, Link2Off, Clock, Compass, Radar, Handshake, Server, ChevronDown, ArrowDown, ArrowUp, Search, Settings, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleBookCall = () => {
    setLocation("/services");
    setTimeout(() => {
      const element = document.getElementById("book-call");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const problemCards = [
    { icon: Link2Off, title: "Disconnected Systems", desc: "Your website doesn't talk to your CRM. Your ads don't inform your sales team. Your data lives in 15 different places." },
    { icon: Clock, title: "Wasted Time & Budget", desc: "You're paying 5 agencies to do what one integrated team could do better. Each handoff adds 2 weeks. Each miscommunication costs $10K." },
    { icon: Compass, title: "No Single Source of Truth", desc: "When something breaks, you play telephone between vendors. When something works, nobody knows why." },
  ];

  const stackLayers = [
    {
      title: "VISIBILITY & ACQUISITION",
      subtitle: "Top of Funnel • Front End",
      icon: Radar,
      services: ["Website Development", "Branding", "Social Media Automation", "E-commerce Growth", "Lead Generation", "Funnel Creation", "Landing Pages", "Paid & Organic Acquisition"],
      color: "from-gold to-gold-dark"
    },
    {
      title: "CONVERSION & SALES",
      subtitle: "Middle Funnel • Mid-Backend",
      icon: Handshake,
      services: ["Lead Nurturing", "Email Automation", "Full Sales Cycle", "Setter → Closer Pipeline", "CSM & Client Relations", "Sales Automation", "CRM Management", "Revenue Operations"],
      color: "from-gold-dark to-gold"
    },
    {
      title: "INFRASTRUCTURE & SCALE",
      subtitle: "Back End • Enterprise",
      icon: Server,
      services: ["Full App Development", "Custom CRM Build", "Digital Products", "Go-To-Market Strategy", "AI Integration", "Technical Setup", "Social Media Team Deployment", "Enterprise Operations"],
      color: "from-gold to-gold-dark"
    }
  ];

  const processSteps = [
    { num: "01", title: "Deep Dive Audit", week: "Week 1-2", desc: "We dissect your entire operation. Every system. Every metric. Every opportunity." },
    { num: "02", title: "Unified Architecture", week: "Week 2-3", desc: "We design your custom growth system. Every component connected. Every workflow optimized." },
    { num: "03", title: "Systematic Build", week: "Week 3-8", desc: "We construct your unified stack. Piece by piece. Test by test. Until it's bulletproof." },
    { num: "04", title: "Growth Activation", week: "Week 8+", desc: "We turn on the engine. Optimize in real-time. Scale what works. Compound your returns." },
  ];

  return (
    <div className="overflow-hidden relative min-h-screen grain">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream-dark"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <div className="w-px h-12 bg-gold mx-auto mb-8"></div>
            
            <p className="font-accent text-gold text-sm tracking-[0.2em] uppercase mb-6">SPIDXR NETWORK</p>
            
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6 leading-tight">
              The Unified<br />
              <span className="text-gradient">Growth Engine</span>
            </h1>

            <p className="text-charcoal-medium text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Full-stack business development. From first click to enterprise scale.<br />
              One partner. One system. Zero fragmentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                size="lg" 
                className="font-accent text-charcoal border-charcoal/20 hover:bg-charcoal/5 text-lg px-8 py-6"
                onClick={() => setLocation("/what-we-do")}
              >
                See How It Works
              </Button>
              <Button 
                size="lg" 
                className="font-accent gold-gradient text-charcoal border-0 text-lg px-8 py-6 shimmer"
                onClick={handleBookCall}
              >
                Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gold" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Sticky headline */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <ScrollReveal>
                <div className="w-px h-8 bg-gold mb-6"></div>
                <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">THE FRAGMENTATION PROBLEM</p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                  Your Growth Stack<br />
                  <span className="text-gradient">Is Bleeding Money</span>
                </h2>
                <p className="text-charcoal-medium text-lg leading-relaxed">
                  The average scaling business juggles 7+ vendors, 12+ tools, and countless handoffs. Each gap is a leak. Each silo is a bottleneck. Each miscommunication costs you customers.
                </p>
              </ScrollReveal>
            </div>

            {/* Right - Problem cards */}
            <div className="space-y-6">
              {problemCards.map((card, i) => (
                <ScrollReveal key={i} delay={i * 1}>
                  <div className="glass p-8 rounded-2xl card-3d">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-charcoal mb-2">{card.title}</h3>
                        <p className="text-charcoal-medium text-sm leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              
              {/* Solution card */}
              <ScrollReveal delay={4}>
                <div className="gold-gradient p-8 rounded-2xl">
                  <h3 className="font-display text-xl text-charcoal mb-2">The SPIDXR Solution</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    One unified system. Every strand connected. Marketing, sales, and technology moving as one organism.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Stack Section */}
      <section className="py-24 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="w-px h-8 bg-gold mx-auto mb-6"></div>
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">THE UNIFIED GROWTH STACK</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Three Layers. One System.
              </h2>
              <p className="text-charcoal-medium text-lg max-w-2xl mx-auto">
                Every service interconnected. Every action informed by data. Every result compounding on the last.
              </p>
            </div>
          </ScrollReveal>

          {/* Stack visualization */}
          <div className="space-y-6 mb-16">
            {stackLayers.map((layer, i) => (
              <ScrollReveal key={i} delay={i * 1.5}>
                <div className="glass p-8 rounded-2xl hover:border-gold/30 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4 lg:w-72 flex-shrink-0">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                        <layer.icon className="w-7 h-7 text-charcoal" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-charcoal">{layer.title}</h3>
                        <p className="font-accent text-xs text-charcoal-medium tracking-wider uppercase">{layer.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-wrap gap-2">
                      {layer.services.map((service, si) => (
                        <span 
                          key={si} 
                          className="px-3 py-1.5 bg-white/50 rounded-full text-xs font-accent text-charcoal-medium border border-gold/10"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Connection lines indicator */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 text-gold/50">
              <ArrowDown className="w-5 h-5 animate-pulse" />
              <span className="font-accent text-xs tracking-wider">FULLY CONNECTED</span>
              <ArrowUp className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props / Stats Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Left content */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="w-px h-8 bg-gold mb-6"></div>
                <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">THE UNIFIED ADVANTAGE</p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                  When Everything Connects,<br />
                  <span className="text-gradient">Everything Compounds.</span>
                </h2>
                <p className="text-charcoal-medium text-lg leading-relaxed mb-6">
                  Most businesses operate in silos. Marketing doesn't talk to sales. Sales doesn't inform product. Data sits unused. Opportunities slip through cracks.
                </p>
                <p className="text-charcoal-medium text-lg leading-relaxed">
                  SPIDXR NETWORK eliminates these gaps. We build one integrated system where every action informs every other. Your ad data improves your sales scripts. Your sales calls improve your targeting. Your customer feedback improves your product.
                </p>
              </ScrollReveal>
            </div>

            {/* Right stats */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { value: 73, prefix: "↓", suffix: "%", label: "Reduction in vendor management time" },
                { value: 3.2, suffix: "x", label: "Faster speed to market" },
                { value: 47, prefix: "↑", suffix: "%", label: "Improvement in lead-to-close rate" },
                { value: 40, prefix: "↓", suffix: "%", label: "Reduction in tech stack costs" },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 1}>
                  <div className="glass p-6 rounded-2xl text-center card-3d">
                    <div className="text-3xl font-display text-charcoal mb-2">
                      {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs text-charcoal-medium leading-tight">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="w-px h-8 bg-gold mx-auto mb-6"></div>
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">HOW WE WORK</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                From Audit to Empire.
              </h2>
              <p className="text-charcoal-medium text-lg">A proven process. Typical timeline: 8-12 weeks.</p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 1}>
                <div className="relative h-full">
                  {/* Connection line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gold/30 z-0"></div>
                  )}
                  
                  <div className="glass p-8 rounded-2xl h-full card-3d relative z-10">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-6">
                      <span className="font-display text-charcoal text-lg">{step.num}</span>
                    </div>
                    <p className="font-accent text-xs text-gold tracking-wider uppercase mb-2">{step.week}</p>
                    <h3 className="font-display text-xl text-charcoal mb-3">{step.title}</h3>
                    <p className="text-charcoal-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-cream-dark relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">READY TO UNIFY?</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
              Let's Build Your<br />
              <span className="text-gradient">Growth Engine</span>
            </h2>
            <p className="text-charcoal-medium text-lg mb-10 max-w-xl mx-auto">
              Book a strategy call. We'll audit your current setup, identify your biggest opportunities, and show you exactly how a unified system would transform your business.
            </p>
            <Button 
              size="lg" 
              className="font-accent gold-gradient text-charcoal border-0 text-xl px-12 py-8 rounded-2xl shimmer"
              onClick={handleBookCall}
            >
              Book Your Strategy Call <ArrowRight className="ml-2" />
            </Button>
            <p className="text-charcoal-medium text-sm mt-6">30 minutes. No obligation. Pure value.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
