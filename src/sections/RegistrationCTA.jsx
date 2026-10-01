import React from 'react';
import { FileText, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';

export const RegistrationCTA = () => {
  return (
    <section 
      id="register" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F2EA] text-[#07090C] relative overflow-hidden transition-colors"
    >
      {/* Subtle light geometric accents in background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8C6A35]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Ivory Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07090C]/5 border border-[#07090C]/15 text-[#07090C] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#8C6A35]" />
          <span>NEW ADMISSIONS OPEN</span>
        </div>

        {/* Large High-Contrast Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-black text-[#07090C] tracking-tight uppercase leading-[1.08] mb-4">
          READY TO MAKE YOUR <br />
          <span className="text-[#8C6A35]">NEXT MOVE?</span>
        </h2>

        {/* Supporting Subtitle */}
        <p className="text-base sm:text-xl text-[#3A424E] max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Start your chess journey with KS Chess Academy. Join our online batches or in-person centers across Thoothukudi, Tirunelveli and Puthiyamputhur.
        </p>

        {ACADEMY_DATA.formUrl && (
          <div className="flex justify-center mb-10">
            <a
              href={ACADEMY_DATA.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#07090C] hover:bg-[#1B222B] text-white px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wider uppercase flex items-center justify-center gap-3 shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <FileText className="w-5 h-5 text-[#F2D58A] shrink-0" />
              <span>REGISTER VIA GOOGLE FORM</span>
            </a>
          </div>
        )}

        {/* Direct Admissions Hotline Callout */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-[#4A525D] font-medium">
          <Phone className="w-4 h-4 text-[#8C6A35]" />
          <span>Questions? Call us:</span>
          <a 
            href={`tel:${ACADEMY_DATA.phone}`} 
            className="text-[#07090C] font-black underline underline-offset-4 decoration-[#8C6A35]/50 hover:text-[#8C6A35] transition-colors"
          >
            {ACADEMY_DATA.phoneDisplay}
          </a>
        </div>

        {/* Highlights Bar */}
        <div className="mt-12 pt-8 border-t border-[#07090C]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-[#4A525D] font-medium">
          <div className="flex items-center justify-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#8C6A35]" />
            <span>Online, Offline &amp; Individual</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#8C6A35]" />
            <span>Kids, Students &amp; Adults</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#8C6A35]" />
            <span>Fast Admission Confirmation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
