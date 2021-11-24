import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Skilldata } from "../../Database/Skilldata";
import { selectCurrentTab } from "../../Redux/AppSlice";

const AdvancedSkills = () => {
  const selectCurrent = useSelector(selectCurrentTab);
  const advancedData = Skilldata.filter((data) => data.Level === "expert");

  return (
    <div className={`text-color ${selectCurrent === 4 ? "d-block" : "d-none"}`}>
      <div className="text-center">
        <h1>Learn advanced engineering skills</h1>
        <Link to="/" className="link-style">
          These skills are suitable for mid-level and senior engineers.
        </Link>
      </div>
      <div className="my-5">
        {advancedData.map((item) => {
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

export default AdvancedSkills;
