import ScrollReveal from "@/components/ScrollReveal";
import { Target, Brain, MessageSquare, Calendar, Phone, LineChart, CheckCircle2, Clock } from "lucide-react";
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

  const weeklyBreakdown = [
    { week: 'Week 1-2', title: 'Discovery & Audit', tasks: ['Complete business audit', 'Customer journey analysis', 'Define KPIs'] },
    { week: 'Week 3-4', title: 'Strategy & Architecture', tasks: ['Funnel design', 'Copy & messaging', 'Tech stack selection'] },
    { week: 'Week 5-6', title: 'Build & Configure', tasks: ['Landing page construction', 'Email/SMS sequences', 'CRM setup'] },
    { week: 'Week 7-8', title: 'Launch & Optimize', tasks: ['Soft launch', 'Tracking setup', 'Performance tweaks'] },
    { week: 'Week 9+', title: 'Scale & Iterate', tasks: ['A/B testing', 'Channel expansion', 'Monthly reviews'] },
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
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Implementation Timeline</h2>
          
          <div className="space-y-8 relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-white/10 lg:-ml-0.5"></div>
            
            {weeklyBreakdown.map((week, i) => (
              <ScrollReveal key={i} className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                <div className={`pl-12 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-0' : 'lg:col-start-2 lg:pl-0'}`}>
                   <div className="bg-background border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all">
                     <div className={`flex items-center gap-2 mb-3 text-sm font-bold text-[#6b7b3a] ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                       <Clock className="w-4 h-4" /> {week.week}
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">{week.title}</h3>
                     <ul className={`text-gray-400 text-sm space-y-1 ${i % 2 === 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                       {week.tasks.map((task, ti) => (
                         <li key={ti}>• {task}</li>
                       ))}
                     </ul>
                   </div>
                </div>
                {/* Dot */}
                <div className="absolute left-2 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background lg:-ml-2 mt-6 lg:mt-0"></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
