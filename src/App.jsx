import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Credentials } from './sections/Credentials';
import { WhyChess } from './sections/WhyChess';
import { WhoCanJoin } from './sections/WhoCanJoin';
import { Classes } from './sections/Classes';
import { LearningProgram } from './sections/LearningProgram';
import { Founder } from './sections/Founder';
import { Benefits } from './sections/Benefits';
import { Locations } from './sections/Locations';
import { RegistrationCTA } from './sections/RegistrationCTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { EnquiryProvider } from './context/EnquiryContext';

export function App() {
  return (
    <EnquiryProvider>
      <div className="min-h-screen bg-[#07090C] text-[#F5F2EA] flex flex-col selection:bg-[#D4AF37] selection:text-[#07090C]">
        {/* Top Sticky Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-grow">
          {/* 1. Hero & Horizontal Info Strip */}
          <Hero />

          {/* 2. Trust / Credentials: Learn from Experience */}
          <Credentials />

          {/* 3. Why Chess? More Than a Game */}
          <WhyChess />

          {/* 4. Who Can Join? */}
          <WhoCanJoin />

          {/* 5. Classes (Online, Offline & Individual Personal Training) */}
          <Classes />

          {/* 6. Learning Program (Your Chess Journey: Pawn -> Knight -> Rook -> Queen/King) */}
          <LearningProgram />

          {/* 7. Founder (M. Karthiganes, FA, AIM & 1-on-1 Elite Highlight) */}
          <Founder />

          {/* 8. Benefits (8 Core Cognitive Pillars) */}
          <Benefits />

          {/* 9. Locations (Train With Us: Thoothukudi, Tirunelveli, Puthiyamputhur) */}
          <Locations />

          {/* 10. Registration CTA (High-Contrast Ivory Background) */}
          <RegistrationCTA />

          {/* 11. Contact */}
          <Contact />
        </main>

        {/* 12. Footer */}
        <Footer />

        {/* 13. Floating Mobile Quick Registration Bar */}
        <MobileQuickBar />
      </div>
    </EnquiryProvider>
  );
}

export default App;
