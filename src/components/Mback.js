import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import travel from "../images/travel.jpg";
import plan from "../Pages/plan"
import '../css/Mback.css';
import CalendarComponent, { formatDate } from "../components/Calendar";


const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
`;



function Mback() {
    const [departDate, setDepartDate] = useState(new Date());
    const [arriveDate, setArriveDate] = useState(new Date());

    const navigate = useNavigate();
    const PlanBlock = () =>{
        navigate("/plan");
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
                <button className="PlanBlock" onClick={PlanBlock}>일정 생성</button>

                {/*<Row>*/}
                    {/*<PlanBlock>*/}
                    {/*    <Link to={{ pathname: "/plan", state: { departDate, arriveDate } }}>일정생성</Link>*/}

                    {/*</PlanBlock>*/}

                    {/*<NavLink to="/Plan" className={(PlanBlock) => {*/}
                    {/*    return isActive ? '일정이동' : '';*/}
                    {/*}}>*/}
                    {/*</NavLink>*/}
                {/*</Row>*/}
            </div>
        </div>
    );
}

export default Mback;