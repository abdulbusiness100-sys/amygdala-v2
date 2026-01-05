import ScrollReveal from "@/components/ScrollReveal";
import { Target, Brain, MessageSquare, Calendar, Phone, LineChart, CheckCircle2, Clock, Search, Compass, Palette, Code, Rocket, TrendingUp, Zap, Settings, BarChart3, Users, ArrowRight } from "lucide-react";
import processBehavioral from "@assets/process_behavioral_design.jpg";
import processData from "@assets/process_data_forecasting.jpg";
import processAi from "@assets/process_ai_automation.jpg";
import heroBg from "@assets/hero_background.jpg";

export default function WhatWeDo() {
  const systemDiagram = [
    { icon: Target, label: 'Lead Capture', description: 'Multi-channel acquisition funnels', color: 'bg-primary' },
    { icon: Brain, label: 'Behavioral Scoring', description: 'AI-powered lead qualification', color: 'bg-[#6b7b3a]' },
    { icon: MessageSquare, label: 'Nurture Sequences', description: 'Psychology-driven follow-up', color: 'bg-primary' },
    { icon: Calendar, label: 'Smart Booking', description: 'Automated calendar management', color: 'bg-[#6b7b3a]' },
    { icon: Phone, label: 'Sales Enablement', description: 'Conversion-optimized handoff', color: 'bg-primary' },
    { icon: LineChart, label: 'Live Dashboard', description: 'Real-time performance data', color: 'bg-[#6b7b3a]' },
  ];

  const timelinePhases = [
    {
      phase: 'Phase 1',
      week: 'Week 1-2',
      title: 'Discovery & Deep Audit',
      subtitle: 'Understanding Your Business DNA',
      icon: Search,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
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
      week: 'Week 3-4',
      title: 'Strategy & Architecture',
      subtitle: 'Building Your Growth Blueprint',
      icon: Compass,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
      tasks: [
        { task: 'Funnel architecture design', detail: 'Custom-built for your ideal client' },
        { task: 'Messaging & positioning framework', detail: 'Words that trigger action' },
        { task: 'Tech stack selection', detail: 'Right tools, zero bloat' },
        { task: 'KPI dashboard design', detail: 'Metrics that actually matter' },
      ],
      deliverable: 'Growth Strategy Deck'
    },
    {
      phase: 'Phase 3',
      week: 'Week 5-6',
      title: 'Creative & Content',
      subtitle: 'Crafting Your Assets',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      borderColor: 'border-pink-500/30',
      bgColor: 'bg-pink-500/10',
      textColor: 'text-pink-400',
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
      week: 'Week 7-8',
      title: 'Build & Configure',
      subtitle: 'Engineering Your System',
      icon: Code,
      color: 'from-[#6b7b3a] to-[#8fa04d]',
      borderColor: 'border-[#6b7b3a]/30',
      bgColor: 'bg-[#6b7b3a]/10',
      textColor: 'text-[#6b7b3a]',
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
      week: 'Week 9-10',
      title: 'Launch & Calibrate',
      subtitle: 'Going Live with Precision',
      icon: Rocket,
      color: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400',
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
      week: 'Week 11+',
      title: 'Scale & Dominate',
      subtitle: 'Continuous Growth Engine',
      icon: TrendingUp,
      color: 'from-primary to-blue-500',
      borderColor: 'border-primary/30',
      bgColor: 'bg-primary/10',
      textColor: 'text-primary',
      tasks: [
        { task: 'A/B testing program', detail: 'Always improving, never stagnant' },
        { task: 'Channel expansion', detail: 'New traffic sources, same conversion power' },
        { task: 'Conversion rate optimization', detail: 'Squeezing every drop of ROI' },
        { task: 'Monthly strategy reviews', detail: 'Adapt, iterate, accelerate' },
      ],
      deliverable: 'Monthly Growth Reports'
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Global Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>
      
      {/* Hero */}
      <section className="pt-32 pb-20 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
               We Build <span className="text-[#6b7b3a]">Complete</span> Acquisition Systems
             </h1>
             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
               From first touch to closed deal, we engineer every step of your client journey using psychology, data, and AI.
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* System Diagram */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {systemDiagram.map((item, i) => (
               <ScrollReveal key={i} delay={i * 1}>
                 <div className="bg-background border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all">
                   <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 text-white`}>
                     <item.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                   <p className="text-gray-400 text-sm">{item.description}</p>
                 </div>
               </ScrollReveal>
             ))}
           </div>
        </div>
      </section>

      {/* Deep Dive Pillars */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
               <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                 <img src={processBehavioral} alt="Behavioral" className="object-cover w-full h-full" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
               </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <h2 className="text-3xl font-bold text-white mb-4">Behavioral Design</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Every message is engineered using proven psychological principles. We leverage cognitive biases and emotional triggers.
              </p>
              <ul className="space-y-3">
                {['Loss aversion triggers', 'Social proof positioning', 'Cognitive ease optimization'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#6b7b3a]" /> {t}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={2} className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-white mb-4">Data & Forecasting</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Real-time visibility into every metric. Know exactly where each lead is and what's converting.
              </p>
              <ul className="space-y-3">
                {['Live performance dashboards', 'Predictive lead scoring', 'Attribution modeling'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
               <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                 <img src={processData} alt="Data" className="object-cover w-full h-full" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
               </div>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
               <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                 <img src={processAi} alt="AI" className="object-cover w-full h-full" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
               </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <h2 className="text-3xl font-bold text-white mb-4">AI Automation</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Intelligent systems that work 24/7. AI handles the repetitive work while you focus on closing.
              </p>
              <ul className="space-y-3">
                {['AI chatbots for qualification', 'Smart email/SMS sequences', 'Automated booking'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#6b7b3a]" /> {t}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <Clock className="w-4 h-4 text-[#6b7b3a]" />
                <span className="text-[#6b7b3a] font-medium text-sm tracking-wider uppercase">Your Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Implementation <span className="text-[#6b7b3a]">Timeline</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A proven 11-week process that transforms your business from lead-starved to consistently closing high-value clients.
              </p>
            </div>
          </ScrollReveal>

          {/* Progress Bar */}
          <div className="hidden lg:block mb-16">
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-[#6b7b3a] via-orange-500 to-primary rounded-full"></div>
            </div>
            <div className="flex justify-between mt-4">
              {timelinePhases.map((phase, i) => (
                <div key={i} className="text-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${phase.color} mx-auto mb-2 ring-4 ring-background`}></div>
                  <span className="text-xs text-gray-500">{phase.week}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {timelinePhases.map((phase, i) => (
              <ScrollReveal key={i} delay={i * 1}>
                <div className={`relative h-full bg-white/5 backdrop-blur-sm border ${phase.borderColor} rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group`}>
                  {/* Phase Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold ${phase.textColor} uppercase tracking-wider`}>{phase.phase}</span>
                          <span className="text-xs text-gray-500">|</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {phase.week}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className={`${phase.textColor} text-sm font-medium mb-6`}>{phase.subtitle}</p>

                  {/* Tasks */}
                  <div className="space-y-4 mb-6">
                    {phase.tasks.map((item, ti) => (
                      <div key={ti} className="flex items-start gap-3 group/task">
                        <div className={`w-5 h-5 rounded-full ${phase.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle2 className={`w-3 h-3 ${phase.textColor}`} />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{item.task}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable */}
                  <div className={`flex items-center gap-3 pt-4 border-t border-white/10`}>
                    <div className={`px-3 py-1 rounded-full ${phase.bgColor} ${phase.textColor} text-xs font-bold uppercase tracking-wider`}>
                      Deliverable
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{phase.deliverable}</span>
                    <ArrowRight className={`w-4 h-4 ${phase.textColor} ml-auto opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6b7b3a]/20 to-primary/20 border border-white/10">
                <Zap className="w-6 h-6 text-[#6b7b3a]" />
                <div className="text-left">
                  <p className="text-white font-bold">Ready to start your transformation?</p>
                  <p className="text-gray-400 text-sm">Most clients see their first qualified leads within 6 weeks.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
