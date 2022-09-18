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
// import moment from 'moment';
// import moment from 'react-moment';
// import "react-big-calendar/lib/css/react-big-calendar.css";
import './styles/styles.scss';

// const localizer = momentLocalizer(moment);

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
    const [myEventsList, setMyEvents] = useState([
        {
            title: 'Ivan Kozan',
            start: new Date(),
            end: new Date(),
        },
    ]);
    const errorEvent = useRef(false);
    const viewMode = useRef<View>('week');

    const handleSelectEvent = (i: { start: Date; end: Date }) => {
        console.log('handle', i);
    };

    const handleSelectSlot = useCallback(
        ({ start, end }: { start: Date; end: Date }) => {
            if (viewMode.current !== 'month') {
                if (!errorEvent.current) {
                    console.log('fff', errorEvent.current);
                    const title = window.prompt('New Event name');

                    if (title) {
                        setMyEvents((prev) => [...prev, { start, end, title }]);
                    }
                }

                if (errorEvent.current) {
                    errorEvent.current = false;
                }
            } else {
                //todo redirect to week
            }
        },
        [setMyEvents]
    );

    const handleSelectRange = (range: { start: Date; end: Date }) => {
        myEventsList.forEach((event) => {
            if (
                // new moment(range.end).isBetween(event.start, event.end) &&
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
            {/* <Calendar
                defaultView={Views.WEEK}
                localizer={localizer}
                events={myEventsList}
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
                // toolbar={false}
            /> */}
        </div>
    );
};
