export type EventCalendar = {
    title: string,
    start:  Date|null,
    end:  Date|null,
}

export type BackEndEvent = {
    issuerFirstName: string;
    issuerLastName: string;
    meetingRoomId: number;
    description?: string;
    numberOfPeople?: number;
    start: Date|null;
    end: Date|null;
}
