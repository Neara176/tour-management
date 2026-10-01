import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatTileProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  isHero?: boolean;
  className?: string;
}

export const StatTile = ({ label, value, icon: Icon, isHero = false, className }: StatTileProps) => {
  return (
    <div className={cn(
      "p-4 rounded-xl border transition-all",
      isHero
        ? "bg-app-side text-white border-0 shadow-lg"
        : "bg-app-panel border-app-line",
      className
    )}>
      <div className="flex flex-col">
        <span className={cn(
          "text-xs font-semibold uppercase tracking-wider",
          isHero ? "text-app-mute" : "text-app-mute"
        )}>
          {label}
        </span>
        <div className={cn(
          "text-2xl font-extrabold mt-1",
          isHero ? "text-app-gold" : "text-app-ink"
        )}>
          {value}
        </div>
      </div>
      <div className={cn(
        "mt-4 p-2 rounded-lg w-fit",
        isHero ? "bg-white/10 text-white" : "bg-app-bg text-app-acc"
      )}>
        <Icon size={20} />
      </div>
    </div>
  );
};
