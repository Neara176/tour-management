import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-app-acc text-app-accfg hover:opacity-90 shadow-sm font-semibold',
    secondary: 'bg-transparent text-app-ink border border-app-line hover:bg-app-bg dark:bg-transparent dark:text-app-ink dark:border-app-line dark:hover:bg-app-panel',
    ghost: 'bg-transparent hover:bg-app-bg text-app-mute dark:text-app-mute dark:hover:bg-app-panel',
    danger: 'bg-app-bad text-white hover:opacity-90 font-semibold',
  };

  const sizes = {
    sm: 'px-[9px] py-[4px] text-[13px]',
    md: 'px-[14px] py-[9px] text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
