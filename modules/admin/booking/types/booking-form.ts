export interface BookingFormData {
  guestId?: string;

  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;

  roomId: string;

  checkIn: string;
  checkOut: string;

  guests: number;

  specialRequests?: string;
  notes?: string;

  paymentStatus: 'UNPAID' | 'PARTIAL' | 'PAID';
  paymentAmount?: number;
}
