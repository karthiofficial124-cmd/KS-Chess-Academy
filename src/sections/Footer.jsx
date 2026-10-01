import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle, ExternalLink } from 'lucide-react';
import { Logo } from '../components/Logo';
import { ACADEMY_DATA } from '../data/academyData';
import { useEnquiry } from '../context/EnquiryContext';

export const Footer = () => {
  const { openEnquiry } = useEnquiry();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Credentials", href: "#credentials" },
    { label: "About", href: "#why-chess" },
    { label: "Classes", href: "#classes" },
    { label: "Learning", href: "#learning" },
    { label: "Locations", href: "#locations" },
    { label: "Founder", href: "#founder" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] pt-16 pb-28 md:pb-12 text-[#A8AFB8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="full" showTagline={true} />
            <p className="text-xs sm:text-sm text-[#A8AFB8] max-w-sm leading-relaxed mt-3 font-light">
              Fostering strategic intellect, patience, and tournament chess excellence for kids, students, and adults.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openEnquiry()}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F2D58A] hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {ACADEMY_DATA.cubeWebsiteUrl && (
                <li>
                  <a
                    href={ACADEMY_DATA.cubeWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2D58A] hover:underline flex items-center gap-1.5 pt-1"
                  >
                    <span>Partner Cube Academy</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                </li>
              )}
              {ACADEMY_DATA.formUrl && (
                <li>
                  <a
                    href={ACADEMY_DATA.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2D58A] hover:underline flex items-center gap-1.5 pt-1"
                  >
                    <span>Online Admission Form</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Locations Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-cinzel font-bold text-white uppercase tracking-widest">
              Academy Information
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm font-light">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <a href={`tel:${ACADEMY_DATA.phone}`} className="hover:text-white transition-colors">
                  {ACADEMY_DATA.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <a href={`mailto:${ACADEMY_DATA.email}`} className="hover:text-white transition-colors break-all">
                  {ACADEMY_DATA.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Offline: Thoothukudi • Tirunelveli • Puthiyamputhur
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8AFB8]/70">
          <p>© 2026 KS Chess Academy. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#F2D58A] hover:text-white transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
