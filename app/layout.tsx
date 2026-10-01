import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Sidebar } from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-app-bg text-app-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-[22px] max-w-[1100px] w-full mx-auto lg:ml-[220px]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
