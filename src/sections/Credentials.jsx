import React from 'react';
import { ShieldCheck, Trophy, Crown, Award, CheckCircle2, Star, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';

export const Credentials = () => {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#70A5E0]" />,
    Trophy: <Trophy className="w-6 h-6 text-[#F2D58A]" />,
    Crown: <Crown className="w-6 h-6 text-[#E5B567]" />,
    Award: <Award className="w-6 h-6 text-[#8CD1B8]" />
  };

  const badgeColors = [
    "bg-[#1A2C42] text-[#8BB8EE] border-[#2A486C]",
    "bg-[#2C2413] text-[#F2D58A] border-[#5A451E]",
    "bg-[#2C1D13] text-[#F5C75A] border-[#5A381E]",
    "bg-[#132A22] text-[#8CD1B8] border-[#1E5241]"
  ];

  const { founder } = ACADEMY_DATA;

  return (
    <section id="credentials" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D121A] relative overflow-hidden border-y border-white/[0.08]">
      
      {/* Subtle modern radial mesh lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F2D40]/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#162332]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Verified Accreditations"
          title="LEARN FROM EXPERIENCE"
          subtitle="Direct coaching under official FIDE titles, certified international arbitration, and world-record recognized expertise."
        />

        {/* Prestigious Editorial Credentials Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founder.credentialsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#131923] hover:bg-[#18202D] border border-white/10 hover:border-white/20 rounded-3xl p-7 flex flex-col justify-between relative group transition-all duration-300 shadow-xl hover:-translate-y-1.5"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#F2D58A]/60 transition-all"></div>

              <div>
                {/* Header: Icon & Accreditation Stamp */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#0A0E15] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform p-3">
                    {iconMap[item.icon] || <Award className="w-6 h-6 text-[#F2D58A]" />}
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${badgeColors[idx]}`}>
                    Verified
                  </span>
                </div>

                {/* Subtitle tag */}
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#A8AFB8] block mb-1.5">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-cinzel font-bold text-[#FFFFFF] mb-3 leading-snug group-hover:text-[#F5F2EA] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A8AFB8] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-7 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#8E99A8]">
                <span className="uppercase tracking-wider text-[10px] font-semibold">Official Credential</span>
                <BadgeCheck className="w-4 h-4 text-[#8CD1B8]" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
