import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ExternalLink,
  MapPin,
  Leaf,
  X,
  Instagram,
  Chrome,
  Search,
  Calendar,
  Layout
} from "lucide-react";
import { SiApple } from "react-icons/si";
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
import genflowReportImg from "@assets/genflow_performance_report_1770653993352.png";
import nurCafePerformanceImg from "@assets/nur_cafe_performance_report_1770653989283.png";
import nurCafeExpansionImg from "@assets/nur_cafe_green_expansion_report_1770654247235.png";
import nurCafeGreenMockupImg from "@assets/download_(46)_1770654251178.png";
import faseehaWebsiteImg from "@assets/download_(47)_1770654687462.png";

import genflowLogo from "@assets/Screenshot_2026-02-09_at_17.02.15_1770656579496.png";
import oraSuitesLogo from "@assets/WhatsApp_Image_2025-08-06_at_17.22.03_(1)_1770656281557.jpeg";
import nurCafeRedLogo from "@assets/image_1770656434764.png";
import nurCafeGreenLogo from "@assets/Screenshot_2026-02-09_at_16.59.20_1770656403434.png";
import promerchLogo from "@assets/client_logos_v2/logo_16.png";
import faseehaLogo from "@assets/Logo_(1)_1770656600139.jpeg";

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
  { month: 'Aug', revenue: 47100, spidxr: false },
  { month: 'Sep', revenue: 65000, spidxr: true },
  { month: 'Oct', revenue: 69000, spidxr: true },
  { month: 'Nov', revenue: 71000, spidxr: true },
  { month: 'Dec', revenue: 73000, spidxr: true },
  { month: 'Jan', revenue: 155000, spidxr: true },
];

const genflowSourceData = [
  { name: 'Meta Ads', value: 45, color: '#C4A052' },
  { name: 'Organic', value: 35, color: '#1e3a5f' },
  { name: 'Email', value: 12, color: '#A8935F' },
  { name: 'Referral', value: 8, color: '#D4C494' },
];

const faseehaSalesData = [
  { month: 'Nov 1-15', sales: 8400 },
  { month: 'Nov 16-30', sales: 11200 },
  { month: 'Dec 1-15', sales: 9800 },
  { month: 'Dec 16-31', sales: 12600 },
  { month: 'Jan 1-15', sales: 14200 },
  { month: 'Jan 16-31', sales: 15800 },
];

const faseehaTrafficData = [
  { week: 'Week 1', visitors: 1200, sessions: 1450 },
  { week: 'Week 2', visitors: 1800, sessions: 2100 },
  { week: 'Week 3', visitors: 2400, sessions: 2900 },
  { week: 'Week 4', visitors: 2100, sessions: 2600 },
  { week: 'Week 5', visitors: 1600, sessions: 2000 },
  { week: 'Week 6', visitors: 1450, sessions: 1800 },
  { week: 'Week 7', visitors: 1300, sessions: 1650 },
  { week: 'Week 8', visitors: 1150, sessions: 1450 },
];

const nurCafeRevenueData = [
  { year: '2024', revenue: 1100000, profit: 22000 },
  { year: '2025', revenue: 1700000, profit: 136000 },
  { year: '2026 (Proj)', revenue: 2100000, profit: 315000 },
];

