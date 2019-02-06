export class Booking {
    id: number;
    roomTypeID: number;
    bookingName: string;
    startOn: Date;
    duration: number;
    payment: number;
    remainingAmount: number;
    capacity: number;
    isActive: boolean;
    createdAt?: Date;
}
