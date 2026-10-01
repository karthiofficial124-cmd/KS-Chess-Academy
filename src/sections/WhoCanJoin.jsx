import React from 'react';
import { Baby, GraduationCap, UserCheck, Users2, ArrowRight, Sparkles, BookOpen, Target, Globe } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';
import { useEnquiry } from '../context/EnquiryContext';

export const WhoCanJoin = () => {
  const { openEnquiry } = useEnquiry();
  const audienceStyles = [
    {
      id: "kids",
      accentBg: "from-[#1B222B] to-[#11151B]",
      borderColor: "border-white/10 hover:border-[#D4AF37]/50",
      icon: <Baby className="w-6 h-6 text-[#F2D58A]" />,
      tag: "Ages 4 - 10",
      badgeText: "Foundations & Joy",
      chessPiece: "♟"
    },
    {
      id: "students",
      accentBg: "from-[#161D26] to-[#11151B]",
      borderColor: "border-[#D4AF37]/30 hover:border-[#D4AF37]",
      icon: <GraduationCap className="w-6 h-6 text-[#F2D58A]" />,
      tag: "School & College",
      badgeText: "Tactics & Competition",
      chessPiece: "♞"
    },
    {
      id: "adults",
      accentBg: "from-[#11151B] to-[#0D1015]",
      borderColor: "border-white/10 hover:border-[#D4AF37]/50",
      icon: <UserCheck className="w-6 h-6 text-[#F2D58A]" />,
      tag: "Professionals & Enthusiasts",
      badgeText: "Deep Strategy & Calculation",
      chessPiece: "♜"
    },
    {
      id: "all-ages",
      accentBg: "from-[#1B222B] to-[#161D26]",
      borderColor: "border-white/10 hover:border-[#D4AF37]/50",
      icon: <Users2 className="w-6 h-6 text-[#F2D58A]" />,
      tag: "Any Skill Level",
      badgeText: "Tailored Growth",
      chessPiece: "♛"
    }
  ];

  return (
    <section id="audience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#11151B] relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#1B222B]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Admissions Open"
          title="WHO CAN JOIN?"
          subtitle="Every age group follows a tailored curriculum engineered for their developmental stage and personal goals."
        />

        {/* 4 Distinct Horizontal Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_DATA.targetAudiences.map((audience, idx) => {
            const style = audienceStyles[idx];
            return (
              <div
                key={audience.id}
                className={`bg-gradient-to-b ${style.accentBg} rounded-3xl p-7 flex flex-col justify-between border ${style.borderColor} transition-all duration-300 group hover:-translate-y-1.5 shadow-xl relative overflow-hidden`}
              >
                {/* Subtle Background Chess Symbol Watermark */}
                <div className="absolute -top-3 -right-2 text-6xl text-white/[0.03] select-none font-serif pointer-events-none group-hover:text-[#D4AF37]/10 transition-colors">
                  {style.chessPiece}
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center shadow-inner group-hover:border-[#D4AF37]/40 transition-colors">
                      {style.icon}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#07090C]/80 text-[#A8AFB8] border border-white/5">
                      {style.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-cinzel font-bold text-white mb-1 group-hover:text-[#F2D58A] transition-colors">
                    {audience.title}
                  </h3>

                  <span className="text-xs font-semibold text-[#D4AF37] block mb-3">
                    {style.badgeText}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A8AFB8] font-light leading-relaxed mb-6">
                    {audience.description}
                  </p>
                </div>

                {/* Direct Query CTA */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => openEnquiry({
                      title: `Enquire for ${audience.title}`,
                      badge: audience.title,
                      message: `Hello KS Chess Academy, I would like to enquire about chess classes for ${audience.title}.`,
                      emailSubject: `Enquiry - Chess Coaching for ${audience.title}`
                    })}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F2D58A] hover:text-[#FFFFFF] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
