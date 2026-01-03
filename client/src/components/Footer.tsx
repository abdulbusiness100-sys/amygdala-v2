import { Link } from "wouter";
import logo from "@assets/brain_logo.svg";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="h-8 w-8 invert opacity-80" />
              <span className="font-display font-bold text-xl text-white">
                AMYGDALA <span className="text-[#6b7b3a]">ACQUISITIONS</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Engineering growth through behavioral psychology, predictive data, and AI automation.
            </p>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Amygdala Acquisitions. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-[#6b7b3a] transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#6b7b3a] transition-colors">Services</Link></li>
              <li><Link href="/what-we-do" className="text-gray-400 hover:text-[#6b7b3a] transition-colors">Methodology</Link></li>
              <li><Link href="/services#audit" className="text-gray-400 hover:text-[#6b7b3a] transition-colors">Get Audit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#6b7b3a] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6b7b3a] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#6b7b3a] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
