import { useLocation } from "wouter";
import { ArrowRight, Link2Off, Clock, Compass, Radar, Handshake, Server, Search, Settings, Rocket, TrendingUp, Play, CheckCircle2 } from "lucide-react";
import logo from "@assets/AMYGDALA_ACQUISITIONS_(6)_1768919980907.png";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import LogoCarousel from "@/components/LogoCarousel";
import { FadeIn } from "@/components/TextReveal";

import heroBackgroundImage from "@assets/download_1768911427525.webp";
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

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="overflow-hidden relative min-h-screen">
      {/* Hero Section - Centered Layout with Background Image */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden" data-testid="section-hero">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroImageY, scale: heroImageScale }}
        >
          <img 
            src={heroBackgroundImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/70 to-cream"></div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <FadeIn delay={0.1}>
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
              We Build Systems{" "}
              <span className="text-gradient">That Scale Businesses</span>
            </motion.h1>

            <motion.p 
              className="text-charcoal-medium text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
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
              className="mb-12"
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

            {/* Social proof badges - centered */}
            <motion.div 
              className="mt-16 flex items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-charcoal to-charcoal-medium border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-display text-charcoal">60+ Businesses</p>
                <p className="text-sm text-charcoal-medium">Trust our unified approach</p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* The Problem Section - Centered */}
      <section className="py-24 bg-white relative z-10" data-testid="section-problem">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-problem-label">THE FRAGMENTATION PROBLEM</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight" data-testid="text-problem-heading">
                Your Growth Stack <span className="text-gradient">Is Bleeding Money</span>
              </h2>
              <p className="text-charcoal-medium text-lg leading-relaxed max-w-2xl mx-auto">
                The average scaling business juggles 7+ vendors, 12+ tools, and countless handoffs. Each gap is a leak.
              </p>
            </div>
          </FadeIn>

          {/* Centered Image */}
          <FadeIn delay={0.1}>
            <div className="relative mb-12">
              <img 
                src={fragmentationImage}
                alt="Fragmented systems bleeding money"
                className="rounded-2xl shadow-xl mx-auto max-w-3xl w-full"
                data-testid="img-fragmentation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl"></div>
            </div>
          </FadeIn>

          {/* Problem Cards - Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {problemCards.map((card, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <div className="p-6 rounded-xl bg-cream border border-gold/10 hover:border-gold/30 transition-colors text-center" data-testid={`card-problem-${i}`}>
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <card.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{card.title}</h3>
                  <p className="text-charcoal-medium text-sm">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Three Layers Section - Centered */}
      <section className="py-24 bg-cream relative z-10" data-testid="section-three-layers">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Central Stack Image */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <img 
                src={stackedSystemImage} 
                alt="Three-layer stacked system"
                className="rounded-2xl shadow-xl mx-auto max-w-3xl w-full"
              />
            </div>
          </FadeIn>

          {/* Three Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Top of Funnel Card */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 mx-auto">
                  <Radar className="w-6 h-6 text-charcoal" />
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
              <div className="bg-white rounded-3xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 mx-auto">
                  <Handshake className="w-6 h-6 text-charcoal" />
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

            {/* Backend Infrastructure Card */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 mx-auto">
                  <Server className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">Back End</h3>
                <p className="text-charcoal-medium text-sm mb-4">Infrastructure & Scale</p>
                <img 
                  src={infrastructureImage} 
                  alt="Infrastructure and scale"
                  className="rounded-xl h-32 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Metrics Section - Centered */}
      <section className="py-24 bg-cream relative z-10" data-testid="section-metrics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-metrics-label">THE UNIFIED ADVANTAGE</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                When Everything Connects, <span className="text-gradient">Everything Compounds.</span>
              </h2>
              <p className="text-charcoal-medium text-lg leading-relaxed max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap">
                <span className="inline-flex items-center">
                  <img src={logo} alt="SPIDXR NETWORK" className="h-5 w-auto" style={{ imageRendering: 'crisp-edges' }} data-testid="logo-metrics" />
                </span>
                <span>eliminates gaps. We build one integrated system where every action informs every other.</span>
              </p>
            </div>
          </FadeIn>

          {/* Centered Image */}
          <FadeIn delay={0.1}>
            <div className="relative mb-12">
              <img 
                src={metricsImage}
                alt="Unified metrics dashboard"
                className="rounded-2xl shadow-xl mx-auto max-w-3xl w-full"
              />
            </div>
          </FadeIn>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 60, suffix: "+", label: "Businesses Impacted" },
              { value: 10, prefix: "$", suffix: "M+", label: "Client Portfolio" },
              { value: 100, suffix: "%", label: "Satisfaction Rate" },
              { value: 2.6, prefix: "$", suffix: "M+", label: "Generated in 2025" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white p-6 rounded-2xl border-2 border-gold text-center hover:border-gold-dark transition-colors" data-testid={`card-metric-${i}`}>
                  <div className="text-3xl font-display text-charcoal mb-1" data-testid={`text-metric-value-${i}`}>
                    {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-charcoal-medium" data-testid={`text-metric-label-${i}`}>{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section - Centered */}
      <section className="py-24 bg-white relative z-10" data-testid="section-dashboard">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-dashboard-label">SINGLE SOURCE OF TRUTH</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                One Dashboard. <span className="text-gradient">Complete Visibility.</span>
              </h2>
              <p className="text-charcoal-medium text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                No more logging into 12 different tools. No more piecing together reports from 5 vendors. Everything you need to see in one place.
              </p>
            </div>
          </FadeIn>

          {/* Centered Dashboard Image */}
          <FadeIn delay={0.1}>
            <img 
              src={dashboardImage}
              alt="Integrated dashboard - single source of truth"
              className="rounded-2xl shadow-xl mx-auto max-w-4xl w-full mb-12"
              data-testid="img-dashboard"
            />
          </FadeIn>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {["Real-time performance metrics", "Cross-channel attribution", "Pipeline visibility", "Revenue forecasting"].map((item, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <div className="bg-cream p-4 rounded-xl text-center border border-gold/10 hover:border-gold/30 transition-colors">
                  <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3">
                    <ArrowRight className="w-4 h-4 text-charcoal" />
                  </div>
                  <p className="text-charcoal text-sm font-medium">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Timeline Visual */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="text-center mb-8">
                <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-2">FROM CHAOS TO CLARITY</p>
                <h3 className="font-display text-2xl text-charcoal">Your Journey With Us</h3>
              </div>
              
              {/* Horizontal Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 rounded-full"></div>
                
                {/* Timeline Steps */}
                <div className="grid grid-cols-4 gap-4 relative">
                  {[
                    { num: "01", title: "Audit", desc: "Deep-dive analysis of your current systems" },
                    { num: "02", title: "Architect", desc: "Custom blueprint for your growth engine" },
                    { num: "03", title: "Build", desc: "Systematic implementation phase" },
                    { num: "04", title: "Scale", desc: "Continuous optimization & growth" },
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {/* Node */}
                      <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-lg border-4 border-white z-10 mb-4">
                        <span className="font-display text-charcoal font-bold">{step.num}</span>
                      </div>
                      {/* Content */}
                      <div className="text-center">
                        <h4 className="font-display text-lg text-charcoal mb-1">{step.title}</h4>
                        <p className="text-charcoal-medium text-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
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
