import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentTab } from "../../Redux/AppSlice";

const AdvancedSkills = () => {
  const selectCurrent = useSelector(selectCurrentTab);

  return (
    <div
      className={`text-color conditional-padding ${selectCurrent === 4 ? "d-block" : "d-none"}`}
    >
      <div className="text-center">
        <h1>Learn advanced engineering skills</h1>
        <Link to="/" className="link-style">
          These skills are suitable for mid-level and senior engineers.
        </Link>
      </div>
      <div className="my-5">
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Software design patterns
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Product mindset
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Process in software development
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Basic of infrastructure
        </Link>
      </div>
    </div>
  );
};

export default AdvancedSkills;
