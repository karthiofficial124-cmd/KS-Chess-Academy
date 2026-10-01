import React from 'react';

/**
 * KS Chess Academy Official Brand Logo Component
 * Incorporates:
 * - KS Gold Monogram & Typographic Brand
 * - Chess King Crown / Finial
 * - Chess Knight Silhouette
 * - Luxury Warm Gold Gradient Accents
 */
export const Logo = ({ 
  className = "h-12 w-auto", 
  variant = "full", // "full" | "icon" | "stacked"
  showTagline = false 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Official Gold Shield Emblem with King + Knight + KS */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="25%" stopColor="#F2D58A" />
              <stop offset="65%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8C6A35" />
            </linearGradient>
            <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2D58A" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#1B222B" />
            </linearGradient>
            <radialGradient id="emblemGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1B222B" />
              <stop offset="100%" stopColor="#07090C" />
            </radialGradient>
          </defs>

          {/* Luxury Shield Outer Crest */}
          <path 
            d="M50 4 L88 18 C88 56 68 84 50 96 C32 84 12 56 12 18 Z" 
            fill="url(#emblemGlow)" 
            stroke="url(#goldBorderGrad)" 
            strokeWidth="2.2" 
          />
          {/* Inner Inset Border */}
          <path 
            d="M50 10 L82 22 C82 52 64 78 50 88 C36 78 18 52 18 22 Z" 
            fill="none" 
            stroke="url(#goldGradientMain)" 
            strokeWidth="0.8" 
            strokeDasharray="2 2"
            opacity="0.5"
          />

          {/* King Crown Cross Top */}
          <path d="M50 14 V21 M46.5 17.5 H53.5" stroke="url(#goldGradientMain)" strokeWidth="1.8" strokeLinecap="round" />

          {/* Chess King Crown Coronet */}
          <path 
            d="M38 27 L42 22 L50 25 L58 22 L62 27 L60 30 H40 Z" 
            fill="url(#goldGradientMain)" 
          />

          {/* Knight Silhouette Profile */}
          <path 
            d="M44 32 C42 30 38 34 37 38 C36 41 38 42 41 42 C41 44 37 47 34 50 C31 53 30 57 32 60 H68 C70 56 68 47 62 43 C58 40 58 35 56 32 C54 30 50 32 44 32 Z" 
            fill="url(#goldGradientMain)" 
            opacity="0.95"
          />

          {/* Knight Eye & Mane Accents */}
          <circle cx="43" cy="36" r="1.2" fill="#07090C" />
          <path d="M53 35 C55 38 56 42 55 45" stroke="#07090C" strokeWidth="1.2" strokeLinecap="round" />

          {/* Gold Pedestal / Plinth */}
          <rect x="28" y="62" width="44" height="4" rx="1" fill="url(#goldGradientMain)" />
          <rect x="24" y="68" width="52" height="4.5" rx="1" fill="url(#goldGradientMain)" />

          {/* KS Bold Monogram Centered on Plinth */}
          <text 
            x="50" 
            y="81" 
            fontFamily="'Cinzel', serif" 
            fontWeight="900" 
            fontSize="12" 
            fill="url(#goldGradientMain)" 
            textAnchor="middle" 
            letterSpacing="2"
          >
            KS
          </text>
        </svg>
      </div>

      {/* Typography KS CHESS ACADEMY */}
      {variant !== "icon" && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-cinzel font-black tracking-wider text-xl sm:text-2xl gold-gradient-text-pure uppercase leading-none">
              KS
            </span>
            <span className="font-cinzel font-bold tracking-widest text-sm sm:text-base text-[#F5F2EA] uppercase leading-none">
              CHESS ACADEMY
            </span>
          </div>
          {(showTagline || variant === "stacked") && (
            <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-[#A8AFB8] mt-1">
              Build Your Mind. Master the Game.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
