import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import StudyQuestion from "../components/StudyQuestion";
import { Link } from "react-router-dom";

function StudyPage() {
  const { examCourse, gameState, gameStateToggle } = useGlobalContext();

  let exams = examCourse[0];

  const { courseTitle, courseCode, faculty, questions } = exams;

  let [selectedNumber, setSelectedNumber] = useState(0);

  const [selectedQuestion, setSelectedQuestion] = useState(
    questions[selectedNumber]
  );
  const [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  const propIndex = (answer) => {
    let index;
    if (answer === "optionA") {
      return (index = 1);
    }
    if (answer === "optionB") {
      return (index = 2);
    }
    if (answer === "optionC") {
      return (index = 3);
    }
    if (answer === "optionD") {
      return (index = 4);
    }
    return index;
  };
  const optionArray = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (selectedQuestion.answer === ans) {
        e.target.classList.add("correct");
        setScore(score + 1);
        setLock(!lock);
      } else {
        e.target.classList.add("wrong");
        let propertyIndex = propIndex(selectedQuestion.answer) - 1;
        console.log(propertyIndex);

        optionArray[propertyIndex].current.classList.add("correct");
        setLock(!lock);
      }
    }
  };

  const nextQuestion = () => {
    if (lock) {
      setSelectedNumber(++selectedNumber);
      setSelectedQuestion(questions[selectedNumber]);
      optionArray.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
      setLock(false);
    }
  };

  const handleSubmit = () => {
    if (lock) {
      optionArray.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
      setLock(false);
      gameStateToggle();
    }
  };

  const restartStudy = () => {
    setScore(0);
    gameStateToggle();
    setSelectedNumber(0);
    setSelectedQuestion(questions[0]);
  };

  return (
    <>
      {gameState ? (
        <>
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
                  restartStudy();
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

          <div className="bg-blue-300 mx-auto my-4 md:w-1/2 px-8 py-4 rounded-md">
            <StudyQuestion
              key={selectedQuestion.id}
              {...selectedQuestion}
              selectedNumber={selectedNumber}
              checkAns={checkAns}
              option1={option1}
              option2={option2}
              option3={option3}
              option4={option4}
            />
            <div className="w-full flex">
              <div className="bg-blue-100 rounded px-4 py-2 w-3/4 justify-center mx-auto">
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

export default StudyPage;