const adCampaignData = [
  { campaign: 'Ad A', spend: 400, revenue: 13300, roas: '33.25x' },
  { campaign: 'Ad B', spend: 5000, revenue: 25450, roas: '5.09x' },
  { campaign: 'Ad C', spend: 8000, revenue: 30900, roas: '3.86x' },
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

type CaseStudyId = 'genflow' | 'ora-suites' | 'nur-cafe' | 'nur-cafe-expansion' | 'faseeha' | 'ads';

interface CaseStudy {
  id: CaseStudyId;
  name: string;
  subtitle: string;
  logo: string;
  bgColor: string;
  showcaseImage: string;
  headline: string;
  disabled?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'genflow',
    name: 'Genflow',
    subtitle: 'Sales Growth Consulting',
    logo: genflowLogo,
    bgColor: '#2d3748',
    showcaseImage: genflowReportImg,
    headline: '312% Revenue Growth',
  },
  {
    id: 'ora-suites',
    name: 'Ora Suites',
    subtitle: 'Complete Brand Build',
    logo: oraSuitesLogo,
    bgColor: '#f0e6d6',
    showcaseImage: oraSuitesImg,
    headline: 'Built from Scratch',
  },
  {
    id: 'nur-cafe',
    name: 'Nūr Café',
    subtitle: 'Operations & Growth',
    logo: nurCafeRedLogo,
    bgColor: '#9e6155',
    showcaseImage: nurCafeDashboardImg,
    headline: '55% Revenue Growth',
  },
  {
    id: 'nur-cafe-expansion',
    name: 'Nūr Café',
    subtitle: 'Green Rebrand',
    logo: nurCafeGreenLogo,
    bgColor: '#6b7d65',
    showcaseImage: nurCafeGreenMockupImg,
    headline: 'Multi-Location Expansion',
  },
  {
    id: 'ads',
    name: 'Ad Campaigns',
    subtitle: 'Aggregate Data',
    logo: promerchLogo,
    bgColor: '#1a1a1a',
    showcaseImage: adsPerformanceImg,
    headline: '40.7% Close Rate',
  },
  {
    id: 'faseeha',
    name: 'Faseeha Institute',
    subtitle: 'Full Stack Build',
    logo: faseehaLogo,
    bgColor: '#b8a98c',
    showcaseImage: faseehaWebsiteImg,
    headline: '700+ Leads in 30 Days',
    disabled: true,
  },
];

