import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Skilldata } from "../../Database/Skilldata";
import { selectCurrentTab } from "../../Redux/AppSlice";

const Communication = () => {
  const selectCurrent = useSelector(selectCurrentTab);
  const communicationData = Skilldata.filter(
    (data) => data.Level === "communication"
  );

  return (
    <div className={`text-color ${selectCurrent === 3 ? "d-block" : "d-none"}`}>
      <div className="text-center">
        <h1>Improve your communication skills at work</h1>
        <Link to="/" className="link-style">
          Performing well at your workplace needs more than just coding. Elevate
          your career by working on your communication.
        </Link>
      </div>
      <div className="my-5">
        {communicationData.map((item) => {
          return (
            <Link
              to="/skills/growth"
              className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
            >
              {item.Subject}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Communication;
