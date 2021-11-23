import React from "react";
import { Learn } from "../../Database/Learn";

const Growth = () => {
  const data = Learn;
  const reference = data.map((item) => item.reference);
  const subject = data.map((item) => item.subject);
  const study = data.map((item) => item.study);
  const studyIntro = study.map((item) => item.intro);
  const studyLevel = study.map((item) => item.level);
  const heading = study.map((item) => item.heading);
  const subHeading = study.map((item) => item.sub_heading);
  const stage_1 = reference.map((item) => item.stage_1);
  const stage_2 = reference.map((item) => item.stage_2);
  const stage_3 = reference.map((item) => item.stage_3);

  return (
    <div className="p-5 w-100 position-relative">
      <div className="p-3 rounded btn-bg-active text-color">
        <h4>{subject}</h4>
        <p>{studyIntro}</p>
        <span>Skill level: </span>
        <span>{studyLevel}</span>
        <div>
          <button className="btn bg-white my-5">Life skills</button>
        </div>
      </div>
      <div className="p-3 my-5 rounded btn-bg-active text-color">
          <i class="process far fa-question-circle icon-z"></i>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
        <ol>
          <li className="d-flex gap-2 align-items-center">
            <span>1.</span>
            <span>{stage_1[0].name}</span>
            <a
              href={stage_1[0].ref}
              target="_blank"
              rel="noreferrer"
              className="ref-style"
            >
              (www.ted.com)
            </a>
          </li>
          <li className="d-flex gap-2 align-items-center my-2">
            <span>2.</span>

            <span>{stage_2[0].name}</span>
            <a
              href={stage_2[0].ref}
              target="_blank"
              rel="noreferrer"
              className="ref-style"
            >
              (www.ted.com)
            </a>
          </li>
          <li className="d-flex gap-2 align-items-center ">
            <span>3.</span>
            <span>{stage_3[0].name}</span>
            <div>
              <a
                href={stage_3[0].ref}
                target="_blank"
                rel="noreferrer"
                className="ref-style"
              >
                (fs.blog)
              </a>
            </div>
          </li>
        </ol>
      </div>
      {/* 2 */}

      <div className="p-3 my-5 rounded btn-bg-active text-color">
        <i class="process far fa-question-circle icon-z"></i>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
        <ol>
          <li className="d-flex gap-2 align-items-center">
            <span>1.</span>
            <span>{stage_1[0].name}</span>
            <a
              href={stage_1[0].ref}
              target="_blank"
              rel="noreferrer"
              className="ref-style"
            >
              (www.ted.com)
            </a>
          </li>
          <li className="d-flex gap-2 align-items-center my-2">
            <span>2.</span>

            <span>{stage_2[0].name}</span>
            <a
              href={stage_2[0].ref}
              target="_blank"
              rel="noreferrer"
              className="ref-style"
            >
              (www.ted.com)
            </a>
          </li>
          <li className="d-flex gap-2 align-items-center ">
            <span>3.</span>
            <span>{stage_3[0].name}</span>
            <div>
              <a
                href={stage_3[0].ref}
                target="_blank"
                rel="noreferrer"
                className="ref-style"
              >
                (fs.blog)
              </a>
            </div>
          </li>
        </ol>
      </div>

      {/* 3 */}

      <div className="p-3 my-5 rounded btn-bg-active text-color">
        <i class="process far fa-question-circle icon-z"></i>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
        <ol>
          <li className="d-flex gap-2 align-items-center">
            <span>1.</span>
            <span>{stage_1[0].name}</span>
            <a
              href={stage_1[0].ref}
              target="_blank"
              rel="noreferrer"
              className="ref-style"
            >
              (www.ted.com)
            </a>
          </li>
          <li className="d-flex gap-2 align-items-center my-2">
            <span>2.</span>

            <span>{stage_2[0].name}</span>
            <a
              href={stage_2[0].ref}
              target="_blank"
              rel="noreferrer"
              className="ref-style"
            >
              (www.ted.com)
            </a>
          </li>
          <li className="d-flex gap-2 align-items-center ">
            <span>3.</span>
            <span>{stage_3[0].name}</span>
            <div>
              <a
                href={stage_3[0].ref}
                target="_blank"
                rel="noreferrer"
                className="ref-style"
              >
                (fs.blog)
              </a>
            </div>
          </li>
        </ol>
      </div>
      <div className="process-end d-flex align-items-center">
        <i className="far fa-question-circle text-white icon-z"></i>
        <div className="mx-3">A better version of yourself awaits you</div>
      </div>
    </div>
  );
};

export default Growth;
