import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Box, ExternalLink, FileText } from 'lucide-react';
import { Logo } from '../components/Logo';
import { ACADEMY_DATA } from '../data/academyData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#why-chess" },
    { label: "Classes", href: "#classes" },
    { label: "Learning", href: "#learning" },
    { label: "Locations", href: "#locations" },
    { label: "Founder", href: "#founder" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090C]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80' 
          : 'bg-gradient-to-b from-[#07090C]/95 via-[#07090C]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="KS Chess Academy Home"
          >
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-[#A8AFB8] hover:text-[#FFFFFF] transition-colors duration-200 tracking-wide rounded-lg relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-2/3"></span>
              </a>
            ))}
          </nav>

          {/* Desktop right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {ACADEMY_DATA.cubeWebsiteUrl && (
              <a
                href={ACADEMY_DATA.cubeWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl text-xs font-semibold text-[#F2D58A] bg-[#1B222B]/70 hover:bg-[#1B222B] border border-white/10 hover:border-[#D4AF37]/50 flex items-center gap-1.5 transition-all shadow-sm"
                title="Visit Partner Cube Academy"
              >
                <Box className="w-3.5 h-3.5 text-[#F2D58A]" />
                <span>Cube Academy</span>
                <ExternalLink className="w-3 h-3 text-[#A8AFB8]" />
              </a>
            )}

            {ACADEMY_DATA.formUrl && (
              <a
                href={ACADEMY_DATA.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-primary px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2"
                aria-label="Register now via Google Form"
              >
                <FileText className="w-4 h-4" />
                <span>REGISTER NOW</span>
              </a>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {ACADEMY_DATA.cubeWebsiteUrl && (
              <a
                href={ACADEMY_DATA.cubeWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-[#F2D58A] bg-[#1B222B] border border-white/10 flex items-center gap-1"
                aria-label="Cube Academy"
              >
                <Box className="w-3 h-3 text-[#F2D58A]" />
                <span>Cube</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#A8AFB8]" />
              </a>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#F5F2EA] bg-[#11151B] border border-white/10 hover:border-[#D4AF37]/50 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#07090C]/98 border-b border-white/10 backdrop-blur-2xl px-5 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-[#F5F2EA] hover:text-[#F2D58A] hover:bg-[#11151B] border border-transparent hover:border-white/5 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#A8AFB8]" />
              </a>
            ))}

            {/* Mobile Cube Website Link */}
            {ACADEMY_DATA.cubeWebsiteUrl && (
              <a
                href={ACADEMY_DATA.cubeWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#11151B] text-[#F2D58A] border border-white/10 text-xs font-semibold tracking-wide mt-2"
              >
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#F2D58A]" />
                  <span>Visit Partner Cube Academy</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A8AFB8]" />
              </a>
            )}

            <div className="pt-4 border-t border-white/10 space-y-3">
              {ACADEMY_DATA.formUrl && (
                <a
                  href={ACADEMY_DATA.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl btn-gold-primary text-black font-bold text-sm tracking-wider uppercase shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>REGISTER NOW</span>
                </a>
              )}

              <a
                href={`tel:${ACADEMY_DATA.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1B222B] text-[#A8AFB8] hover:text-white border border-white/10 text-xs font-medium tracking-wide"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Us: {ACADEMY_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
