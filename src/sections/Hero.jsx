import React from 'react';
import { Compass, Sparkles, Shield, Trophy, Users, Monitor, CheckCircle2, Award, FileText } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export const Hero = () => {
  const scrollToClasses = (e) => {
    e.preventDefault();
    const el = document.querySelector('#classes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const { founder } = ACADEMY_DATA;

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07090C]"
    >
      {/* Background subtle grid and atmospheric glow */}
      <div className="absolute inset-0 bg-chess-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#1B222B]/60 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Main Asymmetric Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow">
        
        {/* Left Column: Editorial Typography & CTAs (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Small Brand Eyebrow + Admission Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#F2D58A] uppercase">
              KS CHESS ACADEMY
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B222B] border border-white/10 text-xs font-semibold text-[#FFFFFF] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="tracking-wider uppercase text-[11px]">NEW ADMISSIONS OPEN</span>
            </div>
          </div>

          {/* Large Main Heading (H1 for SEO) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-black tracking-tight text-[#FFFFFF] uppercase leading-[1.06]">
            BUILD YOUR MIND. <br />
            <span className="gold-gradient-text">MASTER THE GAME.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg md:text-xl text-[#A8AFB8] font-light max-w-2xl leading-relaxed">
            Professional chess coaching for <span className="text-[#F5F2EA] font-medium">kids</span>, <span className="text-[#F5F2EA] font-medium">students</span> and <span className="text-[#F5F2EA] font-medium">adults</span> through online, offline and individual personal training.
          </p>

          {/* Founder Mentorship Tagline with Full Titles */}
          <div className="p-3.5 rounded-2xl bg-[#11151B] border border-white/10 flex items-center gap-3.5 max-w-xl">
            <div className="w-10 h-10 rounded-xl bg-[#1B222B] border border-white/10 flex items-center justify-center text-[#F2D58A] shrink-0">
              <Award className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                Direct Mentorship
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#F5F2EA]">
                {founder.name} <span className="text-[#F2D58A] font-normal">({founder.education})</span> — <span className="text-[#F2D58A] font-normal">FIDE Arbiter (FA), Arena International Master (AIM)</span>
              </span>
            </div>
          </div>

          {/* Key Value Micro-Pillars */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-[#A8AFB8] pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Certified Coaching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Structured 4-Stage Roadmap</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Individual 1-on-1 Training</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            {ACADEMY_DATA.formUrl && (
              <a
                href={ACADEMY_DATA.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-primary px-7 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wider uppercase flex items-center justify-center gap-3 shadow-lg"
                aria-label="Register via Google Form"
              >
                <FileText className="w-5 h-5" />
                <span>REGISTER NOW</span>
              </a>
            )}

            {/* Secondary Explore Classes */}
            <a
              href="#classes"
              onClick={scrollToClasses}
              className="px-5 py-4 rounded-xl text-sm sm:text-base font-medium text-[#A8AFB8] hover:text-[#F2D58A] flex items-center justify-center gap-2 transition-colors"
            >
              <Compass className="w-4 h-4 text-[#F2D58A]" />
              <span>Explore Classes</span>
            </a>
          </div>

        </div>

        {/* Right Column: Clean Cinematic Chess Visual (Unobstructed) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Subtle Ambient Backlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent rounded-3xl blur-3xl pointer-events-none"></div>

          {/* Visual Container Card */}
          <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl p-2.5 bg-gradient-to-b from-[#1B222B] to-[#11151B] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden group">
            
            {/* Main Cinematic Image without obstructive overlay */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#07090C]">
              <img
                src="/images/hero-chess.jpg"
                alt="Cinematic luxury chess king and knight on obsidian tournament board"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090C]/50 via-transparent to-transparent"></div>
            </div>

          </div>

        </div>

      </div>

      {/* 5. HERO HORIZONTAL INFORMATION STRIP */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-14 pt-6 border-t border-white/[0.08]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          
          {/* Item 1: ONLINE + OFFLINE */}
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-xl bg-[#11151B] border border-white/10 flex items-center justify-center shrink-0">
              <Monitor className="w-5 h-5 text-[#F2D58A]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFB8] block">Class Modes</span>
              <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] tracking-wide">ONLINE + OFFLINE</span>
            </div>
          </div>

          {/* Item 2: DAILY + WEEKEND */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-xl bg-[#11151B] border border-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#F2D58A]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFB8] block">Schedule</span>
              <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] tracking-wide">DAILY + WEEKEND</span>
            </div>
          </div>

          {/* Item 3: ALL AGES */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-xl bg-[#11151B] border border-white/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#F2D58A]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFB8] block">Eligibility</span>
              <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] tracking-wide">ALL AGES &amp; LEVELS</span>
            </div>
          </div>

          {/* Item 4: INDIVIDUAL TRAINING */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-xl bg-[#11151B] border border-white/10 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-[#F2D58A]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8AFB8] block">Special Offering</span>
              <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] tracking-wide">INDIVIDUAL TRAINING</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
