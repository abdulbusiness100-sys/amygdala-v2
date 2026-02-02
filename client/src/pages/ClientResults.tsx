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
  LineChart,
  Calendar,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

const clientDealsData = [
  { date: "14/08/2025", agency: "RoasX", dealSize: "$6,000.00", structure: "$1,000 X 6", source: "V2 - A8x Meta Ads", closedBy: "Scott" },
  { date: "22/08/2025", agency: "Dil Poshta", dealSize: "$6,000.00", structure: "$1,000 X 6", source: "Organic", closedBy: "Jha" },
  { date: "25/08/2025", agency: "Giovanni Defelice", dealSize: "$8,000.00", structure: "$8,000 PIF", source: "Organic", closedBy: "Scott" },
  { date: "26/08/2025", agency: "Trident Digital", dealSize: "$8,100.00", structure: "$1,350 X 6", source: "V2 - A8x Meta Ads", closedBy: "Jha" },
  { date: "28/08/2025", agency: "The AI Partner", dealSize: "$8,000.00", structure: "$8,000 PIF", source: "V2 - A8x Meta Ads", closedBy: "Scott" },
  { date: "02/09/2025", agency: "U1 Core", dealSize: "$8,100.00", structure: "$1,350 X 6", source: "Organic", closedBy: "Scott" },
  { date: "04/09/2025", agency: "Big Head Digital", dealSize: "$8,000.00", structure: "$8,000 PIF", source: "V2 - A8x Meta Ads", closedBy: "Scott" },
  { date: "07/09/2025", agency: "Viral Dose", dealSize: "$8,100.00", structure: "$1,350 X 6", source: "Organic", closedBy: "Jha" },
  { date: "09/09/2025", agency: "Alessio", dealSize: "$8,100.00", structure: "$1,350 X 6", source: "V2 - A8x Meta Ads", closedBy: "Scott" },
  { date: "12/09/2025", agency: "Atlas Agency", dealSize: "$6,000.00", structure: "$6,000 PIF", source: "Organic", closedBy: "Abdul" },
  { date: "15/09/2025", agency: "TRO Creative", dealSize: "$8,000.00", structure: "$8,000 PIF", source: "V2 - A8x Meta Ads", closedBy: "Abdul" },
  { date: "12/12/2025", agency: "Slyletica", dealSize: "$15,000.00", structure: "$5k x 3", source: "V2.O - Meta Direct", closedBy: "Abdul" },
  { date: "15/01/2026", agency: "Thrivelia", dealSize: "$15,000.00", structure: "$3,750 x 4", source: "V2.7 - Meta Playbook", closedBy: "Abdul" },
  { date: "20/01/2026", agency: "Bukhash Brothers", dealSize: "$14,000.00", structure: "$6.5k x 2", source: "Organic", closedBy: "Abdul" },
];

const adCampaignMetrics = {
  mba: { spend: "£441.78", revenue: "£1,036.96", roas: "2.35", sales: "7" },
  playbook: { spend: "£7,603.20", leads: "3,822", revenue: "£5,209.79", roas: "0.69" },
  bookACall: { spend: "£3,146.66", calls: "158", revenue: "£4,242.26", roas: "1.35" },
};

