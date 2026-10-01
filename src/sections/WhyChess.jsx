import React from 'react';
import { Brain, Focus, Lightbulb, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';

export const WhyChess = () => {
  const iconMap = {
    'strategic-thinking': <Brain className="w-6 h-6 text-[#F2D58A]" />,
    'improved-focus': <Focus className="w-6 h-6 text-[#F2D58A]" />,
    'problem-solving': <Lightbulb className="w-6 h-6 text-[#F2D58A]" />,
    'confidence-discipline': <ShieldCheck className="w-6 h-6 text-[#F2D58A]" />
  };

  const pillars = ACADEMY_DATA.whyChessPillars;

  return (
    <section id="why-chess" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090C] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#1B222B]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#1B222B]/80 border border-white/10 text-[#F2D58A] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            COGNITIVE MASTERY
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold text-white tracking-tight uppercase leading-[1.1] mb-4">
            MORE THAN A GAME.
          </h2>
          
          <p className="text-lg sm:text-2xl text-[#F5F2EA] font-cinzel italic leading-relaxed text-[#F2D58A]">
            “Chess develops the way you think, plan and make decisions.”
          </p>
        </div>

        {/* Asymmetric Editorial Grid (Varied Heights and Spans) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Strategic Thinking (Spans 7 cols on md) */}
          <div className="md:col-span-7 card-editorial rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#D4AF37]/40">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                  {iconMap['strategic-thinking']}
                </div>
                <span className="font-cinzel text-2xl font-black text-[#A8AFB8]/40 group-hover:text-[#F2D58A] transition-colors">
                  01
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Forward Foresight
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white mb-3">
                {pillars[0].title}
              </h3>
              <p className="text-base text-[#F5F2EA] font-medium mb-3">
                {pillars[0].headline}
              </p>
              <p className="text-sm text-[#A8AFB8] font-light leading-relaxed max-w-xl">
                {pillars[0].description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A8AFB8]">
              <span>Executive Brain Function</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: Improved Focus (Spans 5 cols on md) */}
          <div className="md:col-span-5 card-slate rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#D4AF37]/40">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                  {iconMap['improved-focus']}
                </div>
                <span className="font-cinzel text-2xl font-black text-[#A8AFB8]/40 group-hover:text-[#F2D58A] transition-colors">
                  02
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Sustained Attention
              </span>
              <h3 className="text-2xl font-cinzel font-bold text-white mb-3">
                {pillars[1].title}
              </h3>
              <p className="text-sm text-[#F5F2EA] font-medium mb-2">
                {pillars[1].headline}
              </p>
              <p className="text-xs sm:text-sm text-[#A8AFB8] font-light leading-relaxed">
                {pillars[1].description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A8AFB8]">
              <span>Attention Span &amp; Stamina</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Problem Solving (Spans 5 cols on md) */}
          <div className="md:col-span-5 card-slate rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#D4AF37]/40">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                  {iconMap['problem-solving']}
                </div>
                <span className="font-cinzel text-2xl font-black text-[#A8AFB8]/40 group-hover:text-[#F2D58A] transition-colors">
                  03
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Analytical Resolution
              </span>
              <h3 className="text-2xl font-cinzel font-bold text-white mb-3">
                {pillars[2].title}
              </h3>
              <p className="text-sm text-[#F5F2EA] font-medium mb-2">
                {pillars[2].headline}
              </p>
              <p className="text-xs sm:text-sm text-[#A8AFB8] font-light leading-relaxed">
                {pillars[2].description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A8AFB8]">
              <span>Tactical Calculation</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 4: Confidence & Discipline (Spans 7 cols on md) */}
          <div className="md:col-span-7 card-editorial rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#D4AF37]/40">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#07090C] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                  {iconMap['confidence-discipline']}
                </div>
                <span className="font-cinzel text-2xl font-black text-[#A8AFB8]/40 group-hover:text-[#F2D58A] transition-colors">
                  04
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Mental Resilience
              </span>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white mb-3">
                {pillars[3].title}
              </h3>
              <p className="text-base text-[#F5F2EA] font-medium mb-3">
                {pillars[3].headline}
              </p>
              <p className="text-sm text-[#A8AFB8] font-light leading-relaxed max-w-xl">
                {pillars[3].description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A8AFB8]">
              <span>Character &amp; Sportsmanship</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
