//삭제예정
import React,{useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import {ko} from "date-fns/esm/locate";
const ReactDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                //locate={ko}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
            />
        </div>
    );
};

export default ReactDatePicker;