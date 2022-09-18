import {BackEndEvent, EventCalendar} from "../../types/events";
import {InitialState} from "./types";


export const initialState: InitialState = {
    aboutBookedModal: false,
    bookingModal: false,
    events: [],
    backendEvents: [],
    rooms: [],
    currentEvent: {
        numberOfPeople: 0,
        end: null,
        start: null,
        description: "",
        issuerFirstName: "",
        issuerLastName: "",
        meetingRoomId: 0,
    }
}
