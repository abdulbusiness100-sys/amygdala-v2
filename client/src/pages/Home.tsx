import { useLocation } from "wouter";
import { ArrowRight, Play, Search, Settings, Rocket, TrendingUp, Radar, Handshake, Server, X } from "lucide-react";
import logo from "@assets/AMYGDALA_ACQUISITIONS_(6)_1768919980907.png";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import LogoCarousel from "@/components/LogoCarousel";
import { FadeIn } from "@/components/TextReveal";

import logo1 from "@assets/logo_1.png";
import logo2 from "@assets/logo_2.png";
import logo3 from "@assets/logo_3.png";
import logo4 from "@assets/logo_4.png";
import ctaImage from "@assets/download_(3)_1768908363469.webp";
import topFunnelImg from "@assets/download_(49)_1770656963246.png";
import middleFunnelImg from "@assets/download_(50)_1770656967005.png";
import backEndImg from "@assets/download_(51)_1770656970922.png";

const testimonials = [
  {
    name: "Sarah K.",
    company: "Genflow",
    quote: "Revenue went from under $100K to $400K+ in a single quarter. The unified approach changed everything.",
    metric: "312% Revenue Growth",
  },
  {
    name: "Ahmed R.",
    company: "Faseeha Institute",
    quote: "700+ leads in the first 30 days. We finally have a system that works together instead of against itself.",
    metric: "700+ Leads in 30 Days",
  },
  {
    name: "James L.",
    company: "Nur Cafe",
    quote: "From £1.1M to £1.7M in revenue. The dashboard alone saved us 15 hours a week in reporting.",
    metric: "55% Revenue Growth",
  },
];

