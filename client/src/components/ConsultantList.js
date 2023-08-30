import React from "react";
import { useNavigate } from "react-router-dom";
import './componentStyle/ConsultantList.css';

const ConsultantList = ({ consultant }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/consultant/book-appointment/${consultant._id}`)}
      >
        <div className="card-header">
          {consultant.firstName} {consultant.lastName}
        </div>
        <div className="card-body">
          <div className="info-item">
            <b>SPECIALIZATION:</b><p className="inside">{consultant.specialization}</p>
          </div>
          <div className="info-item">
          <b>EXPERIENCE:</b><p className="inside">{consultant.experience}</p>
          </div>
          <div className="info-item">
          <b>TIME SLOT:</b><p className="inside">{consultant.timings[0]} - {consultant.timings[1]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantList;
