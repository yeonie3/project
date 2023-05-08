
import React from "react";
import "../css/Mback.css";
import styled from "styled-components";
import travel from "../images/travel.jpg";
import Calendar from "../components/Calendar";
import Calendarthis from "../components/Calendarthis";

const MbackWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const TravelImage = styled.img`
  width: 100%;
  vertical-align: middle;
  object-fit: cover;
`;

const ImageCanText = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: x-large;

  .arrive {
    position: absolute;
    top: 0%;
    left: 0%;
    //transform: translate(50%, -50%);
  }
  .depart {
    position: absolute;
    top: 50%;
    right: 0%;
    //transform: translate(-50%, -50%);
  }


`;


function Mback() {
    return (
        <MbackWrapper>
            <TravelImage src={travel} alt="배경사진" />
            <ImageCanText>
                <div className={"depart"}>
                    <p>출발날짜</p>
                    <Calendar />
                </div>
                <div className={"arrive"}>
                    <p>도착지,도착날짜</p>
                    <Calendar />
                </div>


            </ImageCanText>

        </MbackWrapper>
    );
}

export default Mback;