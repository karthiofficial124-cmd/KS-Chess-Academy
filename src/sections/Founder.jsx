import React from 'react';
import { Award, ShieldCheck, Crown, Trophy, Star, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMY_DATA } from '../data/academyData';
import { useEnquiry } from '../context/EnquiryContext';

export const Founder = () => {
  const { founder } = ACADEMY_DATA;
  const { openEnquiry } = useEnquiry();

  return (
    <section id="founder" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D121A] relative overflow-hidden border-t border-white/[0.08]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#162332]/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeading
          badge="Leadership & Mentorship"
          title="MEET THE FOUNDER"
          subtitle="Guided by international tournament experience, certified FIDE arbitration, and personal dedication to every student."
        />

        {/* Large Editorial Split Section */}
        <div className="mt-14 bg-[#131923] rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Founder Academy Photography (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 bg-[#07090C] shadow-2xl group">
                <img
                  src="/images/chess-study.jpg"
                  alt="M. Karthiganes coaching and analyzing chess positions"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090C]/60 via-transparent to-transparent"></div>
              </div>

            </div>

            {/* Right Column: Editorial Profile & Highlight Typography (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="space-y-1.5">
                <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase block">
                  {founder.designation}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black text-white tracking-wide">
                  {founder.name}
                </h3>
                <p className="text-sm font-semibold text-[#8BB8EE] tracking-wider">
                  FIDE Arbiter (FA) • Arena International Master (AIM)
                </p>
              </div>

              {/* Bio Statement */}
              <p className="text-sm sm:text-base text-[#A8AFB8] font-light leading-relaxed">
                {founder.bio}
              </p>

              {/* Founder Verified Credentials Bar */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="p-3.5 rounded-2xl bg-[#0A0E15] border border-white/10 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#8BB8EE] shrink-0" />
                  <span className="text-xs font-semibold text-[#F5F2EA]">FIDE Arbiter</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0A0E15] border border-white/10 flex items-center gap-2.5">
                  <Trophy className="w-4 h-4 text-[#F2D58A] shrink-0" />
                  <span className="text-xs font-semibold text-[#F5F2EA]">Arena Int'l Master</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0A0E15] border border-white/10 flex items-center gap-2.5">
                  <Star className="w-4 h-4 text-[#70A5E0] shrink-0" />
                  <span className="text-xs font-semibold text-[#F5F2EA]">Int'l FIDE Rated</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0A0E15] border border-white/10 flex items-center gap-2.5">
                  <Crown className="w-4 h-4 text-[#8CD1B8] shrink-0" />
                  <span className="text-xs font-semibold text-[#F5F2EA]">Noble Book Record</span>
                </div>
              </div>

              {/* Highlight for Individual / Personal Training */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1A2536] to-[#0A0E15] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#F2D58A] uppercase tracking-wider mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Special 1-on-1 Offering</span>
                  </div>
                  <h4 className="text-lg font-cinzel font-bold text-white uppercase">
                    INDIVIDUAL / PERSONAL TRAINING
                  </h4>
                  <p className="text-xs text-[#A8AFB8] mt-0.5 font-light">
                    Private master mentorship for rapid rating gains and tactical excellence.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openEnquiry({
                    title: 'Individual / Personal Training',
                    badge: 'Special 1-on-1 Offering',
                    message: ACADEMY_DATA.whatsappMessages.individual,
                    emailSubject: 'Enquiry - Individual / Personal Training'
                  })}
                  className="btn-gold-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap text-black"
                >
                  <span className="inline-flex items-center gap-2"><HelpCircle className="w-4 h-4" />ENQUIRE NOW</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
