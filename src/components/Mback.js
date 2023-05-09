import React from "react";
import{Link} from "react-router-dom";
import styled from "styled-components";
import travel from "../images/travel.jpg";
import Calendar from "../components/Calendar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
`;
const imageback = styled.div`
display:flex;
  height:100% ;
  width:100%;
`;

const Planblock = styled.div`
  background-color: #bdf;
  border: 2px solid #1bf;
  padding: 0.5rem;
  line-height: 1rem;
  border-radius: 0.5rem;
  
`;

const DepartBlock = styled.div`
  position: absolute;
  top: 30%;
  
`;

const ArriveBlock = styled.div`
  position: absolute;
  top: 30%;
  margin-left 20px
  font-size: 2rem;
`;

function Mback() {
    return (
        <Container>
            <div className={"imageback"}>
                <img src={travel} alt="배경사진" />
                <DepartBlock>
                    <p>출발날짜</p>
                    <Calendar />
                </DepartBlock>
                <ArriveBlock>
                    <p>도착지,도착날짜</p>
                    <Calendar />
                </ArriveBlock>
                <Row>
                    <Planblock>
                        <Link to="/Plan">일정생성</Link>
                    </Planblock>
                </Row>
            </div>

        </Container>
    );
}

export default Mback;