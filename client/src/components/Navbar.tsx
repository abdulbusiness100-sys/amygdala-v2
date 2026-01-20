import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/AMYGDALA_ACQUISITIONS_(6)_1768919980907.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleBookCall = () => {
    if (location === "/services") {
      const element = document.getElementById("book-call");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation("/services");
      setTimeout(() => {
        const element = document.getElementById("book-call");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/what-we-do" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/90 dark:bg-charcoal/90 backdrop-blur-lg shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src={logo} alt="SPIDXR NETWORK" className="h-6 w-auto" style={{ imageRendering: 'crisp-edges' }} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`font-accent text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                    isActive(link.href)
                      ? "text-gold"
                      : isScrolled 
                        ? "text-charcoal hover:text-gold" 
                        : "text-charcoal-medium hover:text-gold"
                  }`}
                >
                  {link.name}
                </div>
              </Link>
            ))}
            <Button 
              className="font-accent font-semibold gold-gradient text-charcoal border-0 hover:opacity-90 transition-opacity" 
              size="sm" 
              onClick={handleBookCall}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-charcoal border-t border-gold/20 absolute top-full left-0 right-0 p-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`font-accent text-lg font-medium p-2 rounded-lg transition-colors cursor-pointer ${
                  isActive(link.href)
                    ? "bg-gold/10 text-gold"
                    : "text-charcoal-medium hover:bg-gold/5 hover:text-gold"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </div>
            </Link>
          ))}
          <Button 
            className="w-full font-accent gold-gradient text-charcoal border-0" 
            onClick={handleBookCall}
          >
            Book a Call
          </Button>
        </div>
      )}
    </nav>
  );
}
