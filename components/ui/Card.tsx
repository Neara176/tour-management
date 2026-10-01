import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Card = ({ title, subtitle, className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'border border-app-line bg-app-panel rounded-[10px] shadow-sm overflow-hidden',
        className
      )}
      style={{ backgroundColor: 'var(--panel)', borderColor: 'var(--line)' }}
      {...props}
    >
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-app-line" style={{ borderColor: 'var(--line)' }}>
          {title && <h3 className="text-lg font-bold text-app-ink" style={{ color: 'var(--ink)' }}>{title}</h3>}
          {subtitle && <p className="text-sm text-app-mute" style={{ color: 'var(--mute)' }}>{subtitle}</p>}
        </div>
      )}
      <div className="p-[18px]">
        {children}
      </div>
    </div>
  );
};
