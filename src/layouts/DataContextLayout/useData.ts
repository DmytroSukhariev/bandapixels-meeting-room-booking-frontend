import {initialState} from "./initialState";
import {useState} from "react";
import {BackEndEvent, EventCalendar} from "../../types/events";
import {MeetingRoom} from "../../types/room";


export const useData = () => {
    const [data, setData] = useState(initialState)

    return {
        state: data,
        setAboutBookedModal: (value: boolean) => {
            setData((prev) => ({...prev, aboutBookedModal: value}))
        },
        setBookingModal: (value: boolean) => {
            setData((prev) => ({...prev, bookingModal: value}))
        },
        setCalendarEvents: (events: EventCalendar[]) => {
            setData((prev) => ({...prev, events}))
        },
        setBackendEvents: (events: BackEndEvent[]) => {
            setData((prev) => ({...prev, backendEvents: events}))
        },
        setRooms: (rooms: MeetingRoom[]) => {
            setData((prev) => ({...prev, rooms}))
        },
        setCurrentBackendEvent: (event: BackEndEvent) => {
            setData((prev) => ({...prev, currentEvent: event}))
        }
    }
}

export type DataContextType = ReturnType<typeof useData>
