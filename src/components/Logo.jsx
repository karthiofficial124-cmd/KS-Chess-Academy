import React from 'react';

export const Logo = ({
  className = "h-12 w-auto",
  variant = "full",
  showTagline = false
}) => {
  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      <img
        src="/images/ks-chess-academy-mark.png"
        alt={variant === "icon" ? "KS Chess Academy" : ""}
        className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
        draggable="false"
      />

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
