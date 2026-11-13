import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = "md", light = false, linkTo = "/" }) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  const content = (
    <div className="flex items-center gap-3 group">
      {/* Artisanal Crest Icon */}
      <div className={`relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
        isLarge ? 'w-14 h-14' : isSmall ? 'w-9 h-9' : 'w-11 h-11'
      }`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-sm">
          {/* Outer Ornamental Ring */}
          <circle cx="50" cy="50" r="47" stroke={light ? "#E6CB66" : "#B8583E"} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
          <circle cx="50" cy="50" r="42" fill={light ? "rgba(255,255,255,0.08)" : "#FAF2EE"} stroke={light ? "#E6CB66" : "#D8B534"} strokeWidth="1" />
          
          {/* Artisan Paisley / Lotus Petal Leaf */}
          <path
            d="M50 18 C38 32, 24 38, 24 52 C24 67, 42 78, 50 84 C58 78, 76 67, 76 52 C76 38, 62 32, 50 18 Z"
            fill={light ? "rgba(216,181,52,0.2)" : "#FBECEB"}
            stroke={light ? "#D8B534" : "#B8583E"}
            strokeWidth="1.2"
          />
          <path
            d="M50 26 C43 36, 32 42, 32 54 C32 63, 44 72, 50 76 C56 72, 68 63, 68 54 C68 42, 57 36, 50 26 Z"
            fill={light ? "#B8583E" : "#B8583E"}
            opacity="0.9"
          />
          
          {/* Center Bead and Brush motif */}
          <circle cx="50" cy="48" r="7" fill={light ? "#FAF7EE" : "#F8F0D6"} stroke="#C59F1C" strokeWidth="1.5" />
          
          {/* Fine Needle / Feather Strokes */}
          <path d="M50 12 L50 18 M50 84 L50 90 M12 50 L18 50 M82 50 L88 50" stroke={light ? "#E6CB66" : "#C59F1C"} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="50" cy="48" r="2" fill="#B8583E" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-display tracking-[0.22em] font-semibold uppercase leading-tight ${
            isLarge ? 'text-3xl' : isSmall ? 'text-lg' : 'text-2xl'
          } ${light ? 'text-cream-50' : 'text-warmcharcoal-900'}`}>
            PIHU
          </span>
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${
            light ? 'bg-gold-400' : 'bg-terracotta-500'
          }`} />
        </div>
        <span className={`tracking-[0.18em] uppercase font-medium font-sans ${
          isLarge ? 'text-[11px]' : isSmall ? 'text-[8px]' : 'text-[9.5px]'
        } ${light ? 'text-cream-200/80' : 'text-terracotta-600'}`}>
          CUSTOMIZE FABRIC & HANDMADE JEWELLERY
        </span>
      </div>
    </div>
  );

  if (!linkTo) return content;
  return (
    <Link to={linkTo} className="inline-block focus:outline-none">
      {content}
    </Link>
  );
}
