# Migration Plan: Mekong Tours Manager (HTML SPA -> Next.js)

## 1. Analysis of Existing Application

### Current Architecture
- **Type**: Single-file HTML/JS SPA.
- **State Management**: A global object `S` persisted in `localStorage`.
- **Routing**: A custom `V` object and `draw()` function that renders strings of HTML to `#main` based on `V.r` (route).
- **Styling**: CSS Variables with a theme switcher (light/dark) and a custom grid/flex layout.
- **Key Logic**:
    - **Financials**: Complex calculations for OTA payouts (7th of next month rule), net profit, and tour-specific profitability.
    - **Visualizations**: A custom SVG-based stacked bar chart for monthly sales.
    - **Integrations**: Google Calendar link generation and Browser Notification API for tour reminders.
    - **Data Model**: Relational-like structure with `bookings`, `customers`, `tours`, `expenses`, and `vp` (vendor payments).

## 2. Proposed Next.js Architecture

### State & Data Management
- **Phase 1 (Local)**: Use `localStorage` with a React Context provider or a state management library (like Zustand) to mirror the existing `S` object. This allows for a seamless transition.
- **Phase 2 (Production)**: Migrate to a database (e.g., PostgreSQL via Prisma or MongoDB).
    - **Tables/Collections**: `Settings`, `TourCategory`, `BookingSource`, `Tour`, `Customer`, `Booking`, `VendorPayment`, `Expense`.
    - **API**: Next.js Server Actions for all CRUD operations.

### Routing & Page Structure
The current `V_` route handlers will be split into a file-based routing system:

| Existing Route (`V.r`) | Next.js Path | Components/Pages |
| :--- | :--- | :--- |
| `dash` | `/` | `page.tsx` (Overview, Stats, Chart) |
| `cal` | `/calendar` | `page.tsx` (Calendar View) |
| `book` | `/bookings` | `page.tsx` (Booking List) |
| `bd` | `/bookings/[id]` | `page.tsx` (Booking Details) |
| `cust` | `/customers` | `page.tsx` (Customer List) |
| `cd` | `/customers/[id]` | `page.tsx` (Customer Details) |
| `tour` | `/tours` | `page.tsx` (Tours Management) |
| `fin` | `/finance` | `page.tsx` (Revenue, Expenses, Profit) |
| `pay` | `/payments` | `page.tsx` (Money In/Out) |
| `rep` | `/reports` | `page.tsx` (Filtered Reports) |
| `set` | `/settings` | `page.tsx` (Business Profile, Config) |

### Component Migration Strategy

#### Custom SVG Chart
- **Approach**: Convert the `chart()` function into a standalone React component `<MonthlySalesChart />`.
- **Implementation**: 
    - Use a `useEffect` or `useMemo` to calculate the bar heights and positions based on the booking data.
    - Keep the SVG approach for precision and lightweight rendering, or migrate to `Recharts` for better interactivity.

#### Notifications & Calendar
- **Calendar**: The `gcal()` function remains a utility that generates a URL.
- **Notifications**: 
    - Move `checkNotif()` to a `useEffect` in the root `layout.tsx` or a dedicated `NotificationProvider`.
    - Use a Web Worker or a client-side interval to check for upcoming tours.

#### Theme Switching
- **Approach**: Use `next-themes` for Tailwind CSS integration.
- **Styling**: Convert the custom CSS variables into a `tailwind.config.js` palette to maintain the exact look and feel.

## 3. Proposed Folder Structure

```text
/
├── app/
│   ├── layout.tsx             # Root layout, ThemeProvider, NotificationProvider
│   ├── page.tsx               # Dashboard (V_.dash)
│   ├── calendar/
│   │   └── page.tsx           # Calendar (V_.cal)
│   ├── bookings/
│   │   ├── page.tsx           # Bookings List (V_.book)
│   │   └── [id]/
│   │       └── page.tsx       # Booking Detail (V_.bd)
│   ├── customers/
│   │   ├── page.tsx           # Customer List (V_.cust)
│   │   └── [id]/
│   │       └── page.tsx       # Customer Detail (V_.cd)
│   ├── tours/
│   │   └── page.tsx           # Tours Management (V_.tour)
│   ├── finance/
│   │   └── page.tsx           # Finance Overview (V_.fin)
│   ├── payments/
│   │   └── page.tsx           # Payments (V_.pay)
│   ├── reports/
│   │   └── page.tsx           # Reports (V_.rep)
│   └── settings/
│       └── page.tsx           # Settings (V_.set)
├── components/
│   ├── ui/                    # Common UI (Button, Input, Card, Dialog)
│   ├── dashboard/
│   │   └── MonthlySalesChart.tsx
│   ├── calendar/
│   │   └── CalendarGrid.tsx
│   └── shared/
│       ├── DataTable.tsx      # Generic table for bookings/customers
│       └── ThemeToggle.tsx
├── hooks/
│   ├── useLocalStorage.ts     # Sync state with localStorage
│   └── useNotifications.ts    # Browser notification logic
├── lib/
│   ├── utils.ts               # Formatting ($$, date helpers)
│   └── constants.ts           # OTA rules, seed data
└── types/
    └── index.ts              # TypeScript interfaces for S object
```

## 4. Implementation Steps

1. **Setup**: Initialize Next.js with TypeScript, Tailwind CSS, and `next-themes`.
2. **Type Definitions**: Create TS interfaces for the `S` object.
3. **State Layer**: Implement `useLocalStorage` and a Context Provider to make the data available across pages.
4. **UI Library**: Create basic components (`Button`, `Input`, `Card`) that match the original CSS.
5. **Page Migration**: Migrate `V_` functions to Next.js pages one by one, starting with Settings and Customers (simplest).
6. **Complex Components**: Migrate the SVG Chart and Calendar Grid.
7. **Business Logic**: Implement the financial calculation utilities in `lib/utils.ts`.
8. **Final Polish**: Implement Notifications and Google Calendar integration.