function GenflowDetail() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <img src={genflowLogo} alt="Genflow" className="h-8 object-contain" />
        <span className="text-white/40 text-sm">Sales Growth Consulting</span>
      </div>
      <p className="text-white/50 text-sm max-w-lg">
        Sales growth and execution. From under $100K quarterly to $400K+ through rigorous sales structuring, 
        lead nurturing optimization, and full sales cycle systemization.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "$400K+", label: "Q4 Revenue" },
          { value: "45%", label: "Close Rate" },
          { value: "$100K", label: "First 100K Month" },
          { value: "4x", label: "Revenue Growth" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3 text-center border border-gold/15" data-testid={`stat-genflow-${i}`}>
            <p className="text-lg text-gold font-bold">{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-sm text-white/70 mb-3">Monthly Revenue</h4>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={genflowSalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={10} />
              <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickFormatter={(v) => `$${v/1000}k`} />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Bar dataKey="revenue" radius={[3, 3, 0, 0]}>
                {genflowSalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.spidxr ? "#C4A052" : "rgba(255,255,255,0.1)"} />
                ))}
              </Bar>
              <Legend 
                content={() => (
                  <div className="flex items-center justify-center gap-4 mt-2 text-[10px] text-white/40 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <span>Before SPIDXR</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span>With SPIDXR</span>
                    </div>
                  </div>
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-sm text-white/70 mb-3">Lead Sources</h4>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={genflowSourceData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={5} dataKey="value">
                {genflowSourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Share']}
                contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Legend 
                verticalAlign="bottom" 
                align="center"
                layout="horizontal"
                iconSize={8}
                formatter={(value) => <span className="text-[10px] text-white/50">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function OraDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { icon: Instagram, label: "Brand Identity", desc: "Complete brand identity & visual design system" },
    { icon: Globe, label: "Website", desc: "Custom website design and development" },
    { icon: Layout, label: "Services", desc: "Service category architecture (Aesthetics, Nails, Hair, Laser & Wellness)" },
    { icon: Calendar, label: "Booking", desc: "Online booking system integration" },
    { icon: Chrome, label: "SEO", desc: "SEO-optimized content strategy" },
    { icon: SiApple, label: "Mobile UX", desc: "Mobile-responsive premium experience" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <img src={oraSuitesLogo} alt="Ora Suites" className="h-10 object-contain" />
        <div>
          <span className="text-white/40 text-sm block">Complete Brand Build & Launch</span>
          <a 
            href="https://www.orasuites.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gold text-xs hover:underline mt-0.5"
            data-testid="link-orasuites"
          >
            orasuites.com <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
      <p className="text-white/50 text-sm max-w-lg">
        Built the entire brand identity, website, and digital presence from the ground up for this 
        premium women-only wellness sanctuary.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "100%", label: "Built from Scratch" },
          { value: "4", label: "Service Categories" },
          { value: "Live", label: "orasuites.com" },
          { value: "Premium", label: "Brand Identity" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3 text-center border border-white/10" data-testid={`stat-ora-${i}`}>
            <p className="text-lg text-gold font-bold">{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-white/60 text-xs uppercase tracking-wider mb-3">What We Built</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`aspect-square rounded-lg p-2 flex items-center justify-center transition-all duration-200 border ${
                activeTab === i
                  ? 'bg-gold/15 border-gold/40 text-gold'
                  : 'bg-white/5 border-white/10 text-white/60 hover-elevate'
              }`}
              data-testid={`tab-ora-${i}`}
            >
              <tab.icon className={`w-8 h-8 ${activeTab === i ? 'text-gold' : 'text-white/30'}`} />
            </button>
          ))}
        </div>
        <div className="mt-4 text-center min-h-[3rem]">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-1">{tabs[activeTab].label}</p>
          <p className="text-white/50 text-sm max-w-md mx-auto">{tabs[activeTab].desc}</p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-white/10">
        <img src={oraSuitesImg} alt="Ora Suites website" className="w-full object-cover" data-testid="img-orasuites" />
      </div>
    </div>
  );
}

function NurCafeDetail() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <img src={nurCafeRedLogo} alt="Nur Cafe" className="h-10 object-contain" />
        <span className="text-white/40 text-sm">Operations, Growth & App Build</span>
      </div>
      <p className="text-white/50 text-sm max-w-lg">
        Complete business transformation: operations overhaul, custom AI dashboard, mobile ordering app, 
        and growth strategy taking revenue from £1.1M to £1.7M.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Revenue Growth", before: "£1.1M", after: "£1.7M", growth: "+55%" },
          { label: "Profit Margin", before: "2%", after: "8%", growth: "+300%" },
          { label: "New Locations", before: "1", after: "4", growth: "+3 sites" },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10 text-center" data-testid={`stat-nurcafe-${i}`}>
            <p className="text-white/40 text-xs mb-1">{item.label}</p>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-white/50 text-sm">{item.before}</span>
              <ArrowRight className="w-3 h-3 text-gold" />
              <span className="text-gold text-base font-bold">{item.after}</span>
            </div>
            <span className="text-[10px] bg-gold/15 text-gold px-2 py-0.5 rounded-full mt-1 inline-block">{item.growth}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg overflow-hidden border border-white/10">
          <img src={nurCafeDashboardImg} alt="Nur Cafe Dashboard" className="w-full object-cover" data-testid="img-nurcafe-dashboard" />
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10">
          <img src={nurCafeAppImg} alt="Nur Cafe App" className="w-full object-cover" data-testid="img-nurcafe-app" />
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="text-sm text-white/70 mb-3">Revenue Trajectory</h4>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={nurCafeRevenueData} barGap={0}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" fontSize={10} />
            <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickFormatter={(v) => `£${v/1000000}M`} />
            <Tooltip 
              formatter={(value: number, name: string) => [
                `£${(value/1000000).toFixed(2)}M`,
                'Revenue'
              ]}
              contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
            />
            <Bar dataKey="revenue" fill="#C4A052" radius={[3, 3, 0, 0]} name="Revenue" />
            <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function NurCafeExpansionDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { icon: Instagram, label: "Green Rebrand", desc: "Complete green brand identity redesign" },
    { icon: Globe, label: "New Website", desc: "Expansion-focused website with location pages" },
    { icon: MapPin, label: "Location Finder", desc: "Multi-location finder app with interactive map" },
    { icon: Store, label: "Oxford Road", desc: "Oxford Road, Manchester location launch" },
    { icon: SiApple, label: "App Update", desc: "Updated mobile app with location switching" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <img src={nurCafeGreenLogo} alt="Nur Cafe" className="h-10 object-contain" />
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-[#4CAF50]" />
          <span className="text-[#4CAF50]/80 text-sm">Green Rebrand & Expansion</span>
        </div>
      </div>
      <p className="text-white/50 text-sm max-w-lg">
        Rebranded Nur Cafe with a fresh green identity for their expansion phase, 
        building new location pages and a multi-location finder app.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "3", label: "Locations" },
          { value: "£61K", label: "Digital Sales" },
          { value: "1,136", label: "Orders" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#4CAF50]/10 rounded-lg p-3 text-center border border-[#4CAF50]/15" data-testid={`stat-expansion-${i}`}>
            <p className="text-lg text-[#4CAF50] font-bold">{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Expansion Deliverables</p>
        <div className="grid grid-cols-5 gap-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`aspect-square rounded-lg p-2 flex items-center justify-center transition-all duration-200 border ${
                activeTab === i
                  ? 'bg-[#4CAF50]/15 border-[#4CAF50]/40 text-[#4CAF50]'
                  : 'bg-white/5 border-white/10 text-white/60 hover-elevate'
              }`}
              data-testid={`tab-expansion-${i}`}
            >
              <tab.icon className={`w-7 h-7 ${activeTab === i ? 'text-[#4CAF50]' : 'text-white/30'}`} />
            </button>
          ))}
        </div>
        <div className="mt-4 text-center min-h-[3rem]">
          <p className="text-[#4CAF50] text-sm font-bold uppercase tracking-widest mb-1">{tabs[activeTab].label}</p>
          <p className="text-white/50 text-sm max-w-md mx-auto">{tabs[activeTab].desc}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg overflow-hidden border border-[#4CAF50]/15">
          <img src={nurCafeGreenMockupImg} alt="Nur Cafe Green Rebrand" className="w-full object-cover" data-testid="img-nurcafe-green-mockup" />
        </div>
        <div className="rounded-lg overflow-hidden border border-[#4CAF50]/15">
          <img src={nurCafeExpansionImg} alt="Nur Cafe Expansion Report" className="w-full object-cover" data-testid="img-nurcafe-expansion-report" />
        </div>
      </div>
    </div>
  );
}

function AdsDetail() {
  return (
    <div className="space-y-6">
      <div className="mb-2">
        <span className="text-gold/80 text-sm">Aggregate Data</span>
        <h3 className="text-xl text-white font-bold mt-1">Ad Campaign Performance</h3>
      </div>
      <p className="text-white/50 text-sm max-w-lg">
        Cross-client advertising results showcasing our ability to drive qualified leads, 
        maximize ROAS, and convert at industry-leading rates.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "40.7%", label: "Close Rate" },
          { value: "£74K", label: "Total Revenue" },
          { value: "2.35x", label: "Best ROAS" },
          { value: "1600", label: "Leads Nurtured" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3 text-center border border-gold/10" data-testid={`stat-ads-${i}`}>
            <p className="text-lg text-gold font-bold">{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-sm text-white/70 mb-3">Campaign Performance</h4>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={adCampaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="campaign" stroke="rgba(255,255,255,0.3)" fontSize={10} />
              <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} />
              <Tooltip 
                formatter={(value: number, name: string, props: any) => [
                  name === 'Revenue' ? `£${value.toLocaleString()}` : 
                  name === 'Ad Spend' ? `£${value.toLocaleString()}` :
                  `£${value.toLocaleString()}`,
                  name
                ]}
                labelFormatter={(label) => {
                  const data = adCampaignData.find(d => d.campaign === label);
                  return `${label} ${data ? `(ROAS: ${data.roas})` : ''}`;
                }}
                contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Bar dataKey="spend" fill="rgba(255,255,255,0.15)" radius={[3, 3, 0, 0]} name="Ad Spend" />
              <Bar dataKey="revenue" fill="#C4A052" radius={[3, 3, 0, 0]} name="Revenue" />
              <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-sm text-white/70 mb-3">Call Outcomes</h4>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={callPerformanceData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={3} dataKey="value">
                {callPerformanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Share']}
                contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function FaseehaDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { icon: Globe, label: "Website", desc: "Full website rebuild with premium aesthetic" },
    { icon: Sparkles, label: "AI Chatbot", desc: "Custom AI chatbot for lead qualification" },
    { icon: Target, label: "Marketing", desc: "Integrated marketing strategy & funnel" },
    { icon: Users, label: "Lead Gen", desc: "700+ leads generated in the first month" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <img src={faseehaLogo} alt="Faseeha Institute" className="h-10 object-contain" />
        <div>
          <span className="text-white/40 text-sm block">Full Stack Build & Lead Gen</span>
          <a 
            href="https://www.faseeha.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gold text-xs hover:underline mt-0.5"
            data-testid="link-faseeha"
          >
            faseeha.com <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
      <p className="text-white/50 text-sm max-w-lg">
        Complete digital transformation for an educational institute, delivering a premium 
        website and AI-powered automation that generated 700+ leads in 30 days.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "700+", label: "Leads/Month" },
          { value: "50%", label: "Traffic Increase" },
          { value: "Live", label: "faseeha.com" },
          { value: "Built", label: "AI Automations" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3 text-center border border-white/10" data-testid={`stat-faseeha-${i}`}>
            <p className="text-lg text-gold font-bold">{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-white/60 text-xs uppercase tracking-wider mb-3">What We Built</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`aspect-square rounded-lg p-3 text-left flex flex-col justify-between transition-all duration-200 border ${
                activeTab === i
                  ? 'bg-gold/15 border-gold/40 text-gold'
                  : 'bg-white/5 border-white/10 text-white/60 hover-elevate'
              }`}
              data-testid={`tab-faseeha-${i}`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === i ? 'text-gold' : 'text-white/30'}`} />
              <span className="text-xs font-medium leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-3 min-h-[2rem]">{tabs[activeTab].desc}</p>
      </div>

      <div className="rounded-lg overflow-hidden border border-white/10">
        <img src={faseehaWebsiteImg} alt="Faseeha Institute Website" className="w-full object-cover" data-testid="img-faseeha-website" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-sm text-white/70 mb-3">Website Traffic</h4>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={faseehaTrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="week" stroke="rgba(255,255,255,0.3)" fontSize={9} />
              <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} />
              <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
              <Area type="monotone" dataKey="visitors" stroke="#C4A052" fill="#C4A052" fillOpacity={0.4} name="Visitors" />
              <Area type="monotone" dataKey="sessions" stroke="#A8935F" fill="#A8935F" fillOpacity={0.2} name="Sessions" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-sm text-white/70 mb-3">Sales Performance</h4>
          <ResponsiveContainer width="100%" height={160}>
            <RechartsLineChart data={faseehaSalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={8} />
              <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickFormatter={(v) => `£${v/1000}k`} />
              <Tooltip 
                formatter={(value: number) => [`£${value.toLocaleString()}`, 'Sales']}
                contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(196,160,82,0.3)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Line type="monotone" dataKey="sales" stroke="#C4A052" strokeWidth={2} dot={{ fill: '#C4A052', r: 3 }} />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function CaseStudyDetail({ id }: { id: CaseStudyId }) {
  switch (id) {
    case 'genflow': return <GenflowDetail />;
    case 'ora-suites': return <OraDetail />;
    case 'nur-cafe': return <NurCafeDetail />;
    case 'nur-cafe-expansion': return <NurCafeExpansionDetail />;
    case 'ads': return <AdsDetail />;
    case 'faseeha': return <FaseehaDetail />;
  }
}

export default function ClientResults() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyId>('genflow');

  const handleBookCall = () => {
    window.location.href = '/services#book-call';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal overflow-hidden" data-testid="section-results-hero">
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
              Real businesses. Real data. Real transformation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center" data-testid="stat-revenue">
                <p className="text-3xl md:text-4xl text-gold font-bold">$2.6M+</p>
                <p className="text-cream/60 text-xs uppercase tracking-wider mt-1">Generated in 2025</p>
              </div>
              <div className="text-center" data-testid="stat-businesses">
                <p className="text-3xl md:text-4xl text-gold font-bold">60+</p>
                <p className="text-cream/60 text-xs uppercase tracking-wider mt-1">Businesses Impacted</p>
              </div>
              <div className="text-center" data-testid="stat-close-rate">
                <p className="text-3xl md:text-4xl text-gold font-bold">45%</p>
                <p className="text-cream/60 text-xs uppercase tracking-wider mt-1">Avg Close Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Case Studies Section */}
      <section className="bg-[#111111] min-h-[80vh]" data-testid="section-case-studies">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[80vh]">
            
            {/* Left: Client Logo Cards Grid */}
            <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0 border-r border-white/8 p-6 lg:py-10 lg:overflow-y-auto lg:max-h-[85vh] lg:sticky lg:top-0 z-50">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-6 font-medium">Recent Clients</p>
              <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
                {caseStudies.map((study) => (
                  <button
                    key={study.id}
                    onClick={() => !study.disabled && setSelectedStudy(study.id)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-300 border-2 group ${
                      study.disabled 
                        ? 'opacity-20 grayscale cursor-not-allowed border-transparent' 
                        : selectedStudy === study.id
                          ? 'border-gold ring-1 ring-gold/30 scale-[1.02]'
                          : 'border-white/5'
                    }`}
                    data-testid={`card-client-${study.id}`}
                    disabled={study.disabled}
                  >
                    <div 
                      className="aspect-square flex items-center justify-center p-4 relative"
                      style={{ backgroundColor: study.bgColor }}
                    >
                      <img
                        src={study.logo}
                        alt={study.name}
                        className={`max-w-[85%] max-h-[65%] object-contain transition-all duration-300 ${
                          selectedStudy === study.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                        }`}
                      />
                      {selectedStudy === study.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold"></div>
                      )}
                    </div>
                    <div className="bg-[#1a1a1a] px-2.5 py-2">
                      <p className={`text-xs font-medium truncate ${selectedStudy === study.id ? 'text-gold' : 'text-white/70'}`}>
                        {study.name}
                      </p>
                      <p className="text-[10px] text-white/30 truncate">{study.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Detail Panel */}
            <div className="flex-1 p-6 lg:p-10 lg:overflow-y-auto lg:max-h-[85vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedStudy}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <CaseStudyDetail id={selectedStudy} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-cream" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-sm tracking-wider uppercase mb-3 font-medium">Versatile Expertise</p>
              <h2 className="text-3xl md:text-4xl text-charcoal font-bold tracking-tight">
                Industries We Serve
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industriesServed.map((industry, i) => (
              <ScrollReveal key={i} delay={0.05 * i}>
                <div className="bg-white rounded-xl p-5 text-center border border-charcoal/8" data-testid={`card-industry-${i}`}>
                  <industry.icon className="w-7 h-7 text-gold mx-auto mb-2" />
                  <h3 className="text-charcoal font-semibold text-sm mb-0.5">{industry.name}</h3>
                  <p className="text-charcoal/45 text-xs">{industry.count} clients</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
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
