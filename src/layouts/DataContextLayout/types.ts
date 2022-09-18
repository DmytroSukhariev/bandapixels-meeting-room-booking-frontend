import {BackEndEvent, EventCalendar} from "../../types/events";
import {MeetingRoom} from "../../types/room";

export type InitialState = {
    aboutBookedModal: boolean,
    bookingModal: boolean,
    events: EventCalendar[],
    backendEvents: BackEndEvent[]
    rooms: MeetingRoom[],
    currentEvent: BackEndEvent;
}

export type ContextType =
    {
        state: InitialState,
        setAboutBookedModal: (value: boolean) => void,
        setBookingModal: (value: boolean) => void,
        setCalendarEvents: (events: EventCalendar[]) => void,
        setBackendEvents: (events: BackEndEvent[]) => void,
        setRooms: (rooms: MeetingRoom[]) => void
    }
