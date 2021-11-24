import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCurrentTab,
  changeTab,
  selectNavbarShown,
  toggleNavbar,
} from "../../Redux/AppSlice";

const MiniRightNavbar = () => {
  const selectCurrent = useSelector(selectCurrentTab);
  const selectNav = useSelector(selectNavbarShown);
  const dispatch = useDispatch();

  const handleCurrentSection = (index) => {
    dispatch(changeTab(index));
  };

  const handleToggleNav = () => {
    dispatch(toggleNavbar());
  };

  return (
    <div className="navbar-mini d-md-none sticky-top">
      <button
        className={`btn shadow-none text-white my-3 ${
          selectNav === false ? "d-block" : "d-none"
        }`}
        onClick={handleToggleNav}
      >
        <i className="fa fa-bars icon-hover"></i>
      </button>
      <div
        className={` navbar-scroll position-absolute navbar-bg px-3 h-100 ${
          selectNav ? "navbar-transition" : "navbar-transition-collapse"
        }`}
      >
        <div className="d-flex justify-content-left align-items-center">
          <button onClick={handleToggleNav} className="btn shadow-none">
            <i className="fa fa-long-arrow-alt-left icon-hover"></i>
          </button>
          <Link to="/">
            <img
              className="img-style-mini"
              src="https://tiny.school/tinyschool-logo-with-text.svg"
              alt="icon"
            />
          </Link>
        </div>
        <div className="w-100 h-100 my-4">
          <p className="text-dim display-block">LEARN</p>
          <Link
            to="/"
            onClick={() => handleCurrentSection(1)}
            className={`btn-link-style btn-style d-flex gap-2 w-100 p-2 align-items-center ${
              selectCurrent === 1 ? "btn-bg-active" : null
            }`}
          >
            <i
              className={`fa fa-flag ${
                selectCurrent === 1 ? "btn-bg-active-icon" : "bg-transparent"
              }`}
            ></i>
            <div className="fs-6 bg-transparent">Get Started</div>
          </Link>

          {/* 2 */}
          <Link
            to="/"
            onClick={() => handleCurrentSection(2)}
            className={`btn-link-style  btn-style d-flex gap-2 w-100 p-2 align-items-center ${
              selectCurrent === 2 ? "btn-bg-active" : null
            }`}
          >
            <i
              className={`fa fa-star ${
                selectCurrent === 2 ? "btn-bg-active-icon" : "bg-transparent"
              }`}
            ></i>
            <div className="fs-6 bg-transparent">Basic Skills</div>
          </Link>

          {/* 3 */}
          <Link
            to="/"
            onClick={() => handleCurrentSection(3)}
            className={`btn-link-style  btn-style d-flex gap-2 w-100 p-2 align-items-center ${
              selectCurrent === 3 ? "btn-bg-active" : null
            }`}
          >
            <i
              className={`fa fa-comment-dots ${
                selectCurrent === 3 ? "btn-bg-active-icon" : "bg-transparent"
              }`}
            ></i>
            <div className="fs-6 bg-transparent">Communication</div>
          </Link>

          {/* 4 */}
          <Link
            to="/"
            onClick={() => handleCurrentSection(4)}
            className={`btn-link-style  btn-style d-flex gap-2 w-100 p-2 align-items-center ${
              selectCurrent === 4 ? "btn-bg-active" : null
            }`}
          >
            <i
              className={`fa fa-medal ${
                selectCurrent === 4 ? "btn-bg-active-icon" : "bg-transparent"
              }`}
            ></i>
            <div className="fs-6 bg-transparent">Advanced Skills</div>
          </Link>

          {/* 5 */}

          <Link
          to="/skills"
          onClick={() => handleCurrentSection(5)}
          className={`btn-link-style btn-style d-flex gap-2 w-100 p-2 align-items-center ${
            selectCurrent === 5 ? "btn-bg-active" : null
          }`}
        >
          <i
            className={`fa fa-mask ${
              selectCurrent === 5 ? "btn-bg-active-icon" : "bg-transparent"
            }`}
          ></i>
          <div className="fs-6 bg-transparent">All Skills</div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniRightNavbar;
