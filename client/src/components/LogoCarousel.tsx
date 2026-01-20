import { motion } from "framer-motion";

interface ClientLogo {
  name: string;
  logoUrl?: string;
}

interface LogoCarouselProps {
  logos?: ClientLogo[];
}

const defaultLogos: ClientLogo[] = [
  { name: "TechScale" },
  { name: "Velocity" },
  { name: "NexusDev" },
  { name: "Promerch" },
  { name: "GrowthCo" },
  { name: "ScaleUp" },
  { name: "DataFlow" },
  { name: "CloudSync" },
];

export default function LogoCarousel({ logos = defaultLogos }: LogoCarouselProps) {
  const displayLogos = logos.length > 0 ? logos : defaultLogos;
  
  return (
    <section className="py-12 bg-cream-dark overflow-hidden relative" data-testid="section-logo-carousel">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-dark to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-dark to-transparent z-10"></div>
      
      <p className="text-center font-accent text-xs text-charcoal-medium tracking-[0.2em] uppercase mb-8" data-testid="text-trusted-companies">
        Trusted by forward-thinking companies
      </p>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-16 items-center"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...displayLogos, ...displayLogos].map((logo, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 h-10 w-32 bg-charcoal/10 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              data-testid={`logo-client-${i}`}
            >
              {logo.logoUrl ? (
                <img src={logo.logoUrl} alt={logo.name} className="h-6 w-auto object-contain" />
              ) : (
                <span className="font-accent text-xs text-charcoal-medium">{logo.name}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
