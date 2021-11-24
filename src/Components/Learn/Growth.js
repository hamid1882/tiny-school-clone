import React from "react";
import { Learn } from "../../Database/Learn";

const Growth = () => {
  return (
    <>
      {Learn.map((item) => {
        return (
          <div className="w-100">
            <div className="p-3 rounded btn-bg-active text-color">
              <h4>{item.subject}</h4>
              <p>{item.intro}</p>
              <span>Skill level: </span>
              <span>{item.level}</span>
              <div>
                <button className="btn bg-white my-5">Life skills</button>
              </div>
            </div>
            {item.stages.map((data) => {
              return (
                <div className="p-3 my-5 rounded btn-bg-active text-color position-relative">
                  <i class="process far fa-question-circle icon-z"></i>
                  <h3>{data.heading}</h3>
                  <div className="mx-2">{data.sub_heading}</div>
                  {data.steps.map((ref) => {
                    return (
                      <ol className="overflow-hidden my-3">
                        <li className="d-flex gap-2 align-items-center p-1 m-1">
                          <span>{ref.index}.</span>
                          <span>{ref.name}</span>
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noreferrer"
                            className="ref-style"
                          >
                            ({ref.website})
                          </a>
                        </li>
                      </ol>
                    );
                  })}
                </div>
              );
            })}

            <div className="process-end d-flex align-items-center">
              <i className="far fa-question-circle text-white icon-z"></i>
              <div className="mx-3 responsive-text">
                A better version of yourself awaits you
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Growth;
