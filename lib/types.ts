export interface Tour {
  id: number;
  name: string;
  cat: string;
  dur: string;
  price: number;
  max: number;
  active: boolean;
  desc: string;
}

export interface Customer {
  id: number;
  name: string;
  contact: string;
  nat: string;
  notes: string;
}

export interface Booking {
  id: number;
  cid: number;
  tid: number;
  date: string;
  time: string;
  pax: number;
  total: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  src: string;
  paid: boolean;
  paidDate: string;
  method: string;
  hotel: string;
  guide: string;
  notes: string;
}

export interface VendorPayment {
  id: number;
  type: string;
  payee: string;
  bid: number;
  amt: number;
  due: string;
  paid: boolean;
  paidDate: string;
}

export interface Expense {
  id: number;
  cat: string;
  amt: number;
  date: string;
  desc: string;
}

export interface Settings {
  name: string;
  phone: string;
  rate: number;
  user: string;
}

export interface AppState {
  settings: Settings;
  tourCats: { n: string; c: string }[];
  sources: { n: string; ota: boolean }[];
  vTypes: string[];
  cats: string[];
  tours: Tour[];
  customers: Customer[];
  bookings: Booking[];
  vp: VendorPayment[];
  expenses: Expense[];
}
