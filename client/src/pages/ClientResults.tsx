import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle2,
  BarChart3,
  Building2,
  GraduationCap,
  Sparkles,
  Store,
  Globe,
  Smartphone,
  LineChart,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
  Area,
  AreaChart,
  Legend
} from 'recharts';

import nurCafeDashboardImg from "@assets/download_(40)_1770653498371.png";
import adsPerformanceImg from "@assets/download_(41)_1770653504146.png";
import oraSuitesImg from "@assets/download_(42)_1770653508684.png";
import nurCafeAppImg from "@assets/download_(44)_1770653516446.png";

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const genflowSalesData = [
  { month: 'Aug', revenue: 47100, deals: 11 },
  { month: 'Sep', revenue: 95300, deals: 16 },
  { month: 'Oct', revenue: 54800, deals: 11 },
  { month: 'Nov', revenue: 55000, deals: 10 },
  { month: 'Dec', revenue: 69300, deals: 11 },
  { month: 'Jan', revenue: 93000, deals: 13 },
];

const genflowSourceData = [
  { name: 'Meta Ads', value: 45, color: '#C4A052' },
  { name: 'Organic', value: 35, color: '#2C2C2C' },
  { name: 'Email', value: 12, color: '#A8935F' },
  { name: 'Referral', value: 8, color: '#D4C494' },
];

const faseehaSalesData = [
  { month: 'Nov 1-15', sales: 8400, orders: 160 },
  { month: 'Nov 16-30', sales: 11200, orders: 210 },
  { month: 'Dec 1-15', sales: 9800, orders: 185 },
  { month: 'Dec 16-31', sales: 12600, orders: 235 },
  { month: 'Jan 1-15', sales: 14200, orders: 265 },
  { month: 'Jan 16-31', sales: 15800, orders: 295 },
];

const faseehaTrafficData = [
  { week: 'Week 1', visitors: 1200, sessions: 1450, bounceRate: 55 },
  { week: 'Week 2', visitors: 1800, sessions: 2100, bounceRate: 50 },
  { week: 'Week 3', visitors: 2400, sessions: 2900, bounceRate: 48 },
  { week: 'Week 4', visitors: 2100, sessions: 2600, bounceRate: 45 },
  { week: 'Week 5', visitors: 1600, sessions: 2000, bounceRate: 52 },
  { week: 'Week 6', visitors: 1450, sessions: 1800, bounceRate: 54 },
  { week: 'Week 7', visitors: 1300, sessions: 1650, bounceRate: 58 },
  { week: 'Week 8', visitors: 1150, sessions: 1450, bounceRate: 60 },
];

const nurCafeRevenueData = [
  { year: '2024', revenue: 1100000, profit: 22000, profitMargin: 2 },
  { year: '2025', revenue: 1700000, profit: 136000, profitMargin: 8 },
  { year: '2026 (Proj)', revenue: 2100000, profit: 315000, profitMargin: 15 },
];

const adCampaignData = [
  { campaign: 'MBA', spend: 442, revenue: 1037, roas: 2.35 },
  { campaign: 'Playbook', spend: 7603, revenue: 5210, roas: 0.69 },
  { campaign: 'Book-a-Call', spend: 3147, revenue: 4242, roas: 1.35 },
];

const callPerformanceData = [
  { name: 'Closed', value: 41, color: '#C4A052' },
  { name: 'No Show', value: 33, color: '#E5E5E5' },
  { name: 'Cancelled', value: 19, color: '#CCCCCC' },
  { name: 'Rescheduled', value: 7, color: '#999999' },
];

const industriesServed = [
  { icon: Building2, name: "Clinics", count: "15+" },
  { icon: Store, name: "Cafes & Restaurants", count: "20+" },
  { icon: Target, name: "Marketing Agencies", count: "25+" },
  { icon: Users, name: "Law Firms", count: "8+" },
  { icon: GraduationCap, name: "Educational Institutes", count: "12+" },
  { icon: Sparkles, name: "Dental Practices", count: "10+" },
];

