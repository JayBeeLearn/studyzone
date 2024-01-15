import React from "react";

function StudyQuestion({
  id,
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  answer,
  selectedNumber,
  setOptionChoosen,
  lock,
  setLock,
  checkAns,
  option1,
  option2,
  option3,
  option4,
}) {
  return (
    <div className="study">
      <p className="text-2xl py-4  text-white">
        {" "}
        {selectedNumber + 1}. {question}
      </p>
      <li className="study-answer">
        <button
          ref={option1}
          className={"study-answer-btn"}
          onClick={(e) => {
            checkAns(e, "optionA");
          }}
        >
          {optionA}
        </button>
      </li>

      <li className="study-answer">
        <button
          ref={option2}
          className={"study-answer-btn"}
          onClick={(e) => {
            checkAns(e, "optionB");
          }}
        >
          {optionB}
        </button>
      </li>

      <li className="study-answer ">
        <button
          ref={option3}
          className={"study-answer-btn"}
          onClick={(e) => {
            checkAns(e, "optionC");
          }}
        >
          {optionC}
        </button>
      </li>

      <li className="study-answer">
        <button
          ref={option4}
          className={"study-answer-btn"}
          onClick={(e) => {
            checkAns(e, "optionD");
          }}
        >
          {optionD}
        </button>
      </li>

      {/* <li>{answer}</li> */}
    </div>
  );
}

export default StudyQuestion;
