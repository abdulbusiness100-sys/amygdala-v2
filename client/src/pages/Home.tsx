import { Link } from "wouter";
import { ArrowRight, Target, TrendingUp, Users, Calendar, CheckCircle2, LineChart, Brain, BarChart3, Bot, Sparkles, Settings, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Folder from "@/components/ui/3d-folder";
import heroBg from "@assets/hero_background.jpg";
import processBehavioralImg from "@assets/process_behavioral_design.jpg";
import processDataImg from "@assets/process_data_forecasting.jpg";
import processAiImg from "@assets/process_ai_automation.jpg";
import serviceAttractImg from "@assets/service_attract_qualify.jpg";
import serviceNurtureImg from "@assets/service_nurture_book.jpg";
import serviceCloseImg from "@assets/service_close_retain.jpg";

export default function Home() {
  const processGroups = [
    {
      title: "ATTRACT",
      projects: [{ 
        id: "1", 
        title: "Targeted Systems", 
        image: serviceAttractImg,
        details: ["Psychological Profiling", "Data-Driven Targeting", "Multi-Channel Distribution", "Pattern Interrupt Design"]
      }]
    },
    {
      title: "QUALIFY",
      projects: [{ 
        id: "2", 
        title: "Behavioral Filters", 
        image: processBehavioralImg,
        details: ["Automated Vetting", "Commitment Escalation", "Pain Point Mapping", "Intake Optimization"]
      }]
    },
    {
      title: "NURTURE",
      projects: [{ 
        id: "3", 
        title: "Automated Trust", 
        image: serviceNurtureImg,
        details: ["Behavioral Retargeting", "Authority Anchoring", "Scientific Content Loops", "Automated Sequence Optimization"]
      }]
    },
    {
      title: "BOOK",
      projects: [{ 
        id: "4", 
        title: "Deterministic Scheduling", 
        image: processDataImg,
        details: ["Frictionless Booking", "Confirmation Psychology", "Zero-Latency Handoff", "Calendar Density Management"]
      }]
    },
    {
      title: "CLOSE",
      projects: [{ 
        id: "5", 
        title: "High-Value Conversion", 
        image: serviceCloseImg,
        details: ["Sales Process Engineering", "Objection Pre-emption", "Contract Automation", "Value Anchoring"]
      }]
    },
    {
      title: "RETAIN",
      projects: [{ 
        id: "6", 
        title: "Lifecycle Optimization", 
        image: processAiImg,
        details: ["LTV Forecasting", "Churn Predicition", "Upsell Automation", "Referral Engineering"]
      }]
    }
  ];

  return (
    <div className="overflow-hidden relative min-h-screen">
      {/* Global Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>
      
      {/* Animated Orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-[#6b7b3a]/10 rounded-full blur-[128px] animate-pulse delay-1000 z-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10">

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 mx-auto">
              <Sparkles className="w-4 h-4 text-[#6b7b3a]" />
              <span className="text-[#6b7b3a] font-medium text-sm tracking-wider uppercase">Psychology • Data • AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              We build & scale businesses with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b7b3a] via-white to-primary">
                High-Level Growth Systems
              </span>
            </h1>

            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Through scientific application of your own business data, market performance and economics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services#book-call">
                <Button size="lg" variant="khaki" className="text-lg px-8 py-6">
                  Start Your Engine <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/what-we-do">
                <Button size="lg" variant="glass" className="text-lg px-8 py-6">
                  See The Mechanism
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 border-y border-white/5 relative overflow-visible z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {processGroups.map((group, index) => (
              <ScrollReveal key={index} delay={index * 1}>
                <div className="flex flex-col items-center gap-4">
                  <Folder title={group.title} projects={group.projects} className="w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                If you're posting but not <span className="text-[#6b7b3a]">converting...</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Your "marketing" is just noise. The market doesn't need more content. It needs clarity. Most firms rely on hope-marketing: throw content at the wall and pray for a lead.
              </p>
              <div className="p-6 bg-white/5 border-l-4 border-primary rounded-r-xl">
                <p className="text-white italic text-lg">
                  "We don't do hope. We build deterministic systems that turn strangers into high-value clients predictably."
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal delay={2}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
                  <div className="text-5xl font-bold text-[#6b7b3a] mb-2">0%</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Predictability</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
                  <div className="text-5xl font-bold text-[#6b7b3a] mb-2">100h+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Wasted Monthly</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={4} className="col-span-2">
                <div className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-2xl text-center shadow-2xl shadow-primary/20">
                  <h3 className="text-2xl font-bold text-white mb-2">The Fix</h3>
                  <p className="text-blue-100">A closed-loop system that qualifies leads before you ever speak to them.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Amygdala Method */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                The <span className="text-gradient">Amygdala</span> Method
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We target the reptilian brain—the decision maker. Logic validates, but emotion decides.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: 'Behavioral Design', 
                desc: 'Every touchpoint is engineered to trigger specific psychological responses that build trust and authority.',
                color: 'text-primary' 
              },
              { 
                icon: BarChart3, 
                title: 'Data & Forecasting', 
                desc: 'No guesswork. We use predictive analytics to model your growth trajectory before spending a dollar.',
                color: 'text-[#6b7b3a]' 
              },
              { 
                icon: Bot, 
                title: 'AI Automation', 
                desc: 'Human connection where it matters. Ruthless automation everywhere else to scale without burnout.',
                color: 'text-primary' 
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 2}>
                <div className="h-full bg-background border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all hover:shadow-2xl group">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
             <h2 className="text-4xl md:text-5xl text-white text-center mb-16">
               Results You Can <span className="text-[#6b7b3a]">Measure</span>
             </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: 100, label: "Qualified Leads", suffix: "+" },
              { value: 2, label: "More Booked Calls", suffix: "x", subtext: "ICP aligned" },
              { value: 40, label: "Close Rate", suffix: "%" }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 1.5}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl text-center">
                  <div className="text-6xl font-display font-bold text-white mb-2">
                    <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-[#6b7b3a] font-bold tracking-wider uppercase text-sm">{stat.label}</div>
                  {stat.subtext && <div className="text-gray-400 text-xs mt-1">{stat.subtext}</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Roadmap */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl text-center text-white mb-16">
              <span className="text-gradient">Implementation</span> Roadmap
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[#6b7b3a] to-primary opacity-30"></div>
             
             {[
               { num: "01", title: "Audit", icon: Target, desc: "We tear down your current process to find the leaks." },
               { num: "02", title: "Rebuild", icon: Settings, desc: "We engineer your new offer and acquisition assets." },
               { num: "03", title: "Rollout", icon: Rocket, desc: "We launch, gather data, and optimize for scale." }
             ].map((step, i) => (
               <ScrollReveal key={i} delay={i * 2} className="relative z-10 text-center">
                 <div className="w-24 h-24 mx-auto bg-background border-4 border-white/10 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-xl">
                   {step.num}
                 </div>
                 <div className="bg-background border border-white/10 p-8 rounded-2xl">
                   <step.icon className="w-8 h-8 text-[#6b7b3a] mx-auto mb-4" />
                   <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                   <p className="text-gray-400">{step.desc}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden text-center z-10">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Build Your <span className="text-[#6b7b3a]">Growth Machine</span>?
            </h2>
            <Link href="/services#book-call">
              <Button size="lg" variant="khaki" className="text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-[#6b7b3a]/40">
                Book Your Strategy Call <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
