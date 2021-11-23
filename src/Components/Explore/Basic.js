import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentTab } from "../../Redux/AppSlice";

const Basic = () => {
  const selectCurrent = useSelector(selectCurrentTab);

  return (
    <div
      className={`text-color conditional-padding ${selectCurrent === 2 ? "d-block" : "d-none"}`}
    >
      <div className="text-center">
        <h1>Explore some basic career skills</h1>
        <Link to="/" className="link-style">
          By this point you are expected to know how to build a basic app
        </Link>
      </div>
      <div className="my-5">
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Writing Clean Code
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Software testing basics
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Time management
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Career Ladder
        </Link>
      </div>
    </div>
  );
};

export default Basic;