export default function ClientResults() {
  const handleBookCall = () => {
    window.location.href = '/services#book-call';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal overflow-hidden" data-testid="section-results-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 mb-6">
              <BarChart3 className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm tracking-wider uppercase font-medium">Proven Results</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white mb-6 font-bold tracking-tight" data-testid="text-results-heading">
              Client <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Real businesses. Real data. Real transformation. See how our full-stack growth operating system 
              has helped companies across industries maximize revenue and scale effectively.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center" data-testid="stat-revenue">
                <p className="text-4xl md:text-5xl text-gold font-bold">$2.6M+</p>
                <p className="text-cream/60 text-sm uppercase tracking-wider mt-2">Generated in 2025</p>
              </div>
              <div className="text-center" data-testid="stat-businesses">
                <p className="text-4xl md:text-5xl text-gold font-bold">60+</p>
                <p className="text-cream/60 text-sm uppercase tracking-wider mt-2">Businesses Impacted</p>
              </div>
              <div className="text-center" data-testid="stat-close-rate">
                <p className="text-4xl md:text-5xl text-gold font-bold">45%</p>
                <p className="text-cream/60 text-sm uppercase tracking-wider mt-2">Avg Close Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CASE STUDY 1: GENFLOW ===== */}
      {/* Navy blue & gold - reflecting the SPIDXR ads dashboard brand */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden" data-testid="section-genflow">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C4A052]/5 via-transparent to-[#C4A052]/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 w-fit">
                <span className="text-gold text-xs tracking-wider uppercase font-medium">Case Study 01</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl text-white mb-3 font-bold tracking-tight" data-testid="text-genflow-heading">
              Genflow
            </h2>
            <p className="text-[#C4A052] text-lg font-medium mb-2">Sales Growth Consulting</p>
            <p className="text-white/50 text-base max-w-2xl mb-12">
              From under $100K quarterly to $400K+ through rigorous sales structuring, 
              lead nurturing optimization, and full sales cycle systemization.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl text-white mb-6 font-semibold">What We Delivered</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "High-level inbound tailored growth plans",
                    "Rigorous sales structure and execution",
                    "Lead nurturing optimization",
                    "Full sales cycle systemization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "$400K+", label: "Q4 Revenue" },
                    { value: "45%", label: "Close Rate" },
                    { value: "$100K", label: "First 100K Month" },
                    { value: "4x", label: "Revenue Growth" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4 text-center border border-gold/15" data-testid={`stat-genflow-${i}`}>
                      <p className="text-2xl text-gold font-bold">{stat.value}</p>
                      <p className="text-white/50 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg text-white mb-4 font-medium">Monthly Revenue Growth</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={genflowSalesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" fontSize={12} />
                      <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                      <Tooltip 
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                        contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff' }}
                      />
                      <Bar dataKey="revenue" fill="#C4A052" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg text-white mb-4 font-medium">Lead Sources Distribution</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={genflowSourceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {genflowSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [`${value}%`, 'Share']}
                        contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff' }}
                      />
                      <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Ads Performance Showcase Image */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-2xl overflow-hidden border border-gold/20">
              <img 
                src={adsPerformanceImg} 
                alt="SPIDXR Ads Performance Dashboard showing ROAS 2.35 and 700+ leads" 
                className="w-full object-cover"
                data-testid="img-genflow-ads"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CASE STUDY 2: FASEEHA INSTITUTE ===== */}
      {/* Warm cream/beige - educational, clean feel */}
      <section className="py-24 bg-gradient-to-b from-[#f5f0e8] to-[#ebe4d6] relative" data-testid="section-faseeha">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal/10 w-fit">
                <span className="text-charcoal text-xs tracking-wider uppercase font-medium">Case Study 02</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl text-charcoal mb-3 font-bold tracking-tight" data-testid="text-faseeha-heading">
              Faseeha Institute
            </h2>
            <p className="text-gold text-lg font-medium mb-2">Full Stack Build</p>
            <p className="text-charcoal/60 text-base max-w-2xl mb-12">
              Complete digital transformation: website rebuild, AI automations, and targeted lead 
              generation campaigns delivering 700+ leads in just 30 days.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Globe, title: "Complete Website Rebuild", desc: "Recreated their entire digital presence with optimized SEO and high-converting landing pages.", stat: "50%", statLabel: "Increase in Traffic" },
              { icon: Users, title: "Lead Generation Campaign", desc: "Built targeted funnels to maximize lead capture and conversion through strategic marketing.", stat: "700+", statLabel: "Leads in 30 Days" },
              { icon: Sparkles, title: "AI Automations", desc: "Integrated AI systems for client nurturing, data tracking, and internal process optimization.", stat: "100%", statLabel: "Unified Stack" },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10 h-full shadow-sm" data-testid={`card-faseeha-${i}`}>
                  <card.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="text-xl text-charcoal mb-3 font-semibold">{card.title}</h3>
                  <p className="text-charcoal/60 text-sm mb-4">{card.desc}</p>
                  <div className="bg-gold/8 rounded-xl p-4 text-center">
                    <p className="text-3xl text-gold font-bold">{card.stat}</p>
                    <p className="text-charcoal/60 text-sm">{card.statLabel}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-sm">
                <h4 className="text-lg text-charcoal mb-4 font-medium">Website Traffic Growth</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={faseehaTrafficData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                    <XAxis dataKey="week" stroke="#999" fontSize={12} />
                    <YAxis stroke="#999" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ background: '#2C2C2C', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="visitors" stackId="1" stroke="#C4A052" fill="#C4A052" fillOpacity={0.6} name="Unique Visitors" />
                    <Area type="monotone" dataKey="sessions" stackId="2" stroke="#2C2C2C" fill="#2C2C2C" fillOpacity={0.3} name="Sessions" />
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-sm">
                <h4 className="text-lg text-charcoal mb-4 font-medium">Sales Performance (3 Months)</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <RechartsLineChart data={faseehaSalesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                    <XAxis dataKey="month" stroke="#999" fontSize={10} />
                    <YAxis stroke="#999" fontSize={12} tickFormatter={(v) => `£${v/1000}k`} />
                    <Tooltip 
                      formatter={(value: number, name: string) => [name === 'sales' ? `£${value.toLocaleString()}` : value, name === 'sales' ? 'Sales' : 'Orders']}
                      contentStyle={{ background: '#2C2C2C', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="sales" stroke="#C4A052" strokeWidth={3} dot={{ fill: '#C4A052', r: 5 }} name="Sales" />
                    <Legend />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY 3: ORA SUITES ===== */}
      {/* Warm rose/blush tones - matching the Ora Suites branding */}
      <section className="py-24 bg-gradient-to-b from-[#c4a68a] to-[#b8977e] relative overflow-hidden" data-testid="section-orasuites">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 w-fit">
                <span className="text-white text-xs tracking-wider uppercase font-medium">Case Study 03</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl text-white mb-3 font-bold tracking-tight" data-testid="text-orasuites-heading">
              Ora Suites
            </h2>
            <p className="text-white/80 text-lg font-medium mb-2">Complete Brand Build & Launch</p>
            <p className="text-white/60 text-base max-w-2xl mb-6">
              Built the entire brand identity, website, and digital presence from the ground up for this 
              premium women-only wellness sanctuary. From concept to live at orasuites.com.
            </p>
            <a 
              href="https://www.orasuites.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-gold transition-colors mb-12"
              data-testid="link-orasuites"
            >
              Visit orasuites.com <ExternalLink className="w-4 h-4" />
            </a>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15">
                <h3 className="text-xl text-white mb-6 font-semibold">What We Built</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Complete brand identity & visual design",
                    "Custom website design and development",
                    "Service category architecture (Aesthetics, Nails, Hair, Laser & Wellness)",
                    "Online booking system integration",
                    "SEO-optimized content strategy",
                    "Mobile-responsive premium experience"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "100%", label: "Built from Scratch" },
                    { value: "4", label: "Service Categories" },
                    { value: "Live", label: "orasuites.com" },
                    { value: "Premium", label: "Brand Identity" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4 text-center border border-white/10" data-testid={`stat-ora-${i}`}>
                      <p className="text-2xl text-gold font-bold">{stat.value}</p>
                      <p className="text-white/50 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src={oraSuitesImg} 
                  alt="Ora Suites website - Women-Only Wellness Sanctuary across devices" 
                  className="w-full object-cover"
                  data-testid="img-orasuites"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY 4: NUR CAFE ===== */}
      {/* Dark brown/coffee tones - matching Nur Cafe brand */}
      <section className="py-24 bg-gradient-to-b from-[#2c1f14] to-[#1a1209] relative overflow-hidden" data-testid="section-nurcafe">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C4A052]/5 via-transparent to-[#C4A052]/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C4A052]/15 w-fit">
                <span className="text-gold text-xs tracking-wider uppercase font-medium">Case Study 04</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl text-white mb-3 font-bold tracking-tight" data-testid="text-nurcafe-heading">
              Nur Cafe
            </h2>
            <p className="text-[#C4A052] text-lg font-medium mb-2">Operations, Growth & App Build</p>
            <p className="text-white/50 text-base max-w-2xl mb-12">
              Complete business transformation: operations overhaul, custom AI dashboard, mobile ordering app, 
              and growth strategy taking revenue from £1.1M to £1.7M with expansion to 4 locations.
            </p>
          </ScrollReveal>

          {/* Revenue Stats Row */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Revenue Growth", before: "£1.1M", after: "£1.7M", growth: "+55%" },
                { label: "Profit Margin", before: "2%", after: "8%", growth: "+300%" },
                { label: "New Locations", before: "1", after: "4", growth: "+3 sites" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center" data-testid={`stat-nurcafe-${i}`}>
                  <p className="text-white/50 text-sm mb-2">{item.label}</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-white/60 text-lg">{item.before}</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                    <span className="text-gold text-2xl font-bold">{item.after}</span>
                  </div>
                  <span className="inline-block mt-2 text-xs bg-gold/15 text-gold px-3 py-1 rounded-full">{item.growth}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Dashboard & App Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="text-xl text-white mb-4 font-semibold">Custom AI Dashboard</h3>
                <p className="text-white/50 text-sm mb-6">
                  AI-powered sales manager showing real-time performance, revenue tracking, 
                  profit analysis, team management, and customer insights.
                </p>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={nurCafeDashboardImg} 
                    alt="Nur Cafe AI Sales Manager Dashboard showing revenue growth from £1.1M to £1.7M" 
                    className="w-full object-cover"
                    data-testid="img-nurcafe-dashboard"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-xl text-white mb-4 font-semibold">Mobile Ordering App</h3>
                <p className="text-white/50 text-sm mb-6">
                  Custom-built mobile app with online ordering, checkout system, loyalty points, 
                  and the full Nur Cafe menu experience.
                </p>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={nurCafeAppImg} 
                    alt="Nur Cafe mobile ordering app and website across multiple devices" 
                    className="w-full object-cover"
                    data-testid="img-nurcafe-app"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Revenue Chart */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.25}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg text-white mb-4 font-medium">Revenue & Profit Trajectory</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={nurCafeRevenueData} barGap={0}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="year" stroke="rgba(255,255,255,0.4)" fontSize={12} />
                    <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} tickFormatter={(v) => `£${v/1000000}M`} />
                    <Tooltip 
                      formatter={(value: number, name: string) => [
                        name === 'revenue' ? `£${(value/1000000).toFixed(2)}M` : `£${value.toLocaleString()}`,
                        name === 'revenue' ? 'Revenue' : 'Profit'
                      ]}
                      contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="revenue" fill="#C4A052" radius={[4, 4, 0, 0]} name="Revenue" />
                    <Bar dataKey="profit" fill="#8B7635" radius={[4, 4, 0, 0]} name="Profit" />
                    <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg text-white mb-4 font-medium">What We Built</h4>
                <div className="space-y-4">
                  {[
                    { icon: LineChart, title: "Custom AI Dashboard", desc: "Real-time sales tracking, team management, and customer sentiment analysis" },
                    { icon: Smartphone, title: "Mobile Ordering App", desc: "Online ordering with checkout, loyalty points, and full menu experience" },
                    { icon: Store, title: "Multi-Location Expansion", desc: "Helping launch delivery service and marketing on-the-go coffee experience" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/5">
                      <item.icon className="w-8 h-8 text-gold flex-shrink-0" />
                      <div>
                        <h5 className="text-white font-medium text-sm">{item.title}</h5>
                        <p className="text-white/45 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/15 text-center">
                  <p className="text-gold text-sm uppercase tracking-wider mb-1 font-medium">Projected 2026</p>
                  <p className="text-white text-xl font-bold">£2.1M Revenue | 15% Profit</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY 5: AD CAMPAIGN PERFORMANCE ===== */}
      {/* SPIDXR branded - dark navy with gold */}
      <section className="py-24 bg-charcoal relative overflow-hidden" data-testid="section-ads">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/3 via-transparent to-gold/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 w-fit">
                <span className="text-gold text-xs tracking-wider uppercase font-medium">Aggregate Data</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl text-white mb-3 font-bold tracking-tight" data-testid="text-ads-heading">
              Ad Campaign Performance
            </h2>
            <p className="text-white/50 text-base max-w-2xl mb-12">
              Cross-client advertising results showcasing our ability to drive qualified leads, 
              maximize ROAS, and convert at industry-leading rates.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg text-white mb-4 font-medium">Campaign ROAS Comparison</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={adCampaignData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="campaign" stroke="rgba(255,255,255,0.4)" fontSize={12} />
                    <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} />
                    <Tooltip 
                      formatter={(value: number, name: string) => [
                        name === 'roas' ? `${value}x` : `£${value.toLocaleString()}`,
                        name === 'roas' ? 'ROAS' : name === 'spend' ? 'Ad Spend' : 'Revenue'
                      ]}
                      contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="spend" fill="rgba(255,255,255,0.2)" radius={[4, 4, 0, 0]} name="Ad Spend" />
                    <Bar dataKey="revenue" fill="#C4A052" radius={[4, 4, 0, 0]} name="Revenue" />
                    <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg text-white mb-4 font-medium">Call Outcome Distribution</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={callPerformanceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {callPerformanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, 'Share']}
                      contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "40.7%", label: "Close Rate" },
                { value: "£74K", label: "Total Revenue" },
                { value: "2.35x", label: "Best ROAS" },
                { value: "700+", label: "Leads Generated" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 text-center border border-gold/10" data-testid={`stat-ads-${i}`}>
                  <p className="text-3xl text-gold font-bold">{stat.value}</p>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-cream" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-wider uppercase mb-4 font-medium">Versatile Expertise</p>
              <h2 className="text-3xl md:text-4xl text-charcoal font-bold tracking-tight">
                Industries We Serve
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industriesServed.map((industry, i) => (
              <ScrollReveal key={i} delay={0.05 * i}>
                <div className="bg-white rounded-2xl p-6 text-center border border-charcoal/8 hover:border-gold/30 transition-colors" data-testid={`card-industry-${i}`}>
                  <industry.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="text-charcoal font-semibold mb-1">{industry.name}</h3>
                  <p className="text-charcoal/50 text-sm">{industry.count} clients</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl text-white mb-6 font-bold tracking-tight">
              Ready to Be Our Next <span className="text-gradient">Success Story</span>?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Join 60+ businesses that have transformed their growth with our unified operating system.
            </p>
            <Button
              size="lg"
              className="gold-gradient text-charcoal border-0 text-base px-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={handleBookCall}
              data-testid="button-results-cta"
            >
              Book Your Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
