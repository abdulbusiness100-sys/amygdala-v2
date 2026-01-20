import { useLocation } from "wouter";
import { useEffect, useRef, useState, Component, Suspense, lazy } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Clock, Search, Compass, Palette, Code, Rocket, TrendingUp, ArrowRight, Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

// Lazy load Globe component to handle WebGL errors gracefully
const Globe = lazy(() => import("react-globe.gl"));

// Check if WebGL is supported
function isWebGLSupported() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

// Error boundary for Globe component
class GlobeErrorBoundary extends Component<{children: React.ReactNode, fallback: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode, fallback: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: any) {
    console.log('Globe rendering error (WebGL may not be supported):', error);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function WhatWeDo() {
  const globeEl = useRef<any>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  
  // Phase locations on the globe (spread around the world)
  const phasePoints = [
    { lat: 40.7128, lng: -74.006, phase: "Phase 1", title: "Deep Dive Audit", color: "#C4A052" },
    { lat: 51.5074, lng: -0.1278, phase: "Phase 2", title: "Unified Architecture", color: "#C4A052" },
    { lat: 35.6762, lng: 139.6503, phase: "Phase 3", title: "Creative & Content", color: "#C4A052" },
    { lat: -33.8688, lng: 151.2093, phase: "Phase 4", title: "Systematic Build", color: "#C4A052" },
    { lat: 25.2048, lng: 55.2708, phase: "Phase 5", title: "Launch & Calibrate", color: "#C4A052" },
    { lat: -22.9068, lng: -43.1729, phase: "Phase 6", title: "Growth Activation", color: "#C4A052" },
  ];
  
  // Arc connections between phases
  const arcsData = [
    { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, color: "#C4A052" },
    { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503, color: "#C4A052" },
    { startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, color: "#C4A052" },
    { startLat: -33.8688, startLng: 151.2093, endLat: 25.2048, endLng: 55.2708, color: "#C4A052" },
    { startLat: 25.2048, startLng: 55.2708, endLat: -22.9068, endLng: -43.1729, color: "#C4A052" },
  ];

  // Check WebGL on mount
  useEffect(() => {
    setWebGLSupported(isWebGLSupported());
  }, []);

  useEffect(() => {
    if (globeEl.current && webGLSupported) {
      try {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.5;
        globeEl.current.pointOfView({ lat: 39.8, lng: -98.5, altitude: 2.5 });
      } catch (e) {
        setWebGLSupported(false);
      }
    }
  }, [globeReady, webGLSupported]);
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

  const timelinePhases = [
    {
      phase: 'Phase 1',
      week: 'Week 1-2',
      title: 'Deep Dive Audit',
      subtitle: 'Understanding Your Business DNA',
      icon: Search,
      tasks: [
        { task: 'Complete business model analysis', detail: 'Revenue streams, margins, and growth levers' },
        { task: 'Customer journey mapping', detail: 'Every touchpoint from awareness to purchase' },
        { task: 'Competitor intelligence report', detail: 'What your top 5 competitors are doing differently' },
        { task: 'Current funnel audit', detail: 'Finding the leaks costing you money' },
      ],
      deliverable: 'Strategic Audit Report'
    },
    {
      phase: 'Phase 2',
      week: 'Week 2-3',
      title: 'Unified Architecture',
      subtitle: 'Building Your Growth Blueprint',
      icon: Compass,
      tasks: [
        { task: 'System blueprint creation', detail: 'Custom-built for your ideal client' },
        { task: 'Integration planning', detail: 'Connecting all the pieces' },
        { task: 'Resource allocation', detail: 'Right people, right places' },
        { task: 'Timeline development', detail: 'Clear milestones and deliverables' },
      ],
      deliverable: 'Growth Strategy Deck'
    },
    {
      phase: 'Phase 3',
      week: 'Week 3-6',
      title: 'Creative & Content',
      subtitle: 'Crafting Your Assets',
      icon: Palette,
      tasks: [
        { task: 'Landing page copywriting', detail: 'Psychology-driven conversion copy' },
        { task: 'Email sequence creation', detail: '12+ automated nurture emails' },
        { task: 'Ad creative development', detail: 'Scroll-stopping visuals and hooks' },
        { task: 'Lead magnet production', detail: 'Value-packed content that converts' },
      ],
      deliverable: 'Complete Asset Library'
    },
    {
      phase: 'Phase 4',
      week: 'Week 6-8',
      title: 'Systematic Build',
      subtitle: 'Engineering Your System',
      icon: Code,
      tasks: [
        { task: 'Landing page construction', detail: 'Mobile-optimized, fast-loading pages' },
        { task: 'CRM & automation setup', detail: 'Seamless lead flow management' },
        { task: 'Email/SMS sequence configuration', detail: 'Timed perfectly for maximum impact' },
        { task: 'Tracking & pixel installation', detail: 'Full visibility on every action' },
      ],
      deliverable: 'Live Funnel Infrastructure'
    },
    {
      phase: 'Phase 5',
      week: 'Week 8-10',
      title: 'Launch & Calibrate',
      subtitle: 'Going Live with Precision',
      icon: Rocket,
      tasks: [
        { task: 'Soft launch & testing', detail: 'Controlled release to catch issues early' },
        { task: 'Ad campaign activation', detail: 'Strategic spend allocation' },
        { task: 'Real-time monitoring setup', detail: '24/7 performance visibility' },
        { task: 'Initial optimization passes', detail: 'Quick wins from early data' },
      ],
      deliverable: 'Launch Confirmation Report'
    },
    {
      phase: 'Phase 6',
      week: 'Week 10+',
      title: 'Growth Activation',
      subtitle: 'Continuous Growth Engine',
      icon: TrendingUp,
      tasks: [
        { task: 'A/B testing program', detail: 'Always improving, never stagnant' },
        { task: 'Channel expansion', detail: 'New traffic sources, same conversion power' },
        { task: 'Conversion rate optimization', detail: 'Squeezing every drop of ROI' },
        { task: 'Monthly strategy reviews', detail: 'Adapt, iterate, accelerate' },
      ],
      deliverable: 'Monthly Growth Reports'
    },
  ];

  const coreValues = [
    { icon: Target, title: "Precision", desc: "Every action is deliberate. Every decision is data-driven. No waste." },
    { icon: Users, title: "Partnership", desc: "We're not vendors. We're partners invested in your success." },
    { icon: Lightbulb, title: "Innovation", desc: "We leverage cutting-edge tools and strategies others haven't discovered." },
  ];

  return (
    <div className="overflow-hidden relative min-h-screen grain">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-px h-12 bg-gold mx-auto mb-8"></div>
            <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">OUR PROCESS</p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6">
              From Audit to Empire.<br />
              <span className="text-gradient">A Proven Process.</span>
            </h1>
            <p className="text-xl text-charcoal-medium max-w-2xl mx-auto">
              We don't guess. We follow a systematic methodology that has generated millions in revenue for our clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">OUR PHILOSOPHY</p>
              <h2 className="font-display text-4xl text-charcoal">What Drives Us</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <ScrollReveal key={i} delay={i * 1}>
                <div className="glass p-8 rounded-2xl text-center h-full card-3d border-2 border-charcoal">
                  <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-charcoal" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">{value.title}</h3>
                  <p className="text-charcoal-medium text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Globe Section */}
      <section className="py-24 bg-white relative z-10" data-testid="section-globe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 mb-6">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-gold font-accent text-sm tracking-wider uppercase">Global Methodology</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                6 Phases. <span className="text-gradient">One System.</span>
              </h2>
              <p className="text-charcoal-medium text-lg max-w-2xl mx-auto">
                Our proven methodology connects every phase of your growth journey into a unified system.
              </p>
            </div>
          </ScrollReveal>

          {/* Globe Visualization */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-b from-charcoal to-charcoal-medium" data-testid="globe-container">
            <GlobeErrorBoundary fallback={
              <div className="flex flex-col items-center justify-center h-full" data-testid="globe-fallback">
                <div className="w-32 h-32 rounded-full gold-gradient flex items-center justify-center mb-6">
                  <Target className="w-16 h-16 text-charcoal" />
                </div>
                <h3 className="text-2xl font-display text-white mb-4">Global Methodology</h3>
                <div className="grid grid-cols-3 gap-4 max-w-2xl">
                  {phasePoints.map((point, i) => (
                    <div key={i} className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 rounded-full gold-gradient mx-auto mb-2 flex items-center justify-center">
                        <span className="text-charcoal font-bold text-sm">{i + 1}</span>
                      </div>
                      <p className="text-white text-sm font-display">{point.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            }>
              {webGLSupported ? (
                <Suspense fallback={
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }>
                  <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    pointsData={phasePoints}
                    pointAltitude={0.1}
                    pointRadius={0.5}
                    pointColor={() => "#C4A052"}
                    pointLabel={(d: any) => `<div class="bg-charcoal/90 text-white px-3 py-2 rounded-lg text-sm"><strong class="text-gold">${d.phase}</strong><br/>${d.title}</div>`}
                    arcsData={arcsData}
                    arcColor={() => "#C4A052"}
                    arcDashLength={0.4}
                    arcDashGap={0.2}
                    arcDashAnimateTime={2000}
                    arcStroke={0.5}
                    width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 1200) : 800}
                    height={500}
                    onGlobeReady={() => setGlobeReady(true)}
                  />
                </Suspense>
              ) : (
                <div className="flex flex-col items-center justify-center h-full" data-testid="globe-fallback">
                  <div className="w-32 h-32 rounded-full gold-gradient flex items-center justify-center mb-6">
                    <Target className="w-16 h-16 text-charcoal" />
                  </div>
                  <h3 className="text-2xl font-display text-white mb-4">Global Methodology</h3>
                  <div className="grid grid-cols-3 gap-4 max-w-2xl">
                    {phasePoints.map((point, i) => (
                      <div key={i} className="text-center p-4 bg-white/5 rounded-xl">
                        <div className="w-8 h-8 rounded-full gold-gradient mx-auto mb-2 flex items-center justify-center">
                          <span className="text-charcoal font-bold text-sm">{i + 1}</span>
                        </div>
                        <p className="text-white text-sm font-display">{point.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </GlobeErrorBoundary>
            
            {/* Phase Legend */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-3" data-testid="phase-legend">
              {phasePoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full" data-testid={`phase-item-${i}`}>
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span className="text-white text-xs font-accent">Phase {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline Mindmap */}
      <section className="py-24 bg-cream relative z-10" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 mb-6">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-gold font-accent text-sm tracking-wider uppercase">Your Journey</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Implementation <span className="text-gradient">Timeline</span>
              </h2>
              <p className="text-charcoal-medium text-lg max-w-2xl mx-auto">
                A proven 8-12 week process that transforms your business from lead-starved to consistently closing high-value clients.
              </p>
            </div>
          </ScrollReveal>

          {/* Mindmap Timeline with Arrows */}
          <div className="relative mb-16">
            {/* Grid layout for mindmap */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timelinePhases.map((phase, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative">
                    {/* Phase Card */}
                    <div className="bg-white border-2 border-charcoal rounded-2xl p-6 shadow-lg hover:border-gold transition-colors duration-300 h-full">
                      {/* Phase Number Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-md">
                          <span className="text-charcoal font-display font-bold">{i + 1}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-charcoal-medium">
                          <Clock className="w-3 h-3" />
                          <span>{phase.week}</span>
                        </div>
                      </div>
                      
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                          <phase.icon className="w-5 h-5 text-charcoal" />
                        </div>
                        <div>
                          <span className="text-xs font-accent font-bold text-gold uppercase tracking-wider">{phase.phase}</span>
                          <h3 className="font-display text-lg text-charcoal">{phase.title}</h3>
                        </div>
                      </div>
                      
                      {/* Subtitle */}
                      <p className="text-charcoal-medium text-sm mb-4">{phase.subtitle}</p>
                      
                      {/* Key Tasks */}
                      <div className="space-y-2 mb-4">
                        {phase.tasks.slice(0, 2).map((item, ti) => (
                          <div key={ti} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-charcoal-medium text-sm">{item.task}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Deliverable */}
                      <div className="flex items-center gap-2 pt-4 border-t border-charcoal/10">
                        <div className="px-2 py-1 rounded-full bg-gold/10 text-gold text-xs font-accent font-bold uppercase tracking-wider">
                          Deliverable
                        </div>
                        <span className="text-charcoal text-xs font-medium">{phase.deliverable}</span>
                      </div>
                    </div>
                    
                    {/* Arrow to next phase */}
                    {i < timelinePhases.length - 1 && (
                      <>
                        {/* Horizontal arrow (for desktop - within row) */}
                        {(i % 3 !== 2) && (
                          <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 items-center">
                            <div className="w-3 h-0.5 bg-gold"></div>
                            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-gold"></div>
                          </div>
                        )}
                        {/* Vertical arrow (for tablet - end of row) */}
                        {(i % 2 === 1) && (
                          <div className="hidden md:flex lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10 flex-col items-center">
                            <div className="w-0.5 h-3 bg-gold"></div>
                            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-gold"></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            {/* Flow arrows between rows (desktop) */}
            <div className="hidden lg:block absolute top-[calc(50%-1rem)] right-8 z-10">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-gold"></div>
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-gold"></div>
              </div>
            </div>
            
            {/* End Success Node */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-gold"></div>
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-xl">
                  <Rocket className="w-8 h-8 text-charcoal" />
                </div>
                <p className="font-accent text-gold text-sm mt-3 uppercase tracking-wider">Launch & Scale</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 glass px-8 py-6 rounded-2xl">
                <div className="text-left">
                  <p className="font-display text-charcoal font-bold">Ready to start your transformation?</p>
                  <p className="text-charcoal-medium text-sm">Most clients see their first qualified leads within 6 weeks.</p>
                </div>
                <Button 
                  className="gold-gradient text-charcoal border-0 font-accent"
                  onClick={handleBookCall}
                >
                  Book a Call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
