import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentTab } from "../../Redux/AppSlice";
import { Skilldata } from "../../Database/Skilldata";

const GetStarted = () => {
  const selectCurrent = useSelector(selectCurrentTab);

  const juniorData = Skilldata.filter((data) => data.Level === "Junior");

  return (
    <div className={`text-color ${selectCurrent === 1 ? "d-block" : "d-none"}`}>
      <div className="text-center">
        <h1>
          Start your journey to improve your career skills with Tinyschool
        </h1>
        <Link to="/" className="link-style">
          Learn how to use Tinyschool
        </Link>
      </div>
      <div className="my-5">
        {juniorData.map((item) => {
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

export default GetStarted;
