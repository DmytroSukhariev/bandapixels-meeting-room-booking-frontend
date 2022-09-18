import axios, { AxiosPromise } from 'axios';

const BASE_URL = 'https://a66d-77-120-226-129.eu.ngrok.io';

export type RoomInfoProps = {
    id: number;
    peopleCapacity: number;
    building: string;
    noOfMeetingRoom: number;
};

export function fetchRoomByID(id: string): AxiosPromise<RoomInfoProps> {
    return axios.get(`${BASE_URL}/meeting-room/${id}`);
}
