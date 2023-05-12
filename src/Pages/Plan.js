import React, { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import  CalendarComponent,{ formatDate } from "../components/Calendar.js";
import Calendar from "../components/Calendar.js";

function Plan(props) {
    const { departDate, arriveDate } = props.location.state;

    return (
        <div>
            <p>출발일: {formatDate(departDate)}</p>
            <p>도착일: {formatDate(arriveDate)}</p>
        </div>

    );
}

export default Plan;