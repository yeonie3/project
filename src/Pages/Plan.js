import React from "react";
import { useLocation } from "react-router-dom";

const Plan = () => {
    const location = useLocation();
    const departDate = location.state?.departDate.toLocaleDateString();
    const arriveDate = location.state?.arriveDate.toLocaleDateString();

    return (
        <div>
            <h1>일정 생성 페이지</h1>
            <p>출발 날짜: {departDate}</p>
            <p>도착 날짜: {arriveDate}</p>
        </div>    );
};

export default Plan;