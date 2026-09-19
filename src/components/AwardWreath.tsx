import React from 'react';

interface AwardWreathProps {
  multiplier: string;
  year: string;
}

export const AwardWreath: React.FC<AwardWreathProps> = ({ multiplier, year }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-white text-xl md:text-2xl font-semibold tracking-tight">
        {multiplier}
      </span>
      
      {/* Laurel Wreath with Shield/Star Icon */}
      <div className="my-1 text-white/90">
        <svg
          width="48"
          height="28"
          viewBox="0 0 64 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-95"
        >
          {/* Left Laurel Branch */}
          <path
            d="M26 32C18 30 11 25 9 17C8 12 9 7 12 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M12 4C10 7 10 11 12 13" fill="currentColor" opacity="0.85" />
          <path d="M9 10C7 13 8 17 11 19" fill="currentColor" opacity="0.85" />
          <path d="M10 18C9 22 12 25 15 27" fill="currentColor" opacity="0.85" />
          <path d="M14 26C15 29 19 31 23 32" fill="currentColor" opacity="0.85" />
          
          {/* Right Laurel Branch */}
          <path
            d="M38 32C46 30 53 25 55 17C56 12 55 7 52 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M52 4C54 7 54 11 52 13" fill="currentColor" opacity="0.85" />
          <path d="M55 10C57 13 56 17 53 19" fill="currentColor" opacity="0.85" />
          <path d="M54 18C55 22 52 25 49 27" fill="currentColor" opacity="0.85" />
          <path d="M50 26C49 29 45 31 41 32" fill="currentColor" opacity="0.85" />

          {/* Center Leader Badge */}
          <rect x="27" y="10" width="10" height="12" rx="2" fill="#CFFD42" fillOpacity="0.3" stroke="#CFFD42" strokeWidth="1" />
          <path d="M32 13L33 15.5H35.5L33.5 17L34.2 19.5L32 18L29.8 19.5L30.5 17L28.5 15.5H31L32 13Z" fill="#CFFD42" />
        </svg>
      </div>

      <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-white/80 max-w-[90px] leading-tight font-medium">
        Prêmio Inovação Solar {year}
      </span>
    </div>
  );
};
