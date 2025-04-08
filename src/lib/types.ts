
export enum UserRole {
  RIDER = "rider",
  DRIVER = "driver",
  STAFF = "staff"
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Ride {
  id: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  driver?: User;
  rider?: User;
  status: "pending" | "accepted" | "completed" | "cancelled";
}

export interface PaymentMethod {
  id: string;
  type: "credit_card" | "paypal" | "apple_pay" | "google_pay";
  last4?: string;
  expiry?: string;
  isDefault: boolean;
}
