
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

export interface DriverApplication {
  id?: string;
  // Personal Details
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  
  // Documents
  aadhar_number: string;
  pan_number: string;
  driving_license_number: string;
  driving_license_expiry: string;
  
  // Vehicle Details
  vehicle_type: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: string;
  vehicle_number: string;
  vehicle_color?: string;
  seating_capacity?: string;
  
  // Additional Info
  experience?: string;
  availability?: string;
  about_you?: string;
  
  // Status and timestamps
  status: 'pending' | 'approved' | 'rejected';
  created_at?: string;
  updated_at?: string;
}
