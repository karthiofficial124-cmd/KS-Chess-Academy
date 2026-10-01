import React from 'react';
import { Monitor, Building2, UserCheck, CheckCircle2, CalendarDays, Clock, HelpCircle, Star, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';
import { useEnquiry } from '../context/EnquiryContext';

export const Classes = () => {
  const { openEnquiry } = useEnquiry();
  const iconMap = {
    online: <Monitor className="w-6 h-6 text-[#F2D58A]" />,
    offline: <Building2 className="w-6 h-6 text-[#F2D58A]" />,
    individual: <UserCheck className="w-6 h-6 text-[#F2D58A]" />
  };

  return (
    <section id="classes" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090C] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#1B222B]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Structured Learning Streams"
          title="CHESS CLASSES"
          subtitle="Select the format that fits your learning style. Every format follows our verified curriculum with personalized mentor feedback."
        />

        {/* 3-Column Layout: Online, Offline, and Featured Individual Personal Training */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {ACADEMY_DATA.classes.map((cls) => {
            const isFeatured = cls.isFeatured;

            return (
              <div
                key={cls.id}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  isFeatured
                    ? 'card-featured lg:-translate-y-3 lg:shadow-[0_20px_50px_rgba(0,0,0,0.9)]'
                    : 'card-editorial hover:border-[#D4AF37]/40'
                }`}
              >
                {/* Featured Badge for Individual Training */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D4AF37] to-[#F2D58A] text-[#07090C] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    <span>ELITE 1-ON-1</span>
                  </div>
                )}

                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${
                      isFeatured 
                        ? 'bg-[#1B222B] border border-[#D4AF37]/50' 
                        : 'bg-[#07090C] border border-white/10'
                    }`}>
                      {iconMap[cls.id]}
                    </div>
                    <span className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${
                      isFeatured 
                        ? 'bg-[#D4AF37]/15 text-[#F2D58A] border-[#D4AF37]/30' 
                        : 'bg-[#1B222B] text-[#A8AFB8] border-white/10'
                    }`}>
                      {cls.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-cinzel font-bold text-white mb-1.5">
                    {cls.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
                    {cls.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A8AFB8] font-light leading-relaxed mb-6">
                    {cls.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-3 mb-8">
                    {cls.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#1B222B] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-[#F2D58A]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#F5F2EA] font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire Now CTA with Popup */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => openEnquiry({
                      title: cls.title,
                      badge: cls.subtitle,
                      message: ACADEMY_DATA.whatsappMessages[cls.messageType] || `Hello KS Chess Academy, I would like to enquire about ${cls.title}.`,
                      emailSubject: `Enquiry - ${cls.title}`
                    })}
                    className={`w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all cursor-pointer ${
                      isFeatured
                        ? 'btn-gold-primary text-black'
                        : 'btn-secondary-dark text-white hover:text-[#F2D58A]'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>ENQUIRE NOW</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>

        {/* Timings & Batch Scheduling Strip */}
        <div className="mt-12 rounded-2xl card-slate p-6 sm:p-8 border border-white/10 text-center relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#07090C] border border-white/10 flex items-center justify-center shrink-0">
                <CalendarDays className="w-6 h-6 text-[#F2D58A]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-cinzel font-bold text-white uppercase">
                  DAILY &amp; WEEKEND CLASSES
                </h4>
                <p className="text-xs sm:text-sm text-[#A8AFB8] font-light">
                  {ACADEMY_DATA.timingsNote}
                </p>
              </div>
            </div>

            <div className="h-px sm:h-10 w-full sm:w-px bg-white/10"></div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A8AFB8]">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Flexible schedules for school students &amp; working professionals</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
