export enum OfficeBuilding {
    OFFICE_1 = '1',
    OFFICE_2 = '2',
}

export type MeetingRoom = {
    id: number;
    peopleCapacity: number;
    building: string;
    noOfMeetingRoom: number;
}
