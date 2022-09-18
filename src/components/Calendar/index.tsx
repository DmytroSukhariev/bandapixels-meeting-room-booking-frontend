import React, { useCallback, useRef, useState } from 'react';
import {
    Calendar,
    DateLocalizer,
    momentLocalizer,
    View,
    Views,
    DateRange,
    Culture,
} from 'react-big-calendar';
import moment from 'moment';
// import "react-big-calendar/lib/css/react-big-calendar.css";
import './styles/styles.scss';
import { useGetContext } from '../../layouts/DataContextLayout/useGetContext';
import { DataContextType } from '../../layouts/DataContextLayout/useData';

const localizer = momentLocalizer(moment);

let formats = {
    timeGutterFormat: 'HH:mm',
    eventTimeRangeFormat: (
        range: DateRange,
        culture?: Culture,
        localizer?: DateLocalizer
    ) =>
        localizer?.format(range.start, 'HH:mm', culture) +
        '-' +
        localizer?.format(range.end, 'HH:mm', culture),
};

export const MyCalendar = () => {
    const {
        state,
        setBookingModal,
        setAboutBookedModal,
        setCurrentBackendEvent,
    } = useGetContext();
    const errorEvent = useRef(false);
    const viewMode = useRef<View>('week');

    const handleSelectEvent = (i: { start: Date; end: Date }) => {
        console.log('handle', i);
        setAboutBookedModal(true);
    };

    const handleSelectSlot = useCallback(
        ({ start, end }: { start: Date; end: Date }) => {
            if (viewMode.current !== 'month') {
                if (!errorEvent.current) {
                    setBookingModal(true);
                    setCurrentBackendEvent({
                        ...state.currentEvent,
                        start,
                        end,
                    });
                }

                if (errorEvent.current) {
                    errorEvent.current = false;
                }
            } else {
                //todo redirect to week
            }
        },
        [setCurrentBackendEvent]
    );

    const handleSelectRange = (range: { start: Date; end: Date }) => {
        state.events.forEach((event) => {
            if (
                moment(range.end).isBetween(event.start, event.end) &&
                !errorEvent.current
            ) {
                console.log('ALARMA!!!!!!!!!!!!!!!');
                errorEvent.current = true;
            }
        });
        return true;
    };

    return (
        <div>
            <Calendar
                defaultView={Views.WEEK}
                localizer={localizer}
                // @ts-ignore
                events={state.events}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 500 }}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable={true}
                onView={(view) => {
                    viewMode.current = view;
                }}
                onSelecting={handleSelectRange}
                formats={formats}
            />
        </div>
    );
};
