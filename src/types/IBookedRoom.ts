export interface IBookedRoom {
  issuerFirstName: string;
  issuerLastName: string;
  meetingRoomId: number;
  description?: string;
  numberOfPeople?: number;
  start: Date;
  end: Date;
}
