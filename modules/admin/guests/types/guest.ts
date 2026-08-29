export type GuestStatus = 'ACTIVE' | 'INACTIVE' | 'BLOCKED';

export type GuestGender = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';

export interface Guest {
  id: string;

  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: GuestGender;
  dateOfBirth?: string;

  // Address
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;

  // Identification
  nationality?: string;
  idType?: string;
  idNumber?: string;

  // Guest Management
  status: GuestStatus;

  // Booking Statistics
  totalBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  totalSpent: number;

  // Preferences
  notes?: string;

  // Account
  hasAccount: boolean;
  emailVerified: boolean;
  phoneVerified: boolean;

  // Metadata
  createdAt: string;
  updatedAt: string;
  lastBookingAt?: string;
}
