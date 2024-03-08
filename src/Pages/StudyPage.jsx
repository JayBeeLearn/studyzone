import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import StudyQuestion from "../components/StudyQuestion";
import { Link } from "react-router-dom";

function StudyPage() {
  const { examCourse, gameState, gameStateToggle } = useGlobalContext();

  let exams = examCourse[0];

  const { courseTitle, courseCode, faculty, questions } = exams;

  // let [selectedNumber, setSelectedNumber] = useState(0);
  const [studyQuestions, setStudyQuestions] = useState(questions);
  const [numberOfQuestions] = useState(70);
  const [currentNumber, setCurrentNumber] = useState(1);

  const randomNumber = Math.floor(Math.random() * studyQuestions.length);
  const [fbanswer, setFbanswer] = useState("");

  const [selectedQuestion, setSelectedQuestion] = useState(
    studyQuestions[randomNumber]
  );
  const [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);

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
      if (selectedQuestion.type === "MCQ") {
        if (selectedQuestion.answer === ans) {
          e.target.classList.add("correct");
          setScore(score + 1);
          setLock(!lock);
        } else {
          e.target.classList.add("wrong");
          let propertyIndex = propIndex(selectedQuestion.answer) - 1;

          optionArray[propertyIndex].current.classList.add("correct");
          setLock(!lock);
        }
      } else {
        // combines two layer of CONDITION CHECKER - the OR will ONLY WORK is there is ANSWER2
        if (
          selectedQuestion.answer1.toLowerCase() == ans.toLowerCase() ||
          (selectedQuestion.answer2 &&
            selectedQuestion.answer2.toLowerCase() == ans.toLowerCase())
        ) {
          setLock(!lock);
          setDisplayAnswer(true);
          setScore(score + 1);
        } else {
          setDisplayAnswer(true);
          setLock(!lock);
        }
      }
    }
  };

  const freshQuestions = studyQuestions.filter((question, i) => {
    if (i != randomNumber) {
      return question;
    }
  });

  const nextQuestion = () => {
    if (lock) {
      setFbanswer("");
      setCurrentNumber(currentNumber + 1);
      setStudyQuestions(freshQuestions);
      if (selectedQuestion.type === "MCQ") {
        // setSelectedNumber(++selectedNumber);
        setSelectedQuestion(studyQuestions[randomNumber]);
        optionArray.map((option) => {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
          return null;
        });
        setLock(false);
      } else {
        setLock(false);
        // setSelectedNumber(++selectedNumber);
        setSelectedQuestion(studyQuestions[randomNumber]);
        setDisplayAnswer(false);
      }
    }
  };

  const handleSubmit = () => {
    if (lock) {
      if (selectedQuestion.type === "MCQ") {
        optionArray.map((option) => {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
          return null;
        });
        setLock(false);
        gameStateToggle();
      } else {
        setLock(false);
        gameStateToggle();
      }
    }
  };

  const restartStudy = () => {
    setScore(0);
    gameStateToggle();
    // setSelectedNumber(0);
    // setSelectedQuestion(questions[0]);
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
              {questions.length >= 70
                ? numberOfQuestions
                : questions.length}{" "}
              questions
            </h1>

            <div className="w-3/4 mx-auto flex">
              <button
                className="bg-green-100 rounded py-2 w-full font-bold text-green-600 uppercase mx-2"
                onClick={() => {
                  restartStudy();
                  setDisplayAnswer(false);
                  setCurrentNumber(1);

                  setStudyQuestions(questions);
                }}
              >
                Restart
              </button>
              <Link
                to={"/faculty"}
                className="bg-green-100 rounded py-2 w-full font-bold text-center text-green-600 uppercase mx-2"
                onClick={() => {
                  setDisplayAnswer(false);
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
            {/* {lock ? "yes" : "no"} */}
            <StudyQuestion
              key={selectedQuestion.id}
              {...selectedQuestion}
              // selectedNumber={selectedNumber}
              currentNumber={currentNumber}
              checkAns={checkAns}
              option1={option1}
              option2={option2}
              option3={option3}
              option4={option4}
              displayAnswer={displayAnswer}
              lock={lock}
              fbanswer={fbanswer}
              setFbanswer={setFbanswer}
            />
            <div className="w-full flex">
              <div className="bg-blue-100 rounded px-4 py-2 w-3/4 justify-center mx-auto">
                {currentNumber === numberOfQuestions ||
                currentNumber === questions.length ? (
                  <button
                    to={"/faculty/:courseCode/summary"}
                    className="w-full font-bold text-green-600 uppercase"
                    onClick={() => {
                      handleSubmit();
                    }}
                    tabIndex={4}
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
                    tabIndex={3}
                  >
                    {" "}
                    Next{" "}
                  </button>
                )}
              </div>
            </div>

            <p className="py-2">
              Question {currentNumber} of{" "}
              {questions.length >= 70 ? numberOfQuestions : questions.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default StudyPage;
