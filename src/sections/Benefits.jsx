import React from 'react';
import { 
  Compass, 
  Focus, 
  Calculator, 
  Shield, 
  CheckCircle, 
  Puzzle, 
  Hourglass, 
  Sparkles 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';

export const Benefits = () => {
  const benefitIcons = {
    'STRATEGIC VISION': <Compass className="w-5 h-5 text-[#F2D58A]" />,
    'RAZOR FOCUS': <Focus className="w-5 h-5 text-[#F2D58A]" />,
    'CALCULATION': <Calculator className="w-5 h-5 text-[#F2D58A]" />,
    'DISCIPLINE': <Shield className="w-5 h-5 text-[#F2D58A]" />,
    'DECISION MAKING': <CheckCircle className="w-5 h-5 text-[#F2D58A]" />,
    'PROBLEM SOLVING': <Puzzle className="w-5 h-5 text-[#F2D58A]" />,
    'PATIENCE': <Hourglass className="w-5 h-5 text-[#F2D58A]" />,
    'SELF-CONFIDENCE': <Sparkles className="w-5 h-5 text-[#F2D58A]" />
  };

  return (
    <section id="benefits" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090C] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-[#1B222B]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Lifelong Cognitive Edge"
          title="BENEFITS OF CHESS"
          subtitle="Chess shapes executive cognitive faculties, emotional self-regulation, and analytical clarity that endure for life."
        />

        {/* 8 Benefits Modern Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_DATA.benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className="card-editorial rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#D4AF37]/40 shadow-lg"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#07090C] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-colors shadow-inner">
                    {benefitIcons[benefit.name] || <Sparkles className="w-5 h-5 text-[#F2D58A]" />}
                  </div>
                  <span className="text-xs font-cinzel font-bold text-[#A8AFB8]/40 group-hover:text-[#F2D58A] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-cinzel font-bold text-white mb-2 group-hover:text-[#F2D58A] transition-colors">
                  {benefit.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A8AFB8] font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#A8AFB8]">
                <span>Pillar #{index + 1}</span>
                <span className="text-[#D4AF37] font-semibold">Mastery</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
