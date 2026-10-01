"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  CalendarDays,
  Map,
  Users,
  Receipt,
  Settings,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Calendar', href: '/calendar', icon: CalendarDays },
  { label: 'Bookings', href: '/bookings', icon: CalendarDays },
  { label: 'Customers', href: '/customers', icon: Users },
  { label: 'Tours', href: '/tours', icon: Map },
  { label: 'Finance', href: '/finance', icon: Receipt },
  { label: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-app-panel border border-app-line rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside
        className={cn(
          "fixed left-0 top-0 h-full z-40 w-[220px] text-app-mute transition-transform duration-300 ease-in-out lg:translate-x-0 bg-app-side",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ backgroundColor: 'var(--side)' }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex flex-col border-b border-app-line" style={{ borderColor: 'var(--line)' }}>
            <span className="font-extrabold text-[18px] text-white tracking-tight">
              Mekong <span className="text-app-gold" style={{ color: 'var(--gold)' }}>Tours</span>
            </span>
            <span className="text-[12px] font-normal text-app-mute">Tour Operator</span>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 text-sm",
                    isActive
                      ? "bg-white/10 text-white font-semibold"
                      : "hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-app-line">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
              <div className="w-8 h-8 rounded-full bg-app-panel/20 flex items-center justify-center text-xs font-bold text-white">
                OP
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate">Operator</p>
                <p className="text-[10px] text-app-mute truncate">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
