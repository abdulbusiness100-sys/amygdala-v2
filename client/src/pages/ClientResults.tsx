import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  ArrowRight, 
  CheckCircle2,
  BarChart3,
  Building2,
  Coffee,
  GraduationCap,
  Sparkles,
  Store,
  Phone,
  Globe,
  Smartphone,
  LineChart
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
  Legend,
  RadialBarChart,
  RadialBar
} from 'recharts';

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

const closerPerformanceData = [
  { name: 'Closer 1', closeRate: 50, calls: 16, revenue: 50600 },
  { name: 'Closer 2', closeRate: 41, calls: 34, revenue: 105000 },
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

const nurCafeGrowthData = [
  { name: 'Revenue Growth', value: 55, fill: '#C4A052' },
  { name: 'Profit Growth', value: 518, fill: '#2C2C2C' },
  { name: 'Margin Increase', value: 300, fill: '#A8935F' },
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
    <div className="min-h-screen bg-cream">
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
              <span className="text-gold font-accent text-sm tracking-wider uppercase">Proven Results</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
              Client <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Real businesses. Real data. Real transformation. See how our full-stack growth operating system 
              has helped companies across industries maximize revenue and scale effectively.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl text-gold">$2.6M+</p>
                <p className="text-cream/60 text-sm font-accent uppercase tracking-wider mt-2">Generated in 2025</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl text-gold">60+</p>
                <p className="text-cream/60 text-sm font-accent uppercase tracking-wider mt-2">Businesses Impacted</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl text-gold">45%</p>
                <p className="text-cream/60 text-sm font-accent uppercase tracking-wider mt-2">Avg Close Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study 1: Genflow */}
      <section className="py-24 bg-white" data-testid="section-genflow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <span className="text-gold font-accent text-sm tracking-wider uppercase">Case Study</span>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">Genflow - Sales Growth Consulting</h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-cream rounded-3xl p-8 border-2 border-charcoal">
                <h3 className="font-display text-2xl text-charcoal mb-4">The Challenge</h3>
                <p className="text-charcoal-medium mb-6">
                  A growing agency generating less than $100k in quarterly sales needed a complete sales transformation 
                  to maximize their lead nurturing and close rates.
                </p>
                
                <h3 className="font-display text-2xl text-charcoal mb-4">Our Solution</h3>
                <ul className="space-y-3">
                  {[
                    "High-level inbound tailored growth plans",
                    "Rigorous sales structure and execution",
                    "Lead nurturing optimization",
                    "Full sales cycle systemization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white rounded-xl p-4 text-center border border-gold/20">
                    <p className="font-display text-3xl text-gold">$400K+</p>
                    <p className="text-charcoal-medium text-sm">Q4 Revenue</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gold/20">
                    <p className="font-display text-3xl text-gold">45%</p>
                    <p className="text-charcoal-medium text-sm">Close Rate</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gold/20">
                    <p className="font-display text-3xl text-gold">$100K</p>
                    <p className="text-charcoal-medium text-sm">First 100K Month</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gold/20">
                    <p className="font-display text-3xl text-gold">4x</p>
                    <p className="text-charcoal-medium text-sm">Revenue Growth</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="bg-cream rounded-3xl p-6 border-2 border-charcoal">
                  <h4 className="font-display text-lg text-charcoal mb-4">Monthly Revenue Growth</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={genflowSalesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                      <XAxis dataKey="month" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                      <Tooltip 
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                        contentStyle={{ background: '#2C2C2C', border: 'none', borderRadius: '8px', color: '#fff' }}
                      />
                      <Bar dataKey="revenue" fill="#C4A052" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-cream rounded-3xl p-6 border-2 border-charcoal">
                  <h4 className="font-display text-lg text-charcoal mb-4">Lead Sources Distribution</h4>
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
                        contentStyle={{ background: '#2C2C2C', border: 'none', borderRadius: '8px', color: '#fff' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study 2: Faseeha Institute */}
      <section className="py-24 bg-cream" data-testid="section-faseeha">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <span className="text-gold font-accent text-sm tracking-wider uppercase">Case Study</span>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">Faseeha Institute - Full Stack Build</h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-3xl p-6 border-2 border-charcoal h-full">
                <Globe className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display text-xl text-charcoal mb-3">Complete Website Rebuild</h3>
                <p className="text-charcoal-medium text-sm mb-4">
                  Recreated their entire digital presence with optimized SEO and high-converting landing pages.
                </p>
                <div className="bg-gold/10 rounded-xl p-4 text-center">
                  <p className="font-display text-3xl text-gold">50%</p>
                  <p className="text-charcoal-medium text-sm">Increase in Traffic</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-3xl p-6 border-2 border-charcoal h-full">
                <Users className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display text-xl text-charcoal mb-3">Lead Generation Campaign</h3>
                <p className="text-charcoal-medium text-sm mb-4">
                  Built targeted funnels to maximize lead capture and conversion through strategic marketing.
                </p>
                <div className="bg-gold/10 rounded-xl p-4 text-center">
                  <p className="font-display text-3xl text-gold">700+</p>
                  <p className="text-charcoal-medium text-sm">Leads in 30 Days</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white rounded-3xl p-6 border-2 border-charcoal h-full">
                <Sparkles className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display text-xl text-charcoal mb-3">AI Automations</h3>
                <p className="text-charcoal-medium text-sm mb-4">
                  Integrated AI systems for client nurturing, data tracking, and internal process optimization.
                </p>
                <div className="bg-gold/10 rounded-xl p-4 text-center">
                  <p className="font-display text-3xl text-gold">100%</p>
                  <p className="text-charcoal-medium text-sm">Unified Stack</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-3xl p-6 border-2 border-charcoal">
                <h4 className="font-display text-lg text-charcoal mb-4">Website Traffic Growth</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={faseehaTrafficData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                    <XAxis dataKey="week" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
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
              <div className="bg-white rounded-3xl p-6 border-2 border-charcoal">
                <h4 className="font-display text-lg text-charcoal mb-4">Sales Performance (3 Months)</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <RechartsLineChart data={faseehaSalesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                    <XAxis dataKey="month" stroke="#666" fontSize={10} />
                    <YAxis stroke="#666" fontSize={12} tickFormatter={(v) => `£${v/1000}k`} />
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

      {/* Case Study 3: Nur Cafe */}
      <section className="py-24 bg-white" data-testid="section-nurcafe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center">
                <Coffee className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <span className="text-gold font-accent text-sm tracking-wider uppercase">Case Study</span>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">Nur Cafe - Operations & Growth</h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-cream rounded-3xl p-8 border-2 border-charcoal">
                <h3 className="font-display text-2xl text-charcoal mb-4">Transformation Overview</h3>
                <p className="text-charcoal-medium mb-6">
                  Helped transform operations, systemize team management, and implement targeted marketing 
                  strategies that took this cafe from survival mode to thriving expansion.
                </p>
                
                <div className="space-y-4">
                  {[
                    { label: "Revenue Growth", before: "£1.1M", after: "£1.7M", growth: "+55%" },
                    { label: "Profit Margin", before: "2%", after: "8%", growth: "+300%" },
                    { label: "New Locations", before: "1", after: "4", growth: "+3 sites" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gold/20">
                      <span className="text-charcoal font-medium">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-charcoal-medium">{item.before}</span>
                        <ArrowRight className="w-4 h-4 text-gold" />
                        <span className="text-gold font-bold">{item.after}</span>
                        <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">{item.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-charcoal rounded-xl">
                  <p className="text-gold font-accent text-sm uppercase tracking-wider mb-2">Projected 2026</p>
                  <p className="text-white font-display text-2xl">£2.1M Revenue | 15% Profit</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-cream rounded-3xl p-6 border-2 border-charcoal">
                <h4 className="font-display text-lg text-charcoal mb-4">Revenue & Profit Trajectory</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={nurCafeRevenueData} barGap={0}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                    <XAxis dataKey="year" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} tickFormatter={(v) => `£${v/1000000}M`} />
                    <Tooltip 
                      formatter={(value: number, name: string) => [
                        name === 'revenue' ? `£${(value/1000000).toFixed(2)}M` : `£${value.toLocaleString()}`,
                        name === 'revenue' ? 'Revenue' : 'Profit'
                      ]}
                      contentStyle={{ background: '#2C2C2C', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="revenue" fill="#C4A052" radius={[4, 4, 0, 0]} name="Revenue" />
                    <Bar dataKey="profit" fill="#2C2C2C" radius={[4, 4, 0, 0]} name="Profit" />
                    <Legend />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-cream rounded-2xl p-6 border-2 border-charcoal text-center">
                <LineChart className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="font-display text-lg text-charcoal mb-2">Custom Dashboard</h4>
                <p className="text-charcoal-medium text-sm">
                  AI-powered sales manager showing real-time performance, top sellers, and customer sentiment analysis.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-cream rounded-2xl p-6 border-2 border-charcoal text-center">
                <Smartphone className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="font-display text-lg text-charcoal mb-2">Loyalty App</h4>
                <p className="text-charcoal-medium text-sm">
                  Custom-built mobile app with loyalty points system to increase customer LTV and repeat visits.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-cream rounded-2xl p-6 border-2 border-charcoal text-center">
                <Store className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="font-display text-lg text-charcoal mb-2">Expansion Support</h4>
                <p className="text-charcoal-medium text-sm">
                  Now helping launch delivery service and marketing their on-the-go coffee experience.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center p-8 bg-gradient-to-r from-charcoal to-charcoal/90 rounded-3xl">
              <p className="text-cream/80 font-accent text-sm uppercase tracking-wider mb-2">Lifelong Partnership</p>
              <p className="text-white text-lg max-w-2xl mx-auto">
                Nur Cafe is now a lifelong partner, demonstrating our integral capabilities to deliver 
                excellent results across diverse industries using our multi-expert team approach.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ad Campaign Performance */}
      <section className="py-24 bg-charcoal" data-testid="section-ads">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 mb-6">
                <Target className="w-4 h-4 text-gold" />
                <span className="text-gold font-accent text-sm tracking-wider uppercase">Marketing Intelligence</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Ad Campaign <span className="text-gradient">Performance</span>
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto">
                Our proprietary tracking systems and funnel optimization deliver measurable results 
                across all paid traffic channels.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-gold/20">
                <h4 className="font-display text-lg text-white mb-4">Campaign ROAS Comparison</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={adCampaignData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis type="number" stroke="#999" fontSize={12} />
                    <YAxis type="category" dataKey="campaign" stroke="#999" fontSize={12} width={80} />
                    <Tooltip 
                      formatter={(value: number, name: string) => [
                        name === 'roas' ? `${value}x` : `£${value.toLocaleString()}`,
                        name === 'roas' ? 'ROAS' : name
                      ]}
                      contentStyle={{ background: '#2C2C2C', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="roas" fill="#C4A052" radius={[0, 4, 4, 0]} name="ROAS" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-gold/20">
                <h4 className="font-display text-lg text-white mb-4">Call Outcome Distribution</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={callPerformanceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={false}
                    >
                      {callPerformanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, 'Share']}
                      contentStyle={{ background: '#2C2C2C', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Calls", value: "83", icon: Phone },
              { label: "Close Rate", value: "40.7%", icon: Target },
              { label: "Cash Collected", value: "£32.5K", icon: DollarSign },
              { label: "Total Revenue", value: "£74K", icon: TrendingUp },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gold/20 text-center">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-display text-2xl text-white">{stat.value}</p>
                  <p className="text-cream/60 text-xs font-accent uppercase tracking-wider">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-cream" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
                Industries We <span className="text-gradient">Transform</span>
              </h2>
              <p className="text-charcoal-medium max-w-2xl mx-auto">
                Our full-stack growth operating system adapts to any industry, delivering unified 
                growth at scale through our multi-expert team approach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industriesServed.map((industry, i) => (
              <ScrollReveal key={i} delay={0.05 * i}>
                <div className="bg-white rounded-2xl p-6 border-2 border-charcoal text-center hover:border-gold transition-colors">
                  <industry.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="font-display text-sm text-charcoal mb-1">{industry.name}</h4>
                  <p className="text-gold font-accent font-bold">{industry.count}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden" data-testid="section-results-cta">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              Ready to Be Our Next <span className="text-gradient">Success Story?</span>
            </h2>
            <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
              Join 60+ businesses that have transformed their growth trajectory with our 
              full-stack operating system. Your results could be featured here next.
            </p>
            <Button 
              size="lg"
              className="gold-gradient text-charcoal border-0 font-accent text-lg px-8"
              onClick={handleBookCall}
              data-testid="button-results-cta"
            >
              Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
