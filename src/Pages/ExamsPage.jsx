import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import Question from "../components/Question";
import { Link } from "react-router-dom";

function ExamsPage() {
  const { examCourse, gameState, gameStateToggle } = useGlobalContext();

  let exams = examCourse[0];

  const { courseTitle, courseCode, faculty, questions } = exams;

  let [selectedNumber, setSelectedNumber] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(
    questions[selectedNumber]
  );

  const [lock, setLock] = useState(true);

  const [optionChoosen, setOptionChoosen] = useState("");
  const [score, setScore] = useState(0);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let options = [option1, option2, option3, option4];

  const nextQuestion = () => {
    // RETURNS TO THE BEGINNING OF THE LIST WHEN IT GETS TO AN END
    if (selectedNumber === questions.length - 1) {
      setSelectedNumber(0);
      setSelectedQuestion(questions[0]);
    } else {
      setSelectedNumber(++selectedNumber);
      setSelectedQuestion(questions[selectedNumber]);
      if (selectedQuestion.type === "MCQ") {
        if (selectedQuestion.answer === optionChoosen) {
          setScore(score + 1);
        }
      } else {
        if (
          selectedQuestion.answer1.toLowerCase() ==
            optionChoosen.toLowerCase() ||
          selectedQuestion.answer2.toLowerCase() == optionChoosen.toLowerCase()
        ) {
          setScore(score + 1);
        }
      }
    }

    options.map((option) => {
      if (option.current.checked) {
        option.current.checked = false;
        // WILL STILL WORK EVEN IF THE NULL IS ACTIVE
        // return null;
      }
    });
  };

  const handleSubmit = () => {
    if (selectedQuestion.type === "MCQ") {
      if (selectedQuestion.answer === optionChoosen) {
        setScore(score + 1);
      }
    } else {
      if (
        selectedQuestion.answer1.toLowerCase() == optionChoosen.toLowerCase() ||
        selectedQuestion.answer2.toLowerCase() == optionChoosen.toLowerCase()
      ) {
        setScore(score + 1);
      }
    }
    setSelectedNumber(0);
    setSelectedQuestion(questions[0]);
    gameStateToggle();
  };

  // console.log(selectedNumber, questions.length);

  return (
    <>
      {gameState ? (
        <>
          {/* THIS SHOWS AT THE END OF THE GAME, AFTER SUBMITTING  */}

          <div
            className={
              "bg-blue-400 mx-auto my-4 md:w-1/2 px-8 py-4 rounded-md sm:flex sm:flex-col"
            }
          >
            <h1 className="text-2xl text-white text-center my-4 mb-8">
              <span className="text-red-200 text-3xl">The End!</span> <br /> You
              Scored {score} out of possible {""}
              {questions.length} questions
            </h1>

            <div className="w-3/4 mx-auto flex">
              <button
                className="bg-green-100 rounded py-2 w-full font-bold text-green-600 uppercase mx-2"
                onClick={() => {
                  gameStateToggle(), setScore(0);
                }}
              >
                Restart
              </button>
              <Link
                to={"/faculty"}
                className="bg-green-100 rounded py-2 w-full font-bold text-center text-green-600 uppercase mx-2"
                onClick={() => {
                  gameStateToggle(), setScore(0);
                }}
              >
                End
              </Link>
            </div>

            <div className="my-2">
              <p>
                {" "}
                <span className="font-bold">Course Code:</span> {courseCode}{" "}
              </p>
              <p>
                {" "}
                <span className="font-bold">Course Title: </span>
                {courseTitle}
              </p>
              <p>
                {" "}
                <span className="font-bold">Faculty:</span> {faculty}{" "}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="">
          <h2 className={`text-2xl text-center text-blue-500`}>
            {courseTitle}
          </h2>

          <div className="bg-blue-400 mx-auto my-4 md:w-1/2 px-8 py-4 rounded-md">
            {score}
            <Question
              key={selectedQuestion.id}
              {...selectedQuestion}
              selectedNumber={selectedNumber}
              setOptionChoosen={setOptionChoosen}
              option1={option1}
              option2={option2}
              option3={option3}
              option4={option4}
            />
            <div className="w-full flex">
              <div className="bg-green-100 rounded px-4 py-2 w-3/4 justify-center mx-auto">
                {questions.length === selectedNumber + 1 ? (
                  <button
                    to={"/faculty/:courseCode/summary"}
                    className="w-full font-bold text-green-600 uppercase"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    {" "}
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      nextQuestion();
                    }}
                    className="w-full font-bold text-green-600 uppercase"
                  >
                    {" "}
                    Next{" "}
                  </button>
                )}
              </div>
            </div>

            <p className="py-2">
              Question {selectedNumber + 1} of {questions.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ExamsPage;
