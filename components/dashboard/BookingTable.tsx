"use client";

import React from 'react';
import { useStore } from '@/lib/state';
import { formatUSD } from '@/lib/utils';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export const BookingTable = () => {
  const { bookings, customers, tours } = useStore();

  const getCustomerName = (cid: number) => customers.find(c => c.id === cid)?.name || 'Unknown';
  const getTourName = (tid: number) => tours.find(t => t.id === tid)?.name || 'Unknown';

  return (
    <Table
      headers={[
        { key: 'customer', label: 'Customer' },
        { key: 'tour', label: 'Tour' },
        { key: 'date', label: 'Date' },
        { key: 'status', label: 'Status' },
        { key: 'amount', label: 'Amount' },
      ]}
    >
      {bookings.length === 0 ? (
        <tr>
          <td colSpan={5} className="px-6 py-10 text-center text-app-mute italic">
            No bookings found.
          </td>
        </tr>
      ) : (
        bookings.map((b) => (
          <tr key={b.id} className="hover:bg-app-bg/50 dark:hover:bg-app-panel/50 transition-colors">
            <td className="px-6 py-4 font-medium text-app-ink">
              {getCustomerName(b.cid)}
            </td>
            <td className="px-6 py-4 text-app-mute">
              {getTourName(b.tid)}
            </td>
            <td className="px-6 py-4 text-app-mute">
              {b.date}
            </td>
            <td className="px-6 py-4">
              <Badge variant={b.paid ? 'success' : 'warning'}>
                {b.paid ? 'Paid' : 'Pending'}
              </Badge>
            </td>
            <td className="px-6 py-4 font-medium text-app-ink">
              {formatUSD(b.total)}
            </td>
          </tr>
        ))
      )}
    </Table>
  );
};
