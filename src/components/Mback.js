import React from 'react';
import travel from '../images/travel.jpg';
import '../css/Mback.css';

const Mback = () =>{

    return(
        <div className="travel">
            <img src={travel} alt="배경사진"/>
        </div>
    )
}
export default Mback;