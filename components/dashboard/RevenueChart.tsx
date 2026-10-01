"use client";

import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface RevenueChartProps {
  data: { date: string; amount: number }[];
  className?: string;
}

export const RevenueChart = ({ data, className }: RevenueChartProps) => {
  return (
    <div className={cn("h-[300px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-app-line" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--mute)', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--mute)', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: 'var(--panel)', borderColor: 'var(--line)', borderRadius: '8px', color: 'var(--ink)' }}
            itemStyle={{ color: 'var(--ink)' }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="var(--acc)"
            fillOpacity={1}
            fill="url(#colorAmount)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
