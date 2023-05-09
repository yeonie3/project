
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

function MyApp() {
    const [value, onChange] = useState(new Date());

    // 선택한 날짜를 특정 형식으로 변환하여 반환하는 함수
    const formatDate = (date) => moment(date).format("YYYY년 MM월 DD일");

    return (
        <>
            <Calendar onChange={onChange} value={value} />
            <div className="text">{formatDate(value)}</div>
        </>
    );
}

export default MyApp;