export interface BookingRoom {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  guests: number;
}

export interface GuestInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface BookingDetails {
  room: BookingRoom;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guests: number;
}

export interface BookingFormData {
  guest: GuestInformation;
  booking: BookingDetails;
}
