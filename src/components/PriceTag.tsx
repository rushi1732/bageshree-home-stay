import React from 'react';

interface PriceTagProps {
  amount: number | string;
  period?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  badge?: string;
  dark?: boolean;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  amount,
  period = '/ night',
  size = 'md',
  className = '',
  badge,
  dark = false,
}) => {
  const numericAmount = typeof amount === 'number' ? amount : parseFloat(amount.toString().replace(/[^0-9.]/g, ''));
  const formattedNumber = isNaN(numericAmount) 
    ? amount 
    : numericAmount.toLocaleString('en-IN');

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const symbolSizeClasses = {
    sm: 'text-sm font-semibold',
    md: 'text-lg font-bold',
    lg: 'text-xl font-bold',
    xl: 'text-2xl font-bold',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-baseline gap-1">
        {/* Crisp Sans-Serif Indian Rupee symbol */}
        <span 
          className={`font-sans ${symbolSizeClasses[size]} ${
            dark ? 'text-[#e5c178]' : 'text-[#143224]'
          } select-none leading-none`}
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          ₹
        </span>

        {/* Crisp Tabular Modern Figures */}
        <span 
          className={`font-sans font-extrabold tracking-tight tabular-nums ${sizeClasses[size]} ${
            dark ? 'text-white' : 'text-[#143224]'
          } leading-none`}
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          {formattedNumber}
        </span>

        {period && (
          <span className={`text-xs font-medium ml-1 ${dark ? 'text-[#a3bdad]' : 'text-[#526359]'}`}>
            {period}
          </span>
        )}
      </div>

      {badge && (
        <span className="text-[10px] font-semibold text-[#1b4332] bg-[#1b4332]/10 px-2 py-0.5 rounded-full mt-1 w-max">
          {badge}
        </span>
      )}
    </div>
  );
};
