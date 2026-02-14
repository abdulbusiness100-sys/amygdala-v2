import { useLocation } from "wouter";
import { ArrowRight, Play, Search, Settings, Rocket, TrendingUp, Radar, Handshake, Server, X } from "lucide-react";
import logo from "@assets/AMYGDALA_ACQUISITIONS_(6)_1768919980907.png";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import LogoCarousel from "@/components/LogoCarousel";
import { FadeIn } from "@/components/TextReveal";

import logo1 from "@assets/logo_1.png";
import logo2 from "@assets/logo_2.png";
import logo3 from "@assets/logo_3.png";
import logo4 from "@assets/logo_4.png";
import pristinePolishLogo from "@assets/download_(60)_1771092036403.png";
import amygdalaAcquisitionsLogo from "@assets/AMYGDALA_ACQUISITIONS_(2)_1771092230145.png";
import spidxrLogo4k from "@assets/AMYGDALA_ACQUISITIONS_(6)_1771093029203.png";
import clientLogoSpidxr from "@assets/Untitled_design_(1)_Medium_1771092233909.png";

// Tech stack logos
import { 
  SiXcode, SiGoogleads, SiSlack, SiAsana, SiReplit, 
  SiOpenai, SiAnthropic, SiN8N, SiApple, SiWix, SiNotion, SiFirebase,
  SiGooglegemini, SiHuggingface, SiGoogle, SiGooglesearchconsole,
  SiMeta, SiZapier, SiDji, SiGoogledrive, SiXero, SiCalendly, SiAmericanexpress,
  SiTelegram, SiGithubcopilot, SiCapcut, SiFiverr
} from "react-icons/si";
import { GraduationCap, Code2, LayoutDashboard } from "lucide-react";

const techStack = [
  { name: "Xcode", icon: SiXcode },
  { name: "VS Code", icon: Code2 },
  { name: "Google Ads", icon: SiGoogleads },
  { name: "Slack", icon: SiSlack },
  { name: "Asana", icon: SiAsana },
  { name: "Replit", icon: SiReplit },
  { name: "Gemini", icon: SiGooglegemini },
  { name: "ChatGPT", icon: SiOpenai },
  { name: "Claude", icon: SiAnthropic },
  { name: "n8n", icon: SiN8N },
  { name: "App Store", icon: SiApple },
  { name: "Skool", icon: GraduationCap },
  { name: "Google", icon: SiGoogle },
  { name: "SEO", icon: SiGooglesearchconsole },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Wix", icon: SiWix },
  { name: "Notion", icon: SiNotion },
  { name: "Firebase", icon: SiFirebase },
  { name: "Meta Ads", icon: SiMeta },
  { name: "Zapier", icon: SiZapier },
  { name: "DJI", icon: SiDji },
  { name: "Google Drive", icon: SiGoogledrive },
  { name: "Xero", icon: SiXero },
  { name: "Calendly", icon: SiCalendly },
  { name: "Amex", icon: SiAmericanexpress },
  { name: "Telegram", icon: SiTelegram },
  { name: "Copilot", icon: SiGithubcopilot },
  { name: "CapCut", icon: SiCapcut },
  { name: "Fiverr", icon: SiFiverr },
  { name: "Vibecode", icon: Code2 },
  { name: "Business Suite", icon: LayoutDashboard },
];
import ctaImage from "@assets/download_(3)_1768908363469.webp";
import topFunnelImg from "@assets/download_(49)_1770656963246.png";
import middleFunnelImg from "@assets/download_(50)_1770656967005.png";
import backEndImg from "@assets/download_(51)_1770656970922.png";

// Service images
import magnetImg from "@assets/download_(56)_1770657826172.png";
import shoppingBagImg from "@assets/download_(55)_1770657829403.png";
import phoneGearImg from "@assets/download_(54)_1770657833620.png";
import shieldCardImg from "@assets/download_(53)_1770657837202.png";
import laptopArrowsImg from "@assets/download_(52)_1770657843802.png";
import megaphoneTargetImg from "@assets/download_(57)_1770657852209.png";

