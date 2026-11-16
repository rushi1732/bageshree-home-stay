import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  badge: string;
  breadcrumb: string;
  bgImage?: string;
  onHomeClick: () => void;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  badge,
  breadcrumb,
  bgImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
  onHomeClick,
}) => {
  return (
    <div className="relative py-20 sm:py-24 overflow-hidden bg-[#0d2319] text-white">
      {/* Background with luxury gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07160e]/95 via-[#0b2116]/80 to-[#0e2a1c]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b12] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#a3bdad] mb-4"
        >
          <button 
            onClick={onHomeClick}
            className="hover:text-[#d4af37] transition-colors flex items-center gap-1 font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-[#1b4332]" />
          <span className="text-[#d4af37] font-semibold">{breadcrumb}</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b4332]/90 text-[#e5c178] text-xs font-semibold border border-[#d4af37]/30 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{badge}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-[#c9ded3] max-w-2xl font-light"
        >
          {subtitle}
        </motion.p>

      </div>
    </div>
  );
};
