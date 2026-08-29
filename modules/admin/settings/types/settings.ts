export type SettingsSection =
  | 'HOTEL'
  | 'CONTACT'
  | 'BOOKING'
  | 'PAYMENT'
  | 'NOTIFICATIONS'
  | 'POLICIES'
  | 'APPEARANCE'
  | 'SECURITY';

export interface HotelSettings {
  hotelName: string;
  legalName: string;
  description: string;

  logo: string;

  timezone: string;
  currency: string;
  language: string;

  checkInTime: string;
  checkOutTime: string;
}

export interface ContactSettings {
  email: string;
  phone: string;
  alternatePhone: string;

  address: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;

  website: string;
}

export interface BookingSettings {
  minimumStay: number;
  maximumStay: number;

  minimumAdvanceBooking: number;
  maximumAdvanceBooking: number;

  allowSameDayBooking: boolean;
  allowGuestCancellation: boolean;
  requireGuestPhone: boolean;

  autoConfirmBookings: boolean;

  defaultAdults: number;
  defaultChildren: number;

  bookingReferencePrefix: string;
}

export interface PaymentSettings {
  currency: string;

  requireDeposit: boolean;
  depositType: 'PERCENTAGE' | 'FIXED';
  depositValue: number;

  acceptCash: boolean;
  acceptBankTransfer: boolean;
  acceptCard: boolean;
  acceptOnlinePayment: boolean;

  taxEnabled: boolean;
  taxRate: number;

  serviceChargeEnabled: boolean;
  serviceChargeRate: number;
}

export interface NotificationSettings {
  bookingConfirmation: boolean;
  bookingCancellation: boolean;
  bookingReminder: boolean;

  paymentReceived: boolean;

  newBookingAdmin: boolean;
  cancellationAdmin: boolean;

  emailNotifications: boolean;
  smsNotifications: boolean;
}

export interface PolicySettings {
  cancellationPolicy: string;
  checkInPolicy: string;
  checkOutPolicy: string;
  childPolicy: string;
  petPolicy: string;
  smokingPolicy: string;
  privacyPolicy: string;
}

export interface AppearanceSettings {
  primaryColor: string;

  showHotelLogo: boolean;
  showFooter: boolean;

  maintenanceMode: boolean;
}

export interface SecuritySettings {
  requireEmailVerification: boolean;
  allowGuestRegistration: boolean;

  sessionTimeout: number;

  twoFactorAuthentication: boolean;
}

export interface HotelBookingSettings {
  hotel: HotelSettings;
  contact: ContactSettings;
  booking: BookingSettings;
  payment: PaymentSettings;
  notifications: NotificationSettings;
  policies: PolicySettings;
  appearance: AppearanceSettings;
  security: SecuritySettings;
}
