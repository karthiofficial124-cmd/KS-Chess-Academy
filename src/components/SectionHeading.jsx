import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
  lightMode = false
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors ${
          lightMode 
            ? 'bg-[#07090C]/5 border border-[#07090C]/15 text-[#11151B]' 
            : 'bg-[#1B222B]/80 border border-white/10 text-[#F2D58A]'
        } ${centered ? 'mx-auto' : ''}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${lightMode ? 'bg-[#8C6A35]' : 'bg-[#D4AF37]'}`}></span>
          {badge}
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-tight leading-tight ${
        lightMode ? 'text-[#07090C]' : 'text-[#FFFFFF]'
      }`}>
        {title}
      </h2>

      {/* Refined Minimal Divider */}
      <div className={`flex items-center gap-3 py-1 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className={`h-[1px] w-12 ${lightMode ? 'bg-[#07090C]/20' : 'bg-gradient-to-r from-transparent to-[#D4AF37]/50'}`}></div>
        <div className={`w-1.5 h-1.5 rotate-45 ${lightMode ? 'bg-[#8C6A35]' : 'bg-[#D4AF37]'}`}></div>
        <div className={`h-[1px] w-12 ${lightMode ? 'bg-[#07090C]/20' : 'bg-gradient-to-l from-transparent to-[#D4AF37]/50'}`}></div>
      </div>

      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed ${
          lightMode ? 'text-[#4A525D]' : 'text-[#A8AFB8]'
        } ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
