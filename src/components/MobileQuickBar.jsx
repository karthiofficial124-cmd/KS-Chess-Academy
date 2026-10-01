import React, { useState, useEffect } from 'react';
import { Phone, FileText } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export const MobileQuickBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Quick mobile registration"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#07090C]/95 backdrop-blur-xl md:hidden border-t border-white/10 shadow-2xl transition-all duration-300 transform translate-y-0"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${ACADEMY_DATA.phone}`}
          aria-label="Call academy"
          className="flex items-center justify-center p-3 rounded-xl bg-[#1B222B] border border-white/10 text-[#F2D58A] shrink-0 active:scale-95 transition-colors"
          title="Call Academy"
        >
          <Phone className="w-5 h-5" />
        </a>

        {ACADEMY_DATA.formUrl && (
          <a
            href={ACADEMY_DATA.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register now via Google Form"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl btn-gold-primary text-black text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg active:scale-95 transition-all"
            title="Register now"
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>REGISTER NOW</span>
          </a>
        )}
      </div>
    </aside>
  );
};
