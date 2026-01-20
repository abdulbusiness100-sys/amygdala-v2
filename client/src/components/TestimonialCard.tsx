import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric?: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The results exceeded everything we expected. Our lead flow tripled in 60 days and our close rate improved by 47%.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechScale Solutions",
    metric: "312% Revenue Growth",
  },
  {
    quote: "Finally, one partner who understands the full picture. No more juggling 6 different agencies.",
    name: "Marcus Chen",
    role: "Founder",
    company: "Velocity Partners",
    metric: "73% Cost Reduction",
  },
  {
    quote: "They didn't just build our system - they transformed how we think about growth. Game-changing.",
    name: "Alexandra Rivera",
    role: "VP Growth",
    company: "Nexus Digital",
    metric: "4.2x ROI",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white relative z-10" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-accent text-gold text-sm tracking-[0.15em] uppercase mb-4" data-testid="text-testimonials-label">CLIENT RESULTS</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal" data-testid="text-testimonials-heading">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group"
              data-testid={`card-testimonial-${i}`}
            >
              <div className="bg-cream rounded-2xl p-8 h-full border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex gap-1 mb-4" data-testid={`rating-stars-${i}`}>
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-charcoal leading-relaxed mb-6 italic" data-testid={`text-testimonial-quote-${i}`}>
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-charcoal font-display text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-charcoal" data-testid={`text-testimonial-name-${i}`}>{testimonial.name}</p>
                    <p className="text-sm text-charcoal-medium" data-testid={`text-testimonial-company-${i}`}>{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                {testimonial.metric && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 rounded-full">
                    <span className="text-xs font-accent font-bold text-gold" data-testid={`text-testimonial-metric-${i}`}>↑ {testimonial.metric}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
