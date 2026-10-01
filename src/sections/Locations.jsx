import React from 'react';
import { MapPin, HelpCircle, Globe } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';
import { useEnquiry } from '../context/EnquiryContext';

export const Locations = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="locations" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#11151B] relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Subtle Background Map / Grid Ambient Effect */}
      <div className="absolute inset-0 bg-chess-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#1B222B]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Training Centers"
          title="TRAIN WITH US"
          subtitle="Accessible offline coaching centers across prime regional locations offering dedicated over-the-board tournament environments."
        />

        {/* 3 Location Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACADEMY_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              className="card-slate rounded-3xl p-8 flex flex-col justify-between group hover:border-[#D4AF37]/50 shadow-xl relative overflow-hidden"
            >
              {/* Corner Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#07090C] text-[#F2D58A] border border-white/10">
                  {loc.tag}
                </span>
              </div>

              <div>
                {/* Location Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center text-[#F2D58A] mb-6 group-hover:scale-105 transition-transform shadow-inner">
                  <MapPin className="w-7 h-7 text-[#D4AF37]" />
                </div>

                {/* Location City Name */}
                <h3 className="text-2xl font-cinzel font-bold text-white mb-2 group-hover:text-[#F2D58A] transition-colors uppercase">
                  {loc.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A8AFB8] font-light leading-relaxed mb-6">
                  {loc.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => openEnquiry({
                  title: `Enquire for ${loc.name}`,
                  badge: `${loc.name} Training Center`,
                  message: ACADEMY_DATA.whatsappMessages[loc.id],
                  emailSubject: `Enquiry - ${loc.name} Classes`
                })}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl btn-gold-primary text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <HelpCircle className="w-4 h-4" />
                <span>ENQUIRE NOW</span>
              </button>
            </div>
          ))}
        </div>

        {/* Global Online note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07090C] border border-white/10 text-xs sm:text-sm text-[#A8AFB8]">
            <Globe className="w-4 h-4 text-[#F2D58A]" />
            <span>Also conducting daily &amp; weekend <strong className="text-white">Online Classes</strong> for students worldwide.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
