import { useLocation } from "wouter";
import { ArrowRight, Link2Off, Clock, Compass, Radar, Handshake, Server, Search, Settings, Rocket, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialSection from "@/components/TestimonialCard";
import { FadeIn } from "@/components/TextReveal";

import heroImage from "@assets/download_1768908354245.webp";
import fragmentationImage from "@assets/download_(1)_1768908363471.webp";
import stackedSystemImage from "@assets/download_(23)_1768908363470.png";
import acquisitionImage from "@assets/download_(24)_1768908363470.png";
import conversionImage from "@assets/download_(2)_1768908363470.webp";
import infrastructureImage from "@assets/download_(25)_1768908363470.png";
import metricsImage from "@assets/download_(26)_1768908363470.png";
import processImage from "@assets/download_(27)_1768908363469.png";
import ctaImage from "@assets/download_(3)_1768908363469.webp";
import dashboardImage from "@assets/download_(28)_1768908363468.png";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleBookCall = () => {
    setLocation("/services");
    setTimeout(() => {
      document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const problemCards = [
    { icon: Link2Off, title: "Disconnected Systems", desc: "Your website doesn't talk to your CRM. Your ads don't inform your sales team." },
    { icon: Clock, title: "Wasted Time & Budget", desc: "You're paying 5 agencies to do what one integrated team could do better." },
    { icon: Compass, title: "No Single Source of Truth", desc: "When something breaks, you play telephone between vendors." },
  ];

  const processSteps = [
    { num: "01", title: "Audit", icon: Search, desc: "Deep dive analysis" },
    { num: "02", title: "Architect", icon: Settings, desc: "Custom blueprint" },
    { num: "03", title: "Build", icon: Rocket, desc: "Systematic execution" },
    { num: "04", title: "Scale", icon: TrendingUp, desc: "Growth activation" },
  ];

  return (
    <div className="overflow-hidden relative min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-cream via-white to-cream" data-testid="section-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <FadeIn delay={0.1}>
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
                >
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                  <span className="font-accent text-xs text-gold tracking-wider uppercase">Full-Stack Growth Operator</span>
                </motion.div>

                <motion.h1 
                  className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.1]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  We Build Systems<br />
                  <span className="text-gradient">That Scale Businesses</span>
                </motion.h1>

                <motion.p 
                  className="text-charcoal-medium text-lg md:text-xl mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  One unified partner replacing your fragmented agency stack.<br />
                  Marketing. Sales. Technology. Connected.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="font-accent gold-gradient text-charcoal border-0 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                    onClick={handleBookCall}
                    data-testid="button-hero-cta"
                  >
                    Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                {/* Social proof badges */}
                <motion.div 
                  className="mt-12 flex items-center gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-charcoal to-charcoal-medium border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-display text-charcoal">50+ Companies</p>
                    <p className="text-sm text-charcoal-medium">Trust our unified approach</p>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            {/* Right Column - Hero Image */}
            <FadeIn delay={0.4} direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl blur-3xl"></div>
                <motion.img 
                  src={heroImage}
                  alt="Unified Growth Network"
                  className="relative rounded-3xl shadow-2xl w-full"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gold/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-display text-2xl text-charcoal">847%</p>
                      <p className="text-xs text-charcoal-medium">Avg. ROI</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* The Problem Section */}
      <section className="py-24 bg-white relative z-10" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <FadeIn direction="right">
              <div className="relative">
                <img 
                  src={fragmentationImage}
                  alt="Fragmented systems bleeding money"
                  className="rounded-2xl shadow-xl"
                  data-testid="img-fragmentation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl"></div>
              </div>
            </FadeIn>

            {/* Right - Content */}
            <div>
              <FadeIn>
                <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-problem-label">THE FRAGMENTATION PROBLEM</p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight" data-testid="text-problem-heading">
                  Your Growth Stack<br />
                  <span className="text-gradient">Is Bleeding Money</span>
                </h2>
                <p className="text-charcoal-medium text-lg leading-relaxed mb-8">
                  The average scaling business juggles 7+ vendors, 12+ tools, and countless handoffs. Each gap is a leak.
                </p>
              </FadeIn>

              <div className="space-y-4">
                {problemCards.map((card, i) => (
                  <FadeIn key={i} delay={0.1 + i * 0.1}>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-cream border border-gold/10 hover:border-gold/30 transition-colors" data-testid={`card-problem-${i}`}>
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-charcoal mb-1">{card.title}</h3>
                        <p className="text-charcoal-medium text-sm">{card.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Layers Section with Bento Grid */}
      <section className="py-24 bg-cream relative z-10" data-testid="section-three-layers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-layers-label">THE UNIFIED GROWTH STACK</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4" data-testid="text-layers-heading">
                Three Layers. One System.
              </h2>
              <p className="text-charcoal-medium text-lg max-w-2xl mx-auto">
                Every service interconnected. Every action informed by data.
              </p>
            </div>
          </FadeIn>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Large card - Stack visualization */}
            <FadeIn className="lg:col-span-2 lg:row-span-2">
              <div className="bg-white rounded-3xl p-8 h-full border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center">
                      <Server className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-charcoal">Complete Integration</h3>
                      <p className="text-sm text-charcoal-medium">All three layers, connected</p>
                    </div>
                  </div>
                  <img 
                    src={stackedSystemImage} 
                    alt="Three-layer stacked system"
                    className="rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Top of Funnel Card */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center mb-4">
                  <Radar className="w-5 h-5 text-charcoal" />
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">Top of Funnel</h3>
                <p className="text-charcoal-medium text-sm mb-4">Visibility & Acquisition</p>
                <img 
                  src={acquisitionImage} 
                  alt="Acquisition funnel"
                  className="rounded-xl h-32 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </FadeIn>

            {/* Middle Funnel Card */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center mb-4">
                  <Handshake className="w-5 h-5 text-charcoal" />
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">Middle Funnel</h3>
                <p className="text-charcoal-medium text-sm mb-4">Conversion & Sales</p>
                <img 
                  src={conversionImage} 
                  alt="Conversion pipeline"
                  className="rounded-xl h-32 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </FadeIn>
          </div>

          {/* Infrastructure Card - Full Width */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-3xl p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center mb-6">
                    <Server className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-3">Back End: Infrastructure & Scale</h3>
                  <p className="text-charcoal-medium mb-6">Custom CRM, AI integration, full application development. The foundation that lets you scale without the growing pains.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Custom CRM", "AI Integration", "App Development", "Automation"].map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gold/10 rounded-full text-xs font-accent text-gold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <img 
                  src={infrastructureImage} 
                  alt="Infrastructure and scale"
                  className="rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Metrics Section */}
      <section className="py-24 bg-cream relative z-10" data-testid="section-metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-metrics-label">THE UNIFIED ADVANTAGE</p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                  When Everything Connects,<br />
                  <span className="text-gradient">Everything Compounds.</span>
                </h2>
                <p className="text-charcoal-medium text-lg leading-relaxed mb-8">
                  SPIDXR NETWORK eliminates gaps. We build one integrated system where every action informs every other.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 50, suffix: "+", label: "Clients Served" },
                    { value: 12, prefix: "$", suffix: "M+", label: "Revenue Generated" },
                    { value: 847, suffix: "%", label: "Avg. ROI Delivered" },
                    { value: 89, suffix: "%", label: "Client Retention" },
                  ].map((stat, i) => (
                    <FadeIn key={i} delay={0.1 + i * 0.1}>
                      <div className="bg-white p-6 rounded-2xl border border-gold/10 text-center hover:border-gold/30 transition-colors" data-testid={`card-metric-${i}`}>
                        <div className="text-3xl font-display text-charcoal mb-1" data-testid={`text-metric-value-${i}`}>
                          {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-xs text-charcoal-medium" data-testid={`text-metric-label-${i}`}>{stat.label}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="relative">
                <img 
                  src={metricsImage}
                  alt="Unified metrics dashboard"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-24 bg-white relative z-10" data-testid="section-dashboard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <img 
                src={dashboardImage}
                alt="Integrated dashboard - single source of truth"
                className="rounded-2xl shadow-xl"
                data-testid="img-dashboard"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-dashboard-label">SINGLE SOURCE OF TRUTH</p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                  One Dashboard.<br />
                  <span className="text-gradient">Complete Visibility.</span>
                </h2>
                <p className="text-charcoal-medium text-lg leading-relaxed mb-6">
                  No more logging into 12 different tools. No more piecing together reports from 5 vendors. Everything you need to see—in one place.
                </p>
                <ul className="space-y-3">
                  {["Real-time performance metrics", "Cross-channel attribution", "Pipeline visibility", "Revenue forecasting"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal">
                      <div className="w-5 h-5 rounded-full gold-gradient flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-charcoal" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section - Simplified 4 Steps */}
      <section className="py-24 bg-cream relative z-10" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-process-label">HOW WE WORK</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                From Audit to Empire.
              </h2>
              <p className="text-charcoal-medium text-lg">A proven 8-12 week process.</p>
            </div>
          </FadeIn>

          {/* Process Image */}
          <FadeIn>
            <div className="mb-16">
              <img 
                src={processImage}
                alt="4-step process: Audit, Architect, Build, Scale"
                className="rounded-2xl shadow-xl mx-auto max-w-4xl w-full"
              />
            </div>
          </FadeIn>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-gold/30"></div>
                  )}
                  
                  <div className="bg-white p-6 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-300 text-center relative z-10" data-testid={`card-process-${i}`}>
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-charcoal" />
                    </div>
                    <span className="font-accent text-xs text-gold tracking-wider uppercase">{step.num}</span>
                    <h3 className="font-display text-xl text-charcoal mt-1 mb-2" data-testid={`text-process-title-${i}`}>{step.title}</h3>
                    <p className="text-charcoal-medium text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0">
          <img 
            src={ctaImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/70"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-cta-label">READY TO UNIFY?</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Let's Build Your<br />
              <span className="text-gold">Growth Engine</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Book a strategy call. We'll audit your current setup, identify your biggest opportunities, and show you exactly how a unified system would transform your business.
            </p>
            <Button 
              size="lg" 
              className="font-accent gold-gradient text-charcoal border-0 text-xl px-12 py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              onClick={handleBookCall}
              data-testid="button-cta-book-call"
            >
              Book Your Strategy Call <ArrowRight className="ml-2" />
            </Button>
            <p className="text-white/60 text-sm mt-6">30 minutes. No obligation. Pure value.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
