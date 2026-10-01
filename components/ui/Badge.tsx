import { cn } from '@/lib/utils';
import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  className?: string;
}

export const Badge = ({ variant = 'neutral', className, children, ...props }: BadgeProps) => {
  const variants = {
    success: 'bg-[#d5f0df] text-[#14602f] dark:bg-emerald-900/30 dark:text-emerald-400 border-[#d5f0df]',
    warning: 'bg-[#fbeccb] text-[#7a5200] dark:bg-amber-900/30 dark:text-amber-400 border-[#fbeccb]',
    error: 'bg-[#f6d9d6] text-[#8a2620] dark:bg-red-900/30 dark:text-red-400 border-[#f6d9d6]',
    info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    neutral: 'bg-app-bg text-app-ink dark:bg-app-panel dark:text-app-mute border-app-line',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
