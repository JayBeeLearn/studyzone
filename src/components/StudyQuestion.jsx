import React, { useState } from "react";
import { FaCheck, FaWizardsOfTheCoast } from "react-icons/fa";

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
  type,
  answer1,
  answer2,
  displayAnswer,
}) {
  const [fbanswer, setFbanswer] = useState("");
  return (
    <div className="study">
      <p className="text-2xl py-4  text-white">
        {" "}
        {selectedNumber + 1}. {question}
      </p>
      {type === "MCQ" ? (
        <>
          {" "}
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
          </li>{" "}
        </>
      ) : (
        <>
          <div className="study-answer">
            <div className="bg-white rounded my-2 flex justify-between pl-4">
              {" "}
              <input
                type="text"
                className=" outline-none bg-transparent "
                onChange={(e) => {
                  if (!lock) {
                    setFbanswer(e.target.value);
                  }
                }}
              />
              <span
                className=" bg-blue-500 py-2 rounded-r px-2 text-white cursor-pointer"
                onClick={() => checkAns(answer1, fbanswer)}
              >
                Check Answer
              </span>
              {/* <span>  </span> */}
            </div>
          </div>
          <div className="px-8">
            {displayAnswer && (
              <>
                {" "}
                {fbanswer.toLowerCase() == answer1.toLowerCase() ||
                fbanswer.toLowerCase() == answer2.toLowerCase() ? (
                  <div className="bg-green-300 rounded px-4 py-2 my-2 mx-8">
                    <p className="flex items-center">
                      <span className="text-green-600 mr-4 text-xl">
                        {" "}
                        <FaCheck />{" "}
                      </span>
                      Bravo! You are correct. Keep going!
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-300 rounded px-4 py-2 my-2 mx-8">
                    {" "}
                    <p className="flex items-center">
                      <span className="mr-4 text-red-600 text-xl">
                        {" "}
                        <FaWizardsOfTheCoast />{" "}
                      </span>
                      <p>
                        Oops, that was wrong. The correct answer would have been{" "}
                        <span className="font-bold text-lg">{answer1}</span> or{" "}
                        <span className="font-bold text-lg">{answer2}</span>.
                        Keep trying.{" "}
                      </p>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}

      {/* <li>{answer}</li> */}
    </div>
  );
}

export default StudyQuestion;
