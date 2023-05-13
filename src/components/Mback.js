import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import travel from "../images/travel.jpg";
import plan from "../Pages/Plan"
import '../css/Mback.css';
import CalendarComponent, { formatDate } from "../components/Calendar";

function Mback() {
    const [departDate, setDepartDate] = useState(new Date());
    const [arriveDate, setArriveDate] = useState(new Date());

    const navigate = useNavigate();
    const PlanBlock = () =>{
        navigate("/plan", { state: { departDate, arriveDate }});
    }

    return (
        <div id="Container">
            <div className= "ImageBack">
                <img src={travel} alt="배경사진" />

                <div className= "DepartBlock">
                    <p>출발날짜</p>
                    <CalendarComponent onChange={setDepartDate} value={departDate} />
                </div>
                <div className="ArriveBlock">
                    <p>도착지, 도착날짜</p>
                    <CalendarComponent onChange={setArriveDate} value={arriveDate} />
                </div>

                <div className="PlanBlock" onClick={PlanBlock}>일정 생성</div>
                {/*<div className="Background"> </div>*/}
            </div>

        </div>
    );

}
export default Mback;