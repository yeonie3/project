import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

const CalendarStyles = `
  .react-calendar {
    width: 100px;
    height: 100px;
  }

  .react-calendar__tile {
    font-size: 16px;
    padding: 8px;
  }
`;

export const formatDate = (date) => moment(date).format("YYYY년 MM월 DD일");

function CalendarComponent({ onChange, value }) {
    return (
        <>
            <Calendar onChange={onChange} value={value} />
            <div className="text">{formatDate(value)}</div>
        </>
    );
}

export default CalendarComponent;