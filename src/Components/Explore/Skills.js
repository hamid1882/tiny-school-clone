import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch("/api/skilldata")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setdata(jsonResponse.Skilldata));
  }, []);

  return (
    <>
      <div className="text-white">
        <h1>Select a skill to start learning</h1>
        <div className="d-flex flex-wrap gap-3 p-2 w-100">
          {data.map((item) => {
            return (
              <Link
                to={`/skills/${item.Subject}`}
                key={item.id}
                className="d-grid skills-link col-12 col-md-5 col-lg-3 p-2 btn-bg-active"
              >
                <p className="my-2">{item.Subject}</p>
                <div className="col-6 overflow-hidden p-1 h-100 rounded border-0 btn-skill text-center">
                  <span className="fs-6">{item.Level}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
