import React from 'react';
import travel from '../images/travel.jpg';
import Calendar from '../components/Calendar';
import Calendarthis from '../components/Calendarthis';
import '../css/Mback.css';

const Mback = () =>{

    return(
        <div className="travel">
            <div className="imagecan">
                <img src={travel} alt="배경사진"/>
                <div className="imagecan-text">
                <p>도착지</p>
                    <Calendar/>
                    <Calendarthis/>
                </div>

            </div>

        </div>

    )
}
export default Mback;