import "../css/SchTrans.css";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const SchTrans = () => {
    const location = useLocation();
    const departDate = location.state?.departDate.toLocaleDateString();
    const arriveDate = location.state?.arriveDate.toLocaleDateString();

    const navigate = useNavigate();
    const SaveBlock = () =>{
        navigate("/schList", { state: { departDate, arriveDate }});
    }

    return (
        <div>
            <h1>일정 생성 페이지(교통 API)</h1>
            <p>출발 날짜: {departDate}</p>
            <p>도착 날짜: {arriveDate}</p>

            <div className="SaveBlock" onClick={SaveBlock}>일정 저장</div>
        </div>

    );
};
export default SchTrans;




