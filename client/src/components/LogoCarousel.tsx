import { motion } from "framer-motion";

import logo1 from "@assets/logo_1.png";
import logo2 from "@assets/logo_2.png";
import logo3 from "@assets/logo_3.png";
import logo4 from "@assets/logo_4.png";
import logo5 from "@assets/logo_5.png";
import logo6 from "@assets/logo_6.png";
import logo7 from "@assets/logo_7.png";
import logo8 from "@assets/logo_8.png";
import logo9 from "@assets/logo_9.png";
import logo10 from "@assets/logo_10.png";
import logo11 from "@assets/logo_11.png";
import logo12 from "@assets/logo_12.png";
import logo13 from "@assets/logo_13.png";
import logo14 from "@assets/logo_14.png";
import logo15 from "@assets/logo_15.png";
import logo16 from "@assets/logo_16.png";
import pristinePolishLogo from "@assets/download_(60)_1771092036403.png";
import amygdalaAcquisitionsLogo from "@assets/AMYGDALA_ACQUISITIONS_(2)_1771092230145.png";
import spidxrLogo4k from "@assets/Untitled_design_(1)_Medium_1771092233909.png";
import { Activity, Landmark } from "lucide-react";

const clientLogos = [
  { name: "Client 1", src: logo1 },
  { name: "Client 2", src: logo2 },
  { name: "Client 3", src: logo3 },
  { name: "Client 4", src: logo4 },
  { name: "Client 5", src: logo5 },
  { name: "Client 6", src: logo6 },
  { name: "Client 7", src: logo7 },
  { name: "Client 8", src: logo8 },
  { name: "Client 9", src: logo9 },
  { name: "Client 10", src: logo10 },
  { name: "Client 11", src: logo11 },
  { name: "Client 12", src: logo12 },
  { name: "Client 13", src: logo13 },
  { name: "Client 14", src: logo14 },
  { name: "Client 15", src: logo15 },
  { name: "Client 16", src: logo16 },
  { name: "Pristine Polish", src: pristinePolishLogo },
  { name: "Amygdala Acquisitions", src: amygdalaAcquisitionsLogo },
  { name: "SPIDXR Client", src: spidxrLogo4k },
  { name: "NHS", icon: Activity },
  { name: "ADS DADDY", text: "ADS DADDY" },
  { name: "IMA", text: "IMA" },
  { name: "SumUp", icon: Landmark },
];

export default function LogoCarousel() {
  return (
    <section className="py-14 bg-white overflow-hidden relative" data-testid="section-logo-carousel">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <p className="text-center text-xs text-charcoal-medium/60 tracking-[0.2em] uppercase mb-8" data-testid="text-trusted-companies">
        Trusted by forward-thinking companies
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -2400] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              data-testid={`logo-client-${i}`}
            >
              {logo.src ? (
                <img src={logo.src} alt={logo.name} className={`${logo.name === "SPIDXR Client" ? "h-12" : "h-8"} w-auto object-contain max-w-[120px]`} />
              ) : logo.icon ? (
                <logo.icon className="h-8 w-auto text-charcoal" />
              ) : (
                <span className="text-sm font-bold text-charcoal tracking-tight">{logo.text}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