const callPerformanceMetrics = {
  totalCalls: "83",
  callsTaken: "27",
  noShow: "27",
  cancelled: "24",
  rescheduled: "6",
  closed: "11",
  cashCollected: "£32,583.00",
  totalRevenue: "£73,983.00",
  closeRate: "40.74%",
  rescheduleRate: "7.23%",
  noShowRate: "32.53%",
};

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
                <p className="font-display text-4xl md:text-5xl text-gold">$314K+</p>
                <p className="text-cream/60 text-sm font-accent uppercase tracking-wider mt-2">Total Deal Value</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl text-gold">60+</p>
                <p className="text-cream/60 text-sm font-accent uppercase tracking-wider mt-2">Businesses Impacted</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl md:text-5xl text-gold">40.7%</p>
                <p className="text-cream/60 text-sm font-accent uppercase tracking-wider mt-2">Close Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Deals Table */}
      <section className="py-24 bg-white" data-testid="section-genflow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <span className="text-gold font-accent text-sm tracking-wider uppercase">Live Data</span>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">Client Deals - 2025/2026</h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-cream rounded-3xl border-2 border-charcoal overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-testid="table-client-deals">
                  <thead className="bg-charcoal text-cream">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Date</th>
                      <th className="px-4 py-3 text-left font-medium">Agency Name</th>
                      <th className="px-4 py-3 text-right font-medium">Deal Size</th>
                      <th className="px-4 py-3 text-left font-medium">Deal Structure</th>
                      <th className="px-4 py-3 text-left font-medium">Source</th>
                      <th className="px-4 py-3 text-left font-medium">Closed By</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10">
                    {clientDealsData.map((deal, i) => (
                      <tr key={i} className="hover:bg-gold/5 transition-colors">
                        <td className="px-4 py-3 text-charcoal-medium font-mono text-xs">{deal.date}</td>
                        <td className="px-4 py-3 text-charcoal font-medium">{deal.agency}</td>
                        <td className="px-4 py-3 text-right text-gold font-semibold">{deal.dealSize}</td>
                        <td className="px-4 py-3 text-charcoal-medium">{deal.structure}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-charcoal/10 text-charcoal">
                            {deal.source}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-charcoal-medium">{deal.closedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-charcoal/5 border-t-2 border-charcoal">
                    <tr>
                      <td className="px-4 py-4 font-bold text-charcoal" colSpan={2}>Total</td>
                      <td className="px-4 py-4 text-right font-bold text-gold text-lg">$314,500.00</td>
                      <td className="px-4 py-4 text-charcoal-medium" colSpan={3}>Cash Received: $119,659.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 grid md:grid-cols-4 gap-4">
              <div className="bg-cream rounded-xl p-6 border-2 border-charcoal text-center">
                <Calendar className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-3xl font-bold text-charcoal">Aug 2025</p>
                <p className="text-charcoal-medium text-sm">Started</p>
              </div>
              <div className="bg-cream rounded-xl p-6 border-2 border-charcoal text-center">
                <DollarSign className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-3xl font-bold text-gold">$314.5K</p>
                <p className="text-charcoal-medium text-sm">Total Revenue</p>
              </div>
              <div className="bg-cream rounded-xl p-6 border-2 border-charcoal text-center">
                <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-3xl font-bold text-charcoal">60+</p>
                <p className="text-charcoal-medium text-sm">Agencies Closed</p>
              </div>
              <div className="bg-cream rounded-xl p-6 border-2 border-charcoal text-center">
                <User className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-3xl font-bold text-charcoal">3</p>
                <p className="text-charcoal-medium text-sm">Closers Active</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ad Campaign Performance - Spreadsheet Style */}
      <section className="py-24 bg-charcoal" data-testid="section-ads">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold font-accent text-sm tracking-wider uppercase">December 2025 Data</span>
              <h2 className="font-display text-3xl md:text-4xl text-white mt-2">Ad Campaign Performance</h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Campaign Metrics Table */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur rounded-3xl border border-gold/30 overflow-hidden">
                <div className="p-4 border-b border-gold/20">
                  <h3 className="text-gold font-display text-lg">Campaign Breakdown</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" data-testid="table-campaigns">
                    <thead className="bg-white/5">
                      <tr className="text-cream/70">
                        <th className="px-4 py-3 text-left font-medium">Campaign</th>
                        <th className="px-4 py-3 text-right font-medium">Spend</th>
                        <th className="px-4 py-3 text-right font-medium">Revenue</th>
                        <th className="px-4 py-3 text-right font-medium">ROAS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-4 text-cream font-medium">MBA</td>
                        <td className="px-4 py-4 text-right text-cream/70 font-mono">{adCampaignMetrics.mba.spend}</td>
                        <td className="px-4 py-4 text-right text-gold font-mono">{adCampaignMetrics.mba.revenue}</td>
                        <td className="px-4 py-4 text-right">
                          <span className="inline-flex items-center px-2 py-1 rounded bg-green-500/20 text-green-400 font-bold">
                            {adCampaignMetrics.mba.roas}x
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-4 text-cream font-medium">Playbook</td>
                        <td className="px-4 py-4 text-right text-cream/70 font-mono">{adCampaignMetrics.playbook.spend}</td>
                        <td className="px-4 py-4 text-right text-gold font-mono">{adCampaignMetrics.playbook.revenue}</td>
                        <td className="px-4 py-4 text-right">
                          <span className="inline-flex items-center px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 font-bold">
                            {adCampaignMetrics.playbook.roas}x
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-4 text-cream font-medium">Book-a-Call</td>
                        <td className="px-4 py-4 text-right text-cream/70 font-mono">{adCampaignMetrics.bookACall.spend}</td>
                        <td className="px-4 py-4 text-right text-gold font-mono">{adCampaignMetrics.bookACall.revenue}</td>
                        <td className="px-4 py-4 text-right">
                          <span className="inline-flex items-center px-2 py-1 rounded bg-green-500/20 text-green-400 font-bold">
                            {adCampaignMetrics.bookACall.roas}x
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="bg-white/5 border-t border-gold/30">
                      <tr>
                        <td className="px-4 py-4 font-bold text-cream">Total</td>
                        <td className="px-4 py-4 text-right font-bold text-cream/70 font-mono">£11,191.64</td>
                        <td className="px-4 py-4 text-right font-bold text-gold font-mono">£10,489.01</td>
                        <td className="px-4 py-4 text-right font-bold text-cream">0.94x</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            {/* Call Performance Metrics */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 backdrop-blur rounded-3xl border border-gold/30 overflow-hidden">
                <div className="p-4 border-b border-gold/20">
                  <h3 className="text-gold font-display text-lg">Call Performance Data</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-cream/60 text-xs uppercase tracking-wider">Total Calls</p>
                      <p className="text-2xl font-bold text-cream font-mono">{callPerformanceMetrics.totalCalls}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-cream/60 text-xs uppercase tracking-wider">Calls Taken</p>
                      <p className="text-2xl font-bold text-cream font-mono">{callPerformanceMetrics.callsTaken}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-cream/60 text-xs uppercase tracking-wider">Closed</p>
                      <p className="text-2xl font-bold text-green-400 font-mono">{callPerformanceMetrics.closed}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-cream/60 text-xs uppercase tracking-wider">No Show</p>
                      <p className="text-2xl font-bold text-red-400 font-mono">{callPerformanceMetrics.noShow}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-cream/60 text-xs uppercase tracking-wider">Cancelled</p>
                      <p className="text-2xl font-bold text-cream/50 font-mono">{callPerformanceMetrics.cancelled}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-cream/60 text-xs uppercase tracking-wider">Rescheduled</p>
                      <p className="text-2xl font-bold text-cream/50 font-mono">{callPerformanceMetrics.rescheduled}</p>
                    </div>
                  </div>

                  <div className="border-t border-gold/20 pt-4 mt-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <p className="text-gold font-bold text-2xl">{callPerformanceMetrics.closeRate}</p>
                        <p className="text-cream/60 text-xs uppercase">Close Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-cream font-bold text-2xl">{callPerformanceMetrics.noShowRate}</p>
                        <p className="text-cream/60 text-xs uppercase">No Show Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-cream font-bold text-2xl">{callPerformanceMetrics.rescheduleRate}</p>
                        <p className="text-cream/60 text-xs uppercase">Reschedule</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gold/20 pt-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gold/10 rounded-xl p-4 text-center">
                        <p className="text-cream/60 text-xs uppercase tracking-wider mb-1">Cash Collected</p>
                        <p className="text-2xl font-bold text-gold font-mono">{callPerformanceMetrics.cashCollected}</p>
                      </div>
                      <div className="bg-gold/10 rounded-xl p-4 text-center">
                        <p className="text-cream/60 text-xs uppercase tracking-wider mb-1">Total Revenue</p>
                        <p className="text-2xl font-bold text-gold font-mono">{callPerformanceMetrics.totalRevenue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Additional Stats Row */}
          <ScrollReveal delay={0.3}>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center border border-gold/20">
                <p className="text-cream/60 text-xs uppercase tracking-wider">Playbook Leads</p>
                <p className="text-2xl font-bold text-gold font-mono">{adCampaignMetrics.playbook.leads}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-gold/20">
                <p className="text-cream/60 text-xs uppercase tracking-wider">Book-a-Call</p>
                <p className="text-2xl font-bold text-cream font-mono">{adCampaignMetrics.bookACall.calls}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-gold/20">
                <p className="text-cream/60 text-xs uppercase tracking-wider">MBA Sales</p>
                <p className="text-2xl font-bold text-cream font-mono">{adCampaignMetrics.mba.sales}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-gold/20">
                <p className="text-cream/60 text-xs uppercase tracking-wider">Best ROAS</p>
                <p className="text-2xl font-bold text-green-400 font-mono">2.35x</p>
                <p className="text-cream/40 text-xs">(MBA)</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study: Nur Cafe */}
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
              <div className="space-y-6">
                <div className="bg-cream rounded-3xl p-6 border-2 border-charcoal">
                  <h4 className="font-display text-lg text-charcoal mb-4">Financial Performance</h4>
                  <table className="w-full text-sm">
                    <thead className="border-b-2 border-charcoal">
                      <tr className="text-charcoal-medium">
                        <th className="py-2 text-left font-medium">Year</th>
                        <th className="py-2 text-right font-medium">Revenue</th>
                        <th className="py-2 text-right font-medium">Profit</th>
                        <th className="py-2 text-right font-medium">Margin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-charcoal/10">
                      <tr>
                        <td className="py-3 text-charcoal">2024</td>
                        <td className="py-3 text-right font-mono text-charcoal-medium">£1,100,000</td>
                        <td className="py-3 text-right font-mono text-charcoal-medium">£22,000</td>
                        <td className="py-3 text-right text-charcoal-medium">2%</td>
                      </tr>
                      <tr className="bg-gold/5">
                        <td className="py-3 text-charcoal font-medium">2025</td>
                        <td className="py-3 text-right font-mono text-gold font-bold">£1,700,000</td>
                        <td className="py-3 text-right font-mono text-gold font-bold">£136,000</td>
                        <td className="py-3 text-right text-gold font-bold">8%</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-charcoal-medium italic">2026 (Proj)</td>
                        <td className="py-3 text-right font-mono text-charcoal-medium">£2,100,000</td>
                        <td className="py-3 text-right font-mono text-charcoal-medium">£315,000</td>
                        <td className="py-3 text-right text-charcoal-medium">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-cream rounded-xl p-4 text-center border-2 border-charcoal">
                    <LineChart className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-xs text-charcoal-medium">Dashboard</p>
                  </div>
                  <div className="bg-cream rounded-xl p-4 text-center border-2 border-charcoal">
                    <Smartphone className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-xs text-charcoal-medium">Loyalty App</p>
                  </div>
                  <div className="bg-cream rounded-xl p-4 text-center border-2 border-charcoal">
                    <Store className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-xs text-charcoal-medium">4 Locations</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center p-8 bg-gradient-to-r from-charcoal to-charcoal/90 rounded-3xl">
              <p className="text-gold font-accent text-sm uppercase tracking-wider mb-2">Lifelong Partnership</p>
              <p className="text-white text-xl max-w-2xl mx-auto">
                "We're now helping them launch a delivery service and marketing their new on-the-go coffee experience."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-cream" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold font-accent text-sm tracking-wider uppercase">Our Reach</span>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-2">Industries We've Served</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industriesServed.map((industry, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 text-center border-2 border-charcoal/20 hover:border-gold transition-colors">
                  <industry.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="font-display text-sm text-charcoal mb-1">{industry.name}</h4>
                  <p className="text-gold font-bold">{industry.count}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal" data-testid="section-results-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              Ready to Be Our Next <span className="text-gradient">Success Story</span>?
            </h2>
            <p className="text-cream/70 text-lg mb-8">
              Join 60+ businesses that have transformed their growth with our unified operating system.
            </p>
            <Button 
              onClick={handleBookCall}
              className="gold-gradient text-charcoal font-medium px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-opacity"
              data-testid="button-results-cta"
            >
              Book Your Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
