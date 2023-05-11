import React from 'react';
import '../css/App1_1.css';
import '../css/App1_2.css';
import '../css/App2.css';
import '../css/Home.css';
import styled from 'styled-components';
import Mback from "../components/Mback";
import App1_1 from "../components/App1_1";
import App1_2 from "../components/App1_2";
import App2 from "../components/App2";
import Board from '../Pages/Board';
import Plan from '../Pages/plan';


function Home(props) {
    return (
        <>
            <div id="top">
            <Mback />

            </div>

                <div id="middle">
                    <div id="middle-left">
                        <div id ="LeftText">
                            인기여행지
                        </div>
                        <App1_1/>
                        <App1_2/>

                    </div>
                    <div id="middle-right">
                        <p>추천여행지</p>
                        <div id="middle-top">
                            <App2 />
                        </div>
                        <div id="middle-bottom">
                            <Board />
                        </div>
                    </div>
                </div>


        </>
    );
}

export default Home;