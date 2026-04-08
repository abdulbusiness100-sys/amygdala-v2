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
              Your External COO Partner — Operations, Growth, and Technology unified for ambitious businesses ready to scale.
            </p>
            <div className="mt-6">
              <a
                href="https://linkedin.com/company/spidxr-network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/50 hover:text-gold transition-colors text-sm"
                aria-label="SPIDXR Network on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
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
              <li>network@spidxr.co.uk</li>
              <li className="pt-2">London, UK</li>
              <li>New York, US</li>
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
