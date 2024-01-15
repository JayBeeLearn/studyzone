import React, { useState } from "react";

function Question({
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
}) {
  const [select, setSelect] = useState(false);
  return (
    <>
      <p className="text-2xl py-4  text-white">
        {" "}
        {selectedNumber + 1}. {question}
      </p>
      <li className="answer">
        <button
          className={select ? "active" : "answer-btn"}
          onClick={(select) => {
            setOptionChoosen("optionA");
          }}
        >
          {optionA}
        </button>
      </li>

      <li className="answer">
        <button
          className={select ? "active" : "answer-btn"}
          onClick={(select) => {
            setOptionChoosen("optionB");
          }}
        >
          {optionB}
        </button>
      </li>

      <li className="answer">
        <button
          className={select ? "active" : "answer-btn"}
          onClick={(select) => {
            setOptionChoosen("optionC");
          }}
        >
          {optionC}
        </button>
      </li>

      <li className="answer">
        <button
          className={select ? "active" : "answer-btn"}
          onClick={(select) => {
            setOptionChoosen("optionD");
          }}
        >
          {optionD}
        </button>
      </li>

      {/* <li>{answer}</li> */}
    </>
  );
}

export default Question;
