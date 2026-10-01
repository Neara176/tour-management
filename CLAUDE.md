# Mekong Tours Management - Project Documentation

## Project Overview
A tour management system for Mekong Tours Phnom Penh. The project is currently being migrated from a single-file HTML SPA to a modern Next.js architecture.

## Current Architecture (Next.js)
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + `next-themes`
- **State Management**: Zustand with `localStorage` persistence
- **Deployment**: Auto-deploys to Vercel via GitHub (`main` branch)

## Data Model
The application uses a global state object `S` consisting of:
- **Settings**: Business profile, exchange rates.
- **Tours**: Tour catalog, pricing, and categories.
- **Customers**: Client contact details and nationality.
- **Bookings**: Tour dates, guests, sources (OTA vs Direct), and payment status.
- **Vendor Payments (VP)**: Expenses paid to guides, drivers, and vendors.
- **Expenses**: General business expenses (Marketing, Fuel, etc.).

## Key Business Logic
- **OTA Payout Rule**: Bookings made through OTAs (TripAdvisor, Viator, etc.) are paid on the 7th of the following month.
- **Financials**: Revenue is based on "Money Received" (paid bookings), and profit is calculated per tour by subtracting Vendor Payments from the booking total.

## Project Structure
- `/app`: Next.js pages and layouts.
- `/components`: Reusable UI, charts, and calendar components.
- `/lib`: Global state, TypeScript types, and financial utility functions.

## Development Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start development server at `http://localhost:3000`.
- `npm run build`: Build for production.

## Recent Progress (2026-10-01)
- **UI Overhaul**: Migrated the high-fidelity professional design from the original `index.html` to Next.js.
- **Global Shell**: Implemented a professional Sidebar and Header with the correct brand colors (Teal/Gold).
- **Design System**: Created a reusable UI library in `/components/ui` (Button, Card, Badge, Table) and integrated `lucide-react` icons.
- **Dashboard**: Implemented a data-driven dashboard with KPI tiles and a Revenue Chart using `recharts`.
- **Infrastructure**: Fixed critical CSS issues by adding `tailwind.config.js` and implementing a CSS variable system for brand consistency.
- **Bug Fixes**: Resolved runtime crashes in `BookingTable` by fixing data lookups for customers and tours.
