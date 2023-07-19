import React, { useState } from 'react';
import CalendarLibrary from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isWithinInterval, addDays, startOfDay, endOfDay } from 'date-fns';

function Calendar({ roomId, booking }) {
    const [value, onChange] = useState(new Date());
    const now = new Date();
    const disabledRange = [addDays(now, 1), addDays(now, 3)];

    let bookedDates = [];

    if (booking) {
        bookedDates = booking
            .filter((book) => book.roomId === roomId)
            .map((book) => new Date(book.date));
    }

    const tileDisabled = ({ date, view }) => {
        if (view === 'month' && bookedDates.length !== 0) {
            const isBookedDate = bookedDates.some(
                (bookedDate) => isWithinInterval(date, { start: startOfDay(bookedDate), end: endOfDay(bookedDate) })
            );
            return isBookedDate;
        }
        return false;
    };

    return (
        <div>
            <CalendarLibrary
                onChange={onChange}
                value={value}
                calendarType='iso8601'
                selectRange={true}
                minDate={new Date()}
                returnValue='range'
                tileDisabled={tileDisabled}
            />
        </div>
    );
}

export default Calendar;






