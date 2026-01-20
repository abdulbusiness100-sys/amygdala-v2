import { Link } from "wouter";
import logo from "@assets/AMYGDALA_ACQUISITIONS_(6)_1768919980907.png";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 - Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="SPIDXR NETWORK" className="h-5 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              The unified growth engine for ambitious businesses ready to scale without the chaos.
            </p>
          </div>
          
          {/* Column 2 - Navigate */}
          <div>
            <h4 className="font-accent font-semibold text-gold text-sm tracking-wider uppercase mb-6">Navigate</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-cream/70 hover:text-gold transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-cream/70 hover:text-gold transition-colors text-sm">Services</Link></li>
              <li><Link href="/what-we-do" className="text-cream/70 hover:text-gold transition-colors text-sm">Process</Link></li>
              <li><Link href="/services#book-call" className="text-cream/70 hover:text-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-accent font-semibold text-gold text-sm tracking-wider uppercase mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-cream/70 text-sm">
              <li>growth@spidxr.co.uk</li>
              <li className="pt-2">London, UK</li>
              <li>Los Angeles, CA</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-cream/50 flex items-center gap-1">
            <span>© {new Date().getFullYear()}</span>
            <img src={logo} alt="SPIDXR NETWORK" className="h-3 w-auto brightness-0 invert opacity-70" style={{ imageRendering: 'crisp-edges' }} data-testid="logo-footer-copyright" />
            <span>. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-cream/50">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
