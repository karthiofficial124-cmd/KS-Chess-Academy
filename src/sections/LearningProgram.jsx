import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';
import { useEnquiry } from '../context/EnquiryContext';

export const LearningProgram = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="learning" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090C] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1B222B]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Curriculum Roadmap"
          title="YOUR CHESS JOURNEY"
          subtitle="A continuous 4-stage piece progression designed to elevate beginners to competitive tournament players."
        />

        {/* Visual Connected Progression Journey */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-20 left-12 right-12 h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/40 to-[#D4AF37]/20 z-0 pointer-events-none"></div>

          {ACADEMY_DATA.learningProgression.map((item, index) => (
            <div
              key={item.level}
              className="card-editorial rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative group hover:border-[#D4AF37]/50 shadow-xl z-10"
            >
              <div>
                {/* Level Piece Emblem Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:border-[#D4AF37]/50 transition-colors">
                    <span className="text-[#F2D58A] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {item.pieceSymbol}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#1B222B] text-[#F2D58A] text-xs font-bold tracking-widest border border-white/10">
                    {item.level}
                  </span>
                </div>

                {/* Piece name tag */}
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-1">
                  <span>Piece: {item.piece}</span>
                </div>

                {/* Level Title */}
                <h3 className="text-xl font-cinzel font-bold text-white mb-2 group-hover:text-[#F2D58A] transition-colors">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#A8AFB8] font-light leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Key Topics List */}
                <ul className="space-y-2.5 mb-6">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F2EA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5"></span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Progression Indicator */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A8AFB8]">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Stage 0{index + 1} of 04</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}

        </div>

        {/* Skill Assessment CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openEnquiry({
              title: 'Chess Skill Assessment',
              badge: 'Curriculum Guidance',
              message: 'Hello KS Chess Academy, I would like to know which learning level is suitable for my current chess skills.',
              emailSubject: 'Enquiry - Chess Skill Assessment'
            })}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F2D58A] hover:text-[#FFFFFF] transition-colors"
          >
            <span>Unsure which level is right for you? ENQUIRE NOW for a quick skill assessment</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
