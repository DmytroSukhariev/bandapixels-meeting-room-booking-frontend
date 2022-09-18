import { BackEndEvent } from '../types/events';
import { OfficeBuilding } from '../types/room';
import { Get, Post } from './api-client';

type Entity = { id: number; createdAt: string; updatedAt: string };

export type MeetingRoom = {
    id: number;
    peopleCapacity: number;
    building: OfficeBuilding;
    officeMeetingRoomId: number;
};

export type Booking = {
    issuerFirstName: string;
    issuerLastName: string;
    meetingRoomId: number;
    description: string;
    numberOfPeople: number;
    start: Date;
    end: Date;
} & Entity;

export const MeetingRooms = async () => Get<MeetingRoom[]>('/meeting-room');

export const MeetingRoom = async () => Get<MeetingRoom>('');

export const AvailableRooms = async (
    from: Date,
    to: Date,
    numberOfPeople?: number
) => Get<MeetingRoom[]>('/available-rooms', { from, to, numberOfPeople });

export const PostBackendEvent = async (data: BackEndEvent) => {
    return Post<any>('/booking', data);
};

export const BookingsForRoom = async (roomId: number, from: Date, to: Date) =>
    Get(`for-room/:${roomId}`, { from, to });
