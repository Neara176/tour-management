import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  headers: { key: string; label: string }[];
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ headers, children, className, ...props }: TableProps) => {
  return (
    <div className="relative w-full overflow-auto">
      <table className={cn('w-full text-sm text-left', className)} {...props}>
        <thead className="text-xs text-app-mute uppercase bg-app-bg/50 dark:bg-app-panel/50 dark:text-app-mute">
          <tr>
            {headers.map((h) => (
              <th key={h.key} className="px-6 py-3 font-medium tracking-wider">
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-app-line">
          {children}
        </tbody>
      </table>
    </div>
  );
};
