import React, { useState } from "react";

function Question({
  id,
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  option1,
  option2,
  option3,
  option4,
  answer1,
  answer2,
  type,
  selectedNumber,
  setOptionChoosen,
}) {
  const [select, setSelect] = useState("a");
  const [fbanswer, setFbanswer] = useState('')
  return (
    <>
      {/* The question  */}
      <p className="text-2xl py-4  text-white">
        {" "}
        {selectedNumber + 1}. {question}
      </p>

      {type === "MCQ" ? (
        <>
          {" "}
          {/* option A */}
          <label
            for="optionA"
            className={`${select} ? "active" : "answer-btn"`}
            onClick={(select) => {
              setOptionChoosen("optionA");
            }}
          >
            <li className="answer">
              <input
                className="mx-4"
                type="radio"
                id="optionA"
                name="selectedOption"
                ref={option1}
              />
              {optionA}
            </li>
          </label>
          {/* option B  */}
          <label
            for="optionB"
            className={`${select} ? "active" : "answer-btn"`}
            onClick={(select) => {
              setOptionChoosen("optionB");
            }}
          >
            <li className="answer">
              <input
                className="mx-4"
                type="radio"
                id="optionB"
                name="selectedOption"
                ref={option2}
              />

              {optionB}
            </li>{" "}
          </label>
          {/* option C  */}
          <label
            for="optionC"
            className={`${select} ? "active" : "answer-btn"`}
            onClick={(select) => {
              setOptionChoosen("optionC");
            }}
          >
            <li className="answer">
              <input
                className="mx-4"
                type="radio"
                id="optionC"
                name="selectedOption"
                ref={option3}
              />

              {optionC}
            </li>{" "}
          </label>
          {/* option D  */}
          <label
            for="optionD"
            className={`${select} ? "active" : "answer-btn"`}
            onClick={(select) => {
              setOptionChoosen("optionD");
            }}
          >
            <li className="answer">
              <input
                className="mx-4"
                type="radio"
                id="optionD"
                name="selectedOption"
                ref={option4}
              />
              {optionD}
            </li>{" "}
          </label>{" "}
        </>
      ) : (
        <>
          <div className="answer">
            <input className="outline-none" type="text" onChange={(e)=>setFbanswer(e.target.value)} onMouseLeave={()=>setOptionChoosen(fbanswer)} />
          </div>
        </>
      )}

      {/* <button>unchecked</button> */}

      {/* <li>{answer}</li> */}
    </>
  );
}

export default Question;
