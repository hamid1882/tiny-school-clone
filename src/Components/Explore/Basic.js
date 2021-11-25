import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Skilldata } from "../../Database/Skilldata";
import { selectCurrentTab } from "../../Redux/AppSlice";

const Basic = () => {
  const selectCurrent = useSelector(selectCurrentTab);
  const MidlevelData = Skilldata.filter((data) => data.Level === "Mid-level");

  return (
    <div className={`text-color ${selectCurrent === 2 ? "d-block" : "d-none"}`}>
      <div className="text-center">
        <h1>Explore some basic career skills</h1>
        <Link to="/" className="link-style">
          By this point you are expected to know how to build a basic app
        </Link>
      </div>
      <div className="my-5">
        {MidlevelData.map((item) => {
          return (
            <Link
              to={`/skills/${item.Subject}`}
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

export default Basic;
