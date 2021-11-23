import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentTab } from "../../Redux/AppSlice";

const Communication = () => {
  const selectCurrent = useSelector(selectCurrentTab);

  return (
    <div
      className={`text-color conditional-padding ${selectCurrent === 3 ? "d-block" : "d-none"}`}
    >
      <div className="text-center">
        <h1>Improve your communication skills at work</h1>
        <Link to="/" className="link-style">
          Performing well at your workplace needs more than just coding. Elevate
          your career by working on your communication.
        </Link>
      </div>
      <div className="my-5">
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Workplace Communication
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Engineering Documentation
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Salary negotiations
        </Link>
        <Link
          to="/"
          className="btn btn-bg shadow-none w-100 text-color text-start p-3 border-0 my-2"
        >
          Learn to say no
        </Link>
      </div>
    </div>
  );
};

export default Communication;