const processSteps = [
  { num: 1, title: "Audit", timing: "Week 1-2", desc: "Deep dive analysis", icon: Search },
  { num: 2, title: "Architect", timing: "Week 2-3", desc: "Custom blueprint", icon: Settings },
  { num: 3, title: "Build", timing: "Week 3-8", desc: "Systematic execution", icon: Rocket },
  { num: 4, title: "Scale", timing: "Week 8+", desc: "Growth activation", icon: TrendingUp },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [videoModal, setVideoModal] = useState<number | null>(null);

  const handleBookCall = () => {
    setLocation("/services");
    setTimeout(() => {
      document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      {/* HERO SECTION - Split Layout */}
      <section className="relative min-h-screen flex items-center pt-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - 55% */}
            <div className="lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/8 border border-gold/15 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span className="text-xs text-gold tracking-wider uppercase font-medium">Full-Stack Growth Operator</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-[64px] text-charcoal mb-6 leading-[1.08] font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                data-testid="text-hero-heading"
              >
                We Build Systems{" "}
                <span className="text-gradient">That Scale Businesses</span>
              </motion.h1>

              <motion.p
                className="text-charcoal-medium text-lg md:text-xl mb-10 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                data-testid="text-hero-subtitle"
              >
                One unified partner replacing your fragmented agency stack.
                Marketing. Sales. Technology. Connected.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-12"
              >
                <Button
                  size="lg"
                  className="gold-gradient text-charcoal border-0 text-base px-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                  onClick={handleBookCall}
                  data-testid="button-hero-cta"
                >
                  Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Social Proof Row */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex -space-x-2">
                  {[logo1, logo2, logo3, logo4].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                      <img src={src} alt="" className="w-5 h-5 object-contain" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-charcoal-medium">
                  Trusted by <span className="text-charcoal font-medium">60+ companies</span>
                </p>
              </motion.div>
            </div>

            {/* Right Column - 45% - Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal/5 border border-charcoal/10 group cursor-pointer"
                data-testid="hero-video-placeholder"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <img src={logo} alt="SPIDXR NETWORK" className="h-8 w-auto mb-6 opacity-30" />
                  <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Play className="w-6 h-6 text-charcoal ml-1" fill="currentColor" />
                  </div>
                  <p className="text-charcoal-medium text-sm mt-4">Meet the Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Logo Carousel */}
      <LogoCarousel />
      {/* SERVICES - Bento Grid */}
      <section className="py-24 bg-white" data-testid="section-services-bento">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">The Unified Growth Stack</p>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-4 font-semibold leading-tight">
                Three Layers. <span className="text-gradient">One System.</span>
              </h2>
              <p className="text-charcoal-medium text-lg max-w-xl mx-auto">
                Every service interconnected. Every action informed by data.
              </p>
            </div>
          </FadeIn>

          {/* Bento Grid: 1 large top + 2 medium bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Top of Funnel - Full Width */}
            <FadeIn className="md:col-span-2">
              <div className="bg-cream rounded-2xl p-8 md:p-10 border border-charcoal/8 hover:border-gold/30 transition-colors duration-300 group" data-testid="bento-top-funnel">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                      <Radar className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-2xl text-charcoal font-semibold mb-3">Top of Funnel</h3>
                    <p className="text-charcoal-medium mb-5 leading-relaxed">
                      Visibility & acquisition. We build the systems that put you in front of the right people at the right time.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Meta Ads", "Google Ads", "SEO Strategy", "Content Systems", "Landing Pages"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs bg-white rounded-full text-charcoal-medium border border-charcoal/8">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0">
                    <img src={topFunnelImg} alt="Top of Funnel" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Middle Funnel */}
            <FadeIn delay={0.1}>
              <div className="bg-cream rounded-2xl p-8 border border-charcoal/8 hover:border-gold/30 transition-colors duration-300 h-full flex flex-col" data-testid="bento-middle-funnel">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <Handshake className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl text-charcoal font-semibold mb-3">Middle Funnel</h3>
                <p className="text-charcoal-medium text-sm mb-5 leading-relaxed">
                  Conversion & sales. Turn attention into revenue with systems that nurture, qualify, and close.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["CRM Setup", "Sales Pipelines", "Email Sequences", "Booking Funnels"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-white rounded-full text-charcoal-medium border border-charcoal/8">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto flex justify-center">
                  <img src={middleFunnelImg} alt="Middle Funnel" className="w-48 h-auto object-contain" />
                </div>
              </div>
            </FadeIn>

            {/* Back End */}
            <FadeIn delay={0.2}>
              <div className="bg-cream rounded-2xl p-8 border border-charcoal/8 hover:border-gold/30 transition-colors duration-300 h-full flex flex-col" data-testid="bento-backend">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <Server className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl text-charcoal font-semibold mb-3">Back End</h3>
                <p className="text-charcoal-medium text-sm mb-5 leading-relaxed">
                  Infrastructure & scale. The technology layer that makes everything work together seamlessly.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Custom Dashboards", "Automations", "API Integrations", "Data Analytics"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-white rounded-full text-charcoal-medium border border-charcoal/8">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto flex justify-center">
                  <img src={backEndImg} alt="Back End Infrastructure" className="w-48 h-auto object-contain" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* METRICS */}
      <section className="py-24 bg-cream" data-testid="section-metrics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">The Results</p>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-4 font-semibold leading-tight">
                Numbers That <span className="text-gradient">Speak.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 60, suffix: "+", label: "Businesses Impacted" },
              { value: 10, prefix: "$", suffix: "M+", label: "Client Portfolio" },
              { value: 100, suffix: "%", label: "Satisfaction Rate" },
              { value: 2.6, prefix: "$", suffix: "M+", label: "Generated in 2025" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white p-6 rounded-2xl border border-charcoal/8 text-center" data-testid={`card-metric-${i}`}>
                  <div className="text-3xl md:text-4xl text-charcoal mb-1 font-semibold tabular-nums" data-testid={`text-metric-value-${i}`}>
                    {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-charcoal-medium" data-testid={`text-metric-label-${i}`}>{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* VIDEO TESTIMONIALS */}
      <section className="py-24 bg-white" data-testid="section-testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">Client Stories</p>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-4 font-semibold leading-tight">
                What Our Clients Say
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group" data-testid={`testimonial-card-${i}`}>
                  {/* Video Thumbnail */}
                  <div
                    className="relative aspect-video rounded-xl overflow-hidden bg-charcoal/5 border border-charcoal/8 mb-5 cursor-pointer"
                    onClick={() => setVideoModal(i)}
                    data-testid={`testimonial-video-${i}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-charcoal/10">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 text-xs bg-charcoal/70 text-white rounded">{t.company}</span>
                    </div>
                  </div>
                  {/* Quote */}
                  <p className="text-charcoal text-sm leading-relaxed mb-3 italic" data-testid={`text-testimonial-quote-${i}`}>"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-charcoal font-medium text-sm" data-testid={`text-testimonial-name-${i}`}>{t.name}</p>
                      <p className="text-charcoal-medium text-xs" data-testid={`text-testimonial-company-${i}`}>{t.company}</p>
                    </div>
                    <span className="text-xs text-gold font-medium" data-testid={`text-testimonial-metric-${i}`}>{t.metric}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* After testimonials CTA */}
          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <Button
                variant="outline"
                className="border-gold/30 text-charcoal hover:border-gold"
                onClick={() => setLocation("/client-results")}
                data-testid="button-see-results"
              >
                See All Client Results <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Video Modal */}
      {videoModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm" onClick={() => setVideoModal(null)}>
          <div className="relative w-full max-w-3xl mx-4 aspect-video bg-charcoal rounded-xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              onClick={() => setVideoModal(null)}
              data-testid="button-close-modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center text-white/50">
              <Play className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-sm">Video coming soon</p>
              <p className="text-xs mt-1">{testimonials[videoModal].company} testimonial</p>
            </div>
          </div>
        </div>
      )}
      {/* PROCESS - Horizontal Timeline */}
      <section className="py-24 bg-cream" data-testid="section-process" ref={processRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">How We Work</p>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-4 font-semibold">
                From Audit to Empire.
              </h2>
              <p className="text-charcoal-medium text-lg">A proven 8-12 week process.</p>
            </div>
          </FadeIn>

          {/* Desktop: Horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-charcoal/10">
                <motion.div
                  className="h-full bg-gold/60 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={processInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>

              <div className="grid grid-cols-4 gap-6">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    data-testid={`card-process-${i}`}
                  >
                    {/* Gold Circle */}
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5 relative z-10 shadow-sm">
                      <span className="text-charcoal font-bold text-lg">{step.num}</span>
                    </div>
                    <h3 className="text-lg text-charcoal font-semibold mb-1">{step.title}</h3>
                    <p className="text-xs text-gold font-medium mb-2">{step.timing}</p>
                    <p className="text-charcoal-medium text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden space-y-0">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-5" data-testid={`card-process-mobile-${i}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-charcoal font-bold">{step.num}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-px h-12 bg-gold/30 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg text-charcoal font-semibold">{step.title}</h3>
                    <p className="text-xs text-gold font-medium mb-1">{step.timing}</p>
                    <p className="text-charcoal-medium text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* PRICING PREVIEW */}
      <section className="py-20 bg-white" data-testid="section-pricing-preview">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">Investment</p>
            <h2 className="text-3xl md:text-4xl text-charcoal mb-6 font-semibold">
              Transparent Pricing
            </h2>
            <p className="text-charcoal-medium text-lg mb-8 leading-relaxed">
              Starting from <span className="text-charcoal font-semibold">$3,000/month</span> for single-layer focus
              to <span className="text-charcoal font-semibold">$20,000+/month</span> for full-stack deployment.
            </p>
            <Button
              variant="outline"
              className="border-gold/30 text-charcoal hover:border-gold"
              onClick={() => setLocation("/services")}
              data-testid="button-pricing-details"
            >
              See Pricing Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
      </section>
      {/* END CTA */}
      <section className="py-32 relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0">
          <img
            src={ctaImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/85 to-charcoal/75"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">Ready to Unify?</p>
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-semibold leading-tight">
              Let's Build Your <span className="text-gold">Growth Engine</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a strategy call. We'll audit your current setup, identify opportunities, and show you exactly how a unified system transforms your business.
            </p>
            <Button
              size="lg"
              className="gold-gradient text-charcoal border-0 text-lg px-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={handleBookCall}
              data-testid="button-cta-book-call"
            >
              Book Your Strategy Call <ArrowRight className="ml-2" />
            </Button>
            <p className="text-white/50 text-sm mt-6">30 minutes. No obligation. Pure value.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
