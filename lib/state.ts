import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState } from './types';

const initialSeed: AppState = {
  settings: {
    name: 'Mekong Tours Phnom Penh',
    phone: '+855 12 345 678',
    rate: 4100,
    user: 'Tour Operator'
  },
  tourCats: [
    { n: 'City tour', c: '#3b82c4' },
    { n: 'Killing Fields', c: '#c2453a' },
    { n: 'Food tour', c: '#e2a72e' },
    { n: 'Cruise', c: '#7a5bb5' }
  ],
  sources: [
    { n: 'Direct', ota: false },
    { n: 'TripAdvisor', ota: true },
    { n: 'Viator', ota: true },
    { n: 'GetYourGuide', ota: true }
  ],
  vTypes: ['Vendor stop 1', 'Vendor stop 2', 'Tuk-tuk', 'Guide', 'Food', 'Other'],
  cats: ['Marketing', 'Fuel', 'Vehicle repair', 'Office', 'Other'],
  tours: [
    { id: 1, name: 'Killing Fields & S-21 half day', cat: 'Killing Fields', dur: '4 h', price: 35, max: 8, active: true, desc: 'Choeung Ek and Tuol Sleng with guide and tuk-tuk.' },
    { id: 2, name: 'Royal Palace & Silver Pagoda', cat: 'City tour', dur: '3 h', price: 30, max: 10, active: true, desc: 'Palace grounds, National Museum, riverside walk.' },
    { id: 3, name: 'Mekong sunset cruise', cat: 'Cruise', dur: '2 h', price: 25, max: 12, active: true, desc: 'Boat trip at golden hour with drinks.' },
    { id: 4, name: 'Tuk-tuk street food night', cat: 'Food tour', dur: '3 h', price: 28, max: 6, active: true, desc: 'Evening food stops across the city.' },
    { id: 5, name: 'Phnom Penh city highlights', cat: 'City tour', dur: '6 h', price: 45, max: 8, active: true, desc: 'Markets, Wat Phnom and Independence Monument.' }
  ],
  customers: [
    { id: 1, name: 'Emma Clarke', contact: 'WhatsApp +44 7700 900123', nat: 'UK', notes: 'Vegetarian' },
    { id: 2, name: 'Liu Wei', contact: 'WeChat liuwei88', nat: 'China', notes: '' },
    { id: 3, name: 'Marc Dubois', contact: 'marc@mail.fr', nat: 'France', notes: '' },
    { id: 4, name: 'Sophea Chan', contact: 'Telegram @sopheac', nat: 'Cambodia', notes: '' }
  ],
  bookings: [],
  vp: [],
  expenses: []
};

interface StateActions {
  setSettings: (s: any) => void;
  addBooking: (b: any) => void;
  updateBooking: (id: number, b: any) => void;
  markPaid: (id: number, date: string, method: string) => void;
  // ... other actions will be added during page migration
}

export const useStore = create<AppState & StateActions>()(
  persist(
    (set) => ({
      ...initialSeed,
      setSettings: (s) => set((state) => ({ settings: { ...state.settings, ...s } })),
      addBooking: (b) => set((state) => ({ bookings: [...state.bookings, { ...b, id: Date.now() }] })),
      updateBooking: (id, b) => set((state) => ({
        bookings: state.bookings.map(x => x.id === id ? { ...x, ...b } : x)
      })),
      markPaid: (id, date, method) => set((state) => ({
        bookings: state.bookings.map(x => x.id === id ? { ...x, paid: true, paidDate: date, method } : x)
      })),
    }),
    {
      name: 'mekong-tours-storage',
    }
  )
);