const serviceCategories = [
  {
    title: "Lead Generation",
    image: magnetImg,
    description: "High-intent lead acquisition systems designed to fill your pipeline with qualified prospects.",
    details: ["Meta & Google Ads", "LinkedIn Outreach", "Lead Magnet Creation", "Email Scraping & Verification"]
  },
  {
    title: "Sales Conversion",
    image: shoppingBagImg,
    description: "Turning interest into revenue through optimized sales funnels and automated follow-up sequences.",
    details: ["High-Converting Landing Pages", "CRM Implementation", "Appointment Setting Systems", "Sales Script Optimization"]
  },
  {
    title: "Social Growth",
    image: phoneGearImg,
    description: "Building authority and presence across social platforms to drive organic growth and brand equity.",
    details: ["Content Strategy", "Short-Form Video Editing", "Engagement Automation", "Community Management"]
  },
  {
    title: "Infrastructure",
    image: shieldCardImg,
    description: "Robust backend systems that ensure your business scales without breaking operational efficiency.",
    details: ["Automated Workflows", "Security & Compliance", "Data Protection", "System Architecture"]
  },
  {
    title: "Web Development",
    image: laptopArrowsImg,
    description: "Premium, high-performance websites built for speed, SEO, and maximum user conversion.",
    details: ["Custom React/Next.js Apps", "E-commerce Solutions", "API Integrations", "Performance Optimization"]
  },
  {
    title: "Marketing Strategy",
    image: megaphoneTargetImg,
    description: "Comprehensive growth blueprints that align your technology and sales for maximum ROAS.",
    details: ["Multi-Channel Orchestration", "Competitor Analysis", "Brand Positioning", "Data-Driven Scaling"]
  }
];

