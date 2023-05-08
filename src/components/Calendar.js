import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MyApp(){
    const[value, onChange] = useState(new Date());

    return (
        <>
            <Calendar onChange ={onChange} value={value} />
            <div className="text">
                {moment(vaue).format("YYYY년 MM월 DD일")}
            </div>
        </>
    )
}
export default MyApp;