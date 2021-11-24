import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentTab, changeTab } from "../../Redux/AppSlice";

function RightNavbar() {
  const selectCurrent = useSelector(selectCurrentTab);
  const dispatch = useDispatch();

  const handleCurrentSection = (index) => {
    dispatch(changeTab(index));
  };

  return (
    <div className="navbar px-3 d-none d-md-block sticky-top">
      <Link to="/">
        <img
          className="img-style"
          src="https://tiny.school/tinyschool-logo-with-text.svg"
          alt="icon"
        />
      </Link>
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
          className={`btn-link-style btn-style d-flex gap-2 w-100 p-2 align-items-center ${
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
          className={`btn-link-style btn-style d-flex gap-2 w-100 p-2 align-items-center ${
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
          className={`btn-link-style btn-style d-flex gap-2 w-100 p-2 align-items-center ${
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
  );
}

export default RightNavbar;
