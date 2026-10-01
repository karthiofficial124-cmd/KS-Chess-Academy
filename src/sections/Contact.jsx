import React from 'react';
import { Phone, Mail, MapPin, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';
import { useEnquiry } from '../context/EnquiryContext';

export const Contact = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090C] relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#1B222B]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Get in Touch"
          title="CONTACT US"
          subtitle="Connect with our coaching team for batch timings, offline center details, or personalized class guidance."
        />

        <div className="mt-14 max-w-4xl mx-auto">
          <div className="card-editorial rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              
              {/* Phone / WhatsApp */}
              <div className="flex flex-col items-center text-center pt-4 md:pt-0">
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center text-[#F2D58A] mb-4 shadow-inner">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                  Phone / WhatsApp
                </h4>
                <a 
                  href={`tel:${ACADEMY_DATA.phone}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#F2D58A] transition-colors"
                >
                  {ACADEMY_DATA.phoneDisplay}
                </a>
                <span className="text-xs text-[#A8AFB8] mt-1">Direct Inquiries &amp; Admissions</span>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center pt-6 md:pt-0 md:px-4">
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center text-[#F2D58A] mb-4 shadow-inner">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                  Email Address
                </h4>
                <a 
                  href={`mailto:${ACADEMY_DATA.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#F2D58A] transition-colors break-all"
                >
                  {ACADEMY_DATA.email}
                </a>
                <span className="text-xs text-[#A8AFB8] mt-1">Official Academy Inquiries</span>
              </div>

              {/* Locations */}
              <div className="flex flex-col items-center text-center pt-6 md:pt-0 md:pl-4">
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center text-[#F2D58A] mb-4 shadow-inner">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                  Offline Centers
                </h4>
                <p className="text-sm font-semibold text-white">
                  Thoothukudi • Tirunelveli • Puthiyamputhur
                </p>
                <span className="text-xs text-[#A8AFB8] mt-1">+ Global Online Classes</span>
              </div>

            </div>

            {/* Open the shared email and WhatsApp enquiry options */}
            <div className="pt-8 border-t border-white/[0.08] flex justify-center">
              <button
                type="button"
                onClick={() => openEnquiry()}
                className="w-full sm:w-auto btn-gold-primary px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-lg text-black"
              >
                <HelpCircle className="w-4 h-4" />
                <span>ENQUIRE NOW</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
