import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import travel from "../images/travel.jpg";
import Plan from "../Pages/plan"
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

const ImageBack = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const PlanBlock = styled.div`
  background-color: #bdf;
  border: 2px solid #1bf;
  padding: 0.5rem;
  line-height: 1rem;
  border-radius: 0.5rem;
`;

const DepartBlock = styled.div`
  position: absolute;
  top: 30%;
  margint-left: 30px;
`;

const ArriveBlock = styled.div`
  position: absolute;
  top: 30%;
  margin-left: 20px;
  font-size: 2rem;
`;

function Mback() {
    const [departDate, setDepartDate] = useState(new Date());
    const [arriveDate, setArriveDate] = useState(new Date());

    return (
        <div id="Container">
            <ImageBack>
                <img src={travel} alt="배경사진" />
                <DepartBlock>
                    <p>출발날짜</p>
                    <CalendarComponent onChange={setDepartDate} value={departDate} />
                </DepartBlock>
                <ArriveBlock>
                    <p>도착지, 도착날짜</p>
                    <CalendarComponent onChange={setArriveDate} value={arriveDate} />
                </ArriveBlock>
                <Row>
                    <PlanBlock>
                        <Link to={{ pathname: "/Plan", state: { departDate, arriveDate } }}>일정생성</Link>
                    </PlanBlock>
                </Row>
            </ImageBack>
        </div>
    );
}

export default Mback;