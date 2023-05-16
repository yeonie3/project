import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../css/SchArea.css";


const SchArea = () => {
    const location = useLocation();
    const departDate = location.state?.departDate;
    const arriveDate = location.state?.arriveDate;

    /*이부분 api 데이터로 당겨와야함*/
    const [options, setOptions] = useState([
        { id: 1, text: "Option 1" },
        { id: 2, text: "Option 2" },
        { id: 3, text: "Option 3" },
        { id: 4, text: "Option 4" },
        { id: 5, text: "Option 5" }
    ]);

    const [draggingItemIndex, setDraggingItemIndex] = useState(null);
    const [draggingOverItemIndex, setDraggingOverItemIndex] = useState(null);

    const handleDragStart = (e, index) => {
        setDraggingItemIndex(index);
        e.target.classList.add("dragging");
    };

    const handleDragEnter = (e, index) => {
        setDraggingOverItemIndex(index);
    };

    const handleDragEnd = (e) => {
        e.target.classList.remove("dragging");
        const newList = [...options];
        const [removed] = newList.splice(draggingItemIndex, 1);
        newList.splice(draggingOverItemIndex, 0, removed);
        setOptions(newList);
        setDraggingItemIndex(null);
        setDraggingOverItemIndex(null);
    };
    const navigate = useNavigate();
    const TransBlock = () =>{
        navigate("/SchTrans", { state: { departDate, arriveDate }});
    }

    return (
        <div className="App">
            <div className={"wrap"}>
                <h1>SchArea.세부일정 페이지(지도/장소 API)</h1>

            <div className={"plan"}>

                <p>가는 날: {departDate.toLocaleDateString('ko-KR')}</p>
                <p>오는 날: {arriveDate.toLocaleDateString('ko-KR')}</p>
            </div>
            <ul>
                {options.map((option, index) => (
                    <li
                        key={option.id}
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnter={(e) => handleDragEnter(e, index)}
                        onDragEnd={handleDragEnd}
                        draggable
                        className={
                            draggingItemIndex === index
                                ? "selected dragging"
                                : draggingOverItemIndex === index
                                    ? "dragging-over"
                                    : ""
                        }
                    >
                        {option.text}
                    </li>
                ))}
            </ul>
            <div className="TransBlock" onClick={TransBlock}>교통편 선택하기</div>
        </div>
        </div>
    );
};

export default SchArea;