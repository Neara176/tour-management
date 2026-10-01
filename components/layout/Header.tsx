"use client";

import React from 'react';
import { useStore } from '@/lib/state';
import { Sun, Moon, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export const Header = ({ title }: { title: string }) => {
  const { theme, setTheme } = useTheme();
  const { settings } = useStore();

  return (
    <header
      className="h-16 border-b border-app-line bg-app-panel flex items-center justify-between px-8 sticky top-0 z-30"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-extrabold text-app-ink">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-app-mute" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-1.5 text-sm border border-app-line bg-app-bg focus:ring-2 focus:ring-app-acc rounded-full w-64 transition-all"
          />
        </div>

        <Button variant="ghost" className="relative p-2">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-app-panel"></span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
    </header>
  );
};
