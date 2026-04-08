"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  RiGlobalFill,
  RiPaletteFill,
  RiShareFill,
  RiShoppingBagFill,
  RiFocus2Fill,
  RiRocketFill,
  RiMailFill,
  RiTeamFill,
  RiHeadphoneFill,
  RiSettings3Fill,
  RiBuilding2Fill,
  RiBrainFill,
} from "@remixicon/react";

interface Service {
  icon: React.ElementType;
  title: string;
  metric: string;
}

interface ServiceGroup {
  title: string;
  badge: string;
  tagline: string;
  services: Service[];
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "CTO — Technology & Digital",
    badge: "CTO",
    tagline: "Build it. Launch it. Scale it.",
    services: [
      { icon: RiGlobalFill, title: "Website Design & Development", metric: "47% increase in time-on-site" },
      { icon: RiPaletteFill, title: "Brand Identity & Strategy", metric: "23% higher prices commanded" },
      { icon: RiShareFill, title: "Social Media Automation", metric: "3x engagement, 70% less time" },
      { icon: RiShoppingBagFill, title: "E-commerce Optimization", metric: "34% revenue increase in 90 days" },
      { icon: RiFocus2Fill, title: "Lead Generation Systems", metric: "2.3x more qualified leads" },
      { icon: RiRocketFill, title: "Paid & Organic Acquisition", metric: "4.2x ROAS across clients" },
    ],
  },
  {
    title: "CSO — Sales & Revenue",
    badge: "CSO",
    tagline: "Pipeline. Close rate. Revenue. Systematized.",
    services: [
      { icon: RiMailFill, title: "Lead Nurturing & Email Automation", metric: "67% of closed deals via 5+ emails" },
      { icon: RiTeamFill, title: "Full Sales Cycle Management", metric: "2.1x close rate improvement" },
      { icon: RiHeadphoneFill, title: "Customer Success & Retention", metric: "38% increase in CLV" },
      { icon: RiSettings3Fill, title: "Sales Process Automation", metric: "12 hours/week saved" },
    ],
  },
  {
    title: "COO & CFO — Operations & Finance",
    badge: "COO+CFO",
    tagline: "Systems that run without you. Finances that grow with you.",
    services: [
      { icon: RiGlobalFill, title: "Full Application Development", metric: "Concept to MVP in 8-12 weeks" },
      { icon: RiBuilding2Fill, title: "Custom CRM Development", metric: "Built for exactly how you sell" },
      { icon: RiBrainFill, title: "AI Integration & Automation", metric: "40% reduction in manual work" },
      { icon: RiRocketFill, title: "Go-To-Market Strategy", metric: "GTM plans that execute" },
      { icon: RiBuilding2Fill, title: "Enterprise Operations", metric: "Scale without growing pains" },
    ],
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.08,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: { type: "spring" as const, stiffness: 400, damping: 20 },
    },
  };

  return (
    <motion.div variants={cardVariants} whileHover="hover" className="relative group">
      <motion.div
        variants={hoverVariants}
        className="relative flex flex-col items-center p-8 rounded-2xl bg-[#1a1a1a] border border-[#C4A052]/15 transition-shadow duration-300 shadow-md hover:shadow-2xl hover:shadow-[#C4A052]/20 hover:border-[#C4A052]/40 h-full"
      >
        {/* Icon with gradient background */}
        <motion.div
          className="relative mb-6"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, #C4A052 0%, #1a1a1a 100%)`,
            }}
          >
            <service.icon className="w-12 h-12 text-white" />
          </div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50"
            style={{
              background: `linear-gradient(135deg, #C4A052 0%, #1a1a1a 100%)`,
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Service title */}
        <h3 className="text-xl font-semibold text-white mb-4 text-center font-display">
          {service.title}
        </h3>

        {/* Metric pill */}
        <motion.div
          className="px-4 py-2 rounded-full text-sm font-medium mt-auto"
          style={{
            backgroundColor: "#C4A052",
            color: "#1a1a1a",
          }}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
        >
          {service.metric}
        </motion.div>

        {/* Decorative corner accent */}
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-50"
          style={{ backgroundColor: "#C4A052" }}
        />
      </motion.div>
    </motion.div>
  );
};

const ServiceGroupBlock = ({ group, groupIndex }: { group: ServiceGroup; groupIndex: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mb-20"
    >
      {/* Group title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          {group.badge === "COO+CFO" ? (
            <>
              <span className="px-3 py-1 rounded-full bg-[#C4A052] text-[#1a1a1a] text-xs font-bold tracking-wider">COO</span>
              <span className="px-3 py-1 rounded-full bg-[#C4A052] text-[#1a1a1a] text-xs font-bold tracking-wider">CFO</span>
            </>
          ) : (
            <span className="px-3 py-1 rounded-full bg-[#C4A052] text-[#1a1a1a] text-xs font-bold tracking-wider">
              {group.badge}
            </span>
          )}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display" style={{ color: "#C4A052" }}>
          {group.title}
        </h2>
        <p className="text-white/60 text-base mt-2">{group.tagline}</p>
        <div className="h-1 w-20 mt-3 rounded-full" style={{ backgroundColor: "#C4A052" }} />
      </motion.div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default function AnimatedServicesShowcase() {
  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.15em] uppercase mb-4" style={{ color: "#C4A052" }}>
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display" style={{ color: "#C4A052" }}>
            C-Level Expertise. Every Function Covered.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            COO. CTO. CFO. CSO. — four C-level operators, one network. We embed directly into your business and build the infrastructure you need to scale.
          </p>
        </motion.div>

        {/* Service groups */}
        {serviceGroups.map((group, index) => (
          <ServiceGroupBlock key={index} group={group} groupIndex={index} />
        ))}
      </div>
    </div>
  );
}
