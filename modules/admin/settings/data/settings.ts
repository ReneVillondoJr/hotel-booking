import type { HotelBookingSettings } from '../types/settings';

export const defaultSettings: HotelBookingSettings = {
  hotel: {
    hotelName: 'Paradise Hotel',
    legalName: 'Paradise Hotel and Resort',

    description: 'Experience comfort, relaxation, and exceptional hospitality.',

    logo: '/logo.png',

    timezone: 'Asia/Manila',
    currency: 'PHP',
    language: 'en',

    checkInTime: '14:00',
    checkOutTime: '12:00',
  },

  contact: {
    email: 'info@paradisehotel.com',
    phone: '+63 912 345 6789',
    alternatePhone: '',

    address: '123 Paradise Road',
    city: 'Cagayan de Oro',
    province: 'Misamis Oriental',
    country: 'Philippines',
    postalCode: '9000',

    website: 'https://paradisehotel.com',
  },

  booking: {
    minimumStay: 1,
    maximumStay: 30,

    minimumAdvanceBooking: 0,
    maximumAdvanceBooking: 365,

    allowSameDayBooking: true,
    allowGuestCancellation: true,
    requireGuestPhone: true,

    autoConfirmBookings: false,

    defaultAdults: 2,
    defaultChildren: 0,

    bookingReferencePrefix: 'HTL',
  },

  payment: {
    currency: 'PHP',

    requireDeposit: true,
    depositType: 'PERCENTAGE',
    depositValue: 20,

    acceptCash: true,
    acceptBankTransfer: true,
    acceptCard: true,
    acceptOnlinePayment: false,

    taxEnabled: true,
    taxRate: 12,

    serviceChargeEnabled: false,
    serviceChargeRate: 0,
  },

  notifications: {
    bookingConfirmation: true,
    bookingCancellation: true,
    bookingReminder: true,

    paymentReceived: true,

    newBookingAdmin: true,
    cancellationAdmin: true,

    emailNotifications: true,
    smsNotifications: false,
  },

  policies: {
    cancellationPolicy:
      'Free cancellation is allowed according to the cancellation terms of the selected room and booking.',

    checkInPolicy:
      'Guests must present a valid identification document upon check-in.',

    checkOutPolicy:
      'Guests must complete check-out before the scheduled check-out time.',

    childPolicy:
      'Children are welcome. Additional charges may apply depending on room capacity.',

    petPolicy: 'Pets are not allowed unless approved by hotel management.',

    smokingPolicy:
      'Smoking is prohibited inside all guest rooms and indoor hotel areas.',

    privacyPolicy:
      'Guest information is collected and processed only for reservation and hotel service purposes.',
  },

  appearance: {
    primaryColor: '#9A7650',

    showHotelLogo: true,
    showFooter: true,

    maintenanceMode: false,
  },

  security: {
    requireEmailVerification: true,
    allowGuestRegistration: true,

    sessionTimeout: 60,

    twoFactorAuthentication: false,
  },
};
