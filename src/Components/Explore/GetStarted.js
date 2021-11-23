import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentTab } from "../../Redux/AppSlice";

const GetStarted = () => {
  const selectCurrent = useSelector(selectCurrentTab);

  return (
    <div
      className={`text-color conditional-padding ${selectCurrent === 1 ? "d-block" : "d-none"}`}
    >
      <div className="text-center">
        <h1>
          Start your journey to improve your career skills with Tinyschool
        </h1>
        <Link to="/" className="link-style">
          Learn how to use Tinyschool
        </Link>
      </div>
      <div className="my-5">
        <Link
          to="/growth"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Growth Mindset
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Decide a career path - Frontend vs Backend
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Frontend with ReactJS
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Fullstack with Ruby on Rails
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
