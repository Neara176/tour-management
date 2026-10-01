"use client";

import { useStore } from '@/lib/state';
import { formatUSD } from '@/lib/utils';
import {
  Users,
  DollarSign,
  CalendarCheck,
  TrendingUp,
  Wallet
} from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { StatTile } from '@/components/dashboard/StatTile';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { BookingTable } from '@/components/dashboard/BookingTable';

export default function Dashboard() {
  const { settings, bookings } = useStore();

  const chartData = [
    { date: 'Jan', amount: 4000 },
    { date: 'Feb', amount: 3000 },
    { date: 'Mar', amount: 5000 },
    { date: 'Apr', amount: 4500 },
    { date: 'May', amount: 6000 },
    { date: 'Jun', amount: 5500 },
  ];

  const totalRevenue = bookings.reduce((sum, b) => sum + (b.paid ? b.total : 0), 0);
  const totalExpenses = 1200; // This would come from store in full implementation
  const activeBookings = bookings.filter(b => b.status === 'upcoming').length;

  return (
    <div className="space-y-6">
      <h1 className="text-[26px] font-extrabold text-app-ink leading-tight">Overview</h1>
      <p className="text-app-mute text-sm mb-6">{settings.name}. All figures in USD. Revenue counts money received.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <StatTile
          label="Net Profit"
          value={formatUSD(totalRevenue - totalExpenses)}
          icon={Wallet}
          isHero
        />
        <StatTile
          label="Revenue Received"
          value={formatUSD(totalRevenue)}
          icon={DollarSign}
        />
        <StatTile
          label="Total Bookings"
          value={bookings.length}
          icon={CalendarCheck}
        />
        <StatTile
          label="Upcoming Tours"
          value={activeBookings}
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          title="Tours Sold Per Month"
          subtitle="Revenue trends over the last 6 months"
          className="lg:col-span-2"
        >
          <RevenueChart data={chartData} />
        </Card>

        <Card title="Business Profile">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-app-bg dark:bg-app-panel/50 rounded-lg border border-app-line">
              <span className="text-xs font-semibold text-app-mute uppercase">Company</span>
              <span className="text-sm font-bold text-app-ink">{settings.name}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-app-bg dark:bg-app-panel/50 rounded-lg border border-app-line">
              <span className="text-xs font-semibold text-app-mute uppercase">Phone</span>
              <span className="text-sm font-bold text-app-ink">{settings.phone}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-app-bg dark:bg-app-panel/50 rounded-lg border border-app-line">
              <span className="text-xs font-semibold text-app-mute uppercase">Exchange Rate</span>
              <span className="text-sm font-bold text-app-ink">{settings.rate} KHR</span>
            </div>
            <div className="pt-2">
              <Button variant="ghost" className="w-full justify-center text-app-acc hover:text-app-acc font-bold">
                Edit Profile →
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <h2 className="text-[21px] font-bold text-app-ink mt-6">Next Tours</h2>
      <Card title="" subtitle="Upcoming reservations and payment status">
        <BookingTable />
      </Card>
    </div>
  );
}
