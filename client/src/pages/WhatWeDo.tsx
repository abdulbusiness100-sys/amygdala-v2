import { useLocation } from "wouter";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatWeDo() {
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

  const coreValues = [
    { icon: Target, title: "We Operate, Not Advise", desc: "Every engagement is hands-on execution. We don't hand you a framework and wish you luck. We build the systems ourselves." },
    { icon: Users, title: "Expert Network at No Extra Cost", desc: "We source specialist directors from our network — 7 and 8-figure operators — included in your engagement." },
    { icon: Lightbulb, title: "We Adopt Your Business", desc: "We work as if we own equity. Your growth is our growth. Your bottleneck is our problem to solve." },
  ];

  return (
    <div className="overflow-hidden relative min-h-screen grain">
      {/* Scroll Statement */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-white">
        <motion.h2
          initial={{ opacity: 0.1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold text-charcoal text-center max-w-4xl leading-tight tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          A network of directors who&apos;ve done{" "}
          <span className="text-gold">7 and 8-figure exits.</span>{" "}
          Now operating inside your business.
        </motion.h2>
      </section>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-px h-12 bg-gold mx-auto mb-8"></div>
            <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4">OUR PROCESS</p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6">
              Your Business. Our Operators.<br />
              <span className="text-gradient">90 Days to Transformation.</span>
            </h1>
            <p className="text-xl text-charcoal-medium max-w-2xl mx-auto">
              We embed C-level operators — COO, CTO, CFO, CSO — directly into your business. In 90 days, we build the infrastructure that lets you scale without being the bottleneck.
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
                <div className="bg-white p-8 rounded-2xl text-center h-full border border-charcoal/10 hover:border-gold/30 transition-colors duration-300">
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


    </div>
  );
}
