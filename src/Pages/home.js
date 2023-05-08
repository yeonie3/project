import React from 'react';
import '../css/App1.css';
import '../css/App2.css';
import Mback from "../components/Mback";
import App1 from "../components/App1";
import App2 from "../components/App2";
import Board from '../Pages/Board';

function Home(props) {
    return (
        <>
            <Mback />
            <p>제일 먼저 보임 </p>
            <div style={{ display: 'flex' }}>
                <aside style={{ flex: 1 }}>
                    <App1 />
                </aside>

                <div style={{ flex: 1 }}>
                    <App2 />
                    <div>
                        <Board />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