const testimonials = [
  {
    name: "",
    company: "Genflow",
    quote: "Revenue went from under $100K to $400K+ in a single quarter. The unified approach changed everything.",
    metric: "312% Revenue Growth",
  },
  {
    name: "",
    company: "Promerch",
    quote: "Nurtured over 1600 leads in the first 30 days. We finally have a system that works together instead of against itself.",
    metric: "Nurtured over 1600 leads",
  },
  {
    name: "",
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
  const [activeService, setActiveService] = useState<typeof serviceCategories[0] | null>(null);

  useEffect(() => {
    // Re-initialize Calendly inline widget if it's available
    const initCalendly = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/spidxrnetwork/45min',
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

  const handleBookCall = () => {
    // Scroll to the anchor near the bottom CTA section
    const anchor = document.getElementById('book-call-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      <div id="book-call-anchor" className="absolute bottom-0 h-0 w-0" />
      {/* HERO SECTION - Centered Layout */}
      <section className="relative min-h-screen flex items-center pt-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-center">
          <div className="flex flex-col items-center">
            {/* Centered Content */}
            <div className="max-w-4xl mx-auto">
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
                className="text-5xl md:text-7xl lg:text-[80px] text-charcoal mb-6 leading-[1.05] font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                data-testid="text-hero-heading"
              >
                We Build Systems{" "}
                <span className="text-gradient">That Scale Businesses</span>
              </motion.h1>

              <motion.p
                className="text-charcoal-medium text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
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
                  className="gold-gradient text-charcoal border-0 text-base px-10 py-7 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={handleBookCall}
                  data-testid="button-hero-cta"
                >
                  Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Social Proof Row */}
              <motion.div
                className="flex items-center justify-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex -space-x-2">
              {[logo1, logo2, logo3, logo4, pristinePolishLogo, clientLogoSpidxr].map((src, i) => (
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

        {/* Video Placeholder Below Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl mt-16"
        >
          <div
            className="relative aspect-video rounded-2xl overflow-hidden bg-charcoal/5 border border-charcoal/10 group cursor-pointer shadow-2xl"
            data-testid="hero-video-placeholder"
            onClick={() => setVideoModal(0)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img src={spidxrLogo4k} alt="SPIDXR NETWORK" className="h-10 w-auto mb-8 opacity-40" />
              <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-charcoal ml-1" fill="currentColor" />
              </div>
              <p className="text-charcoal font-medium text-lg mt-6">Meet the Founder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Logo Carousel */}
  <LogoCarousel />

  {/* Tech Integration Carousel */}
  <section className="py-10 bg-white overflow-hidden relative border-t border-charcoal/5" data-testid="section-tech-carousel">
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

    <p className="text-center text-xs text-charcoal-medium/60 tracking-[0.2em] uppercase mb-8">
      Experts in tech integration
    </p>

    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: [-2400, 0] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <tech.icon className="w-8 h-8 text-charcoal" />
            <span className="text-[10px] font-medium text-charcoal uppercase tracking-tighter">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
      {/* SERVICES - Square Grid */}
      <section className="py-24 bg-white" data-testid="section-services-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">The Unified Growth Stack</p>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-4 font-semibold leading-tight">
                Our <span className="text-gradient">Core Services</span>
              </h2>
              <p className="text-charcoal-medium text-lg max-w-xl mx-auto">
                Select a service to see how we build your growth infrastructure.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div 
                  className="aspect-square relative bg-cream rounded-2xl border border-charcoal/8 overflow-hidden cursor-pointer group hover-elevate transition-all duration-300"
                  onClick={() => setActiveService(service)}
                  data-testid={`service-card-${i}`}
                >
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-full aspect-square mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                      <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl text-charcoal font-semibold mb-2">{service.title}</h3>
                    <div className="w-8 h-1 bg-gold/30 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {activeService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={() => setActiveService(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-charcoal/5 transition-colors"
            >
              <X className="w-5 h-5 text-charcoal-medium" />
            </button>

            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-32 h-32 mb-6">
                <img src={activeService.image} alt={activeService.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl text-charcoal font-bold mb-3">{activeService.title}</h3>
              <p className="text-charcoal-medium leading-relaxed">
                {activeService.description}
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-xs font-bold text-gold uppercase tracking-[0.1em] mb-4">What we deliver:</p>
              <div className="grid grid-cols-1 gap-2">
                {activeService.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-cream/50 rounded-xl border border-charcoal/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-charcoal-medium text-sm font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="w-full gold-gradient text-charcoal font-semibold h-12 rounded-xl"
              onClick={() => {
                setActiveService(null);
                handleBookCall();
              }}
            >
              Book Strategy Call
            </Button>
          </motion.div>
        </div>
      )}

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

          <div className="grid md:grid-cols-3 gap-6 opacity-40 grayscale pointer-events-none select-none">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group" data-testid={`testimonial-card-${i}`}>
                  {/* Video Thumbnail */}
                  <div
                    className="relative aspect-video rounded-xl overflow-hidden bg-charcoal/5 border border-charcoal/8 mb-5"
                    data-testid={`testimonial-video-${i}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-charcoal/10">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                        <Play className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  {/* Quote */}
                  <p className="text-charcoal text-sm leading-relaxed mb-3 italic" data-testid={`text-testimonial-quote-${i}`}>"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-charcoal-medium text-xs font-medium" data-testid={`text-testimonial-company-${i}`}>{t.company}</p>
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
              <p className="text-xs mt-1">Founder video</p>
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
      <section className="py-32 relative overflow-hidden" data-testid="section-final-cta">
        <div className="absolute inset-0">
          <img
            src={ctaImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/85 to-charcoal/75"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4 font-medium">Ready to Unify?</p>
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-semibold leading-tight">
              Let's Build Your <span className="text-gold">Growth Engine</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Book a strategy call. We'll audit your current setup, identify opportunities, and show you exactly how a unified system transforms your business.
            </p>
            
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl mb-8 min-h-[700px] border border-gold/20">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/spidxrnetwork/45min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=C4A052" 
                style={{ minWidth: '320px', height: '700px' }}
                data-auto-load="true"
              />
            </div>

            <p className="text-white/50 text-sm">30 minutes. No obligation. Pure value.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
