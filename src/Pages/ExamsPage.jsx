import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context";
import Question from "../components/Question";
import { Link } from "react-router-dom";

function ExamsPage() {
  // GAME STATE VARIABLES FROM THE GAME STATE
  const { examCourse, gameState, gameStateToggle } = useGlobalContext();

  // REMOVE THE FIRST AND ONLY ITEM IN GLOBAL STATE VARIABLE KNOWN AS EXAMCOURSE
  let exams = examCourse[0];

  // DESTRUCTURE the objects of the examcourse
  const { courseTitle, courseCode, faculty, questions } = exams;
  // SETS the QUESTIONS VARIABLE
  const [examQuestions, setExamQuestions] = useState(questions);

  // A RANDOM number that will randomly select a question from the EXAMS QUESTION
  const randomNumber = Math.floor(Math.random() * examQuestions.length);

  // let [selectedNumber, setSelectedNumber] = useState(randomNumber);

  // A FILTER and FUNCTION that only returns FRESH QUESTIONS by NOT REPEATING previously selected questions
  const freshQuestions = examQuestions.filter((question, i) => {
    if (i != randomNumber) {
      return question;
    }
  });

  // the SELECTED question - RANDOMLY
  const [selectedQuestion, setSelectedQuestion] = useState(
    freshQuestions[randomNumber]
  );

  // console.log("random number" + randomNumber);
  // console.log("selected number = " + selectedNumber);

  // A VARIABLE that stores USER'S ANSWERS in FBQ
  const [fbanswer, setFbanswer] = useState("");

  // the CHOOSEN OPTION or ANSWER that will be used to COMPARE to the correct answer
  const [optionChoosen, setOptionChoosen] = useState("");
  // SCORE VARIABLE
  const [score, setScore] = useState(0);

  // Standard number of questions for questions more than 70
  const [numberOfQuestions] = useState(70);

  // THE CURRENT Question Number while taking the test, SERIAL NUMBER
  const [currentNumber, setcurrentNumber] = useState(1);

  // options used to check each question options
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let options = [option1, option2, option3, option4];

  // const totalQuestions = () => {
  //   let totalQ;
  //   if (questions.length >= 70) {
  //     return (totalQ = numberOfQuestions);
  //   } else {
  //     return (totalQ = questions.length);
  //   }

  // };

  // console.log(totalQuestions);

  const nextQuestion = () => {
    setFbanswer("");
    setOptionChoosen("");
    setExamQuestions(freshQuestions);

    // console.log(freshQuestions);

    //
    if (randomNumber === examQuestions.length - 1) {
      // setSelectedNumber(randomNumber);
      setSelectedQuestion(examQuestions[randomNumber]);
      setcurrentNumber(currentNumber + 1);
    } else {
      setcurrentNumber(currentNumber + 1);
      // setSelectedNumber(randomNumber);
      setSelectedQuestion(examQuestions[randomNumber]);
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
        } else {
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
    setFbanswer("");
    setOptionChoosen("");
    if (selectedQuestion.type === "MCQ") {
      if (selectedQuestion.answer === optionChoosen) {
        setScore(score + 1);
      }
    } else {
      if (optionChoosen) {
        if (
          selectedQuestion.answer1.toLowerCase() ==
            optionChoosen.toLowerCase() ||
          selectedQuestion.answer2.toLowerCase() == optionChoosen.toLowerCase()
        ) {
          setScore(score + 1);
        } else {
        }
      }
    }
    // setSelectedNumber(0);
    setSelectedQuestion(examQuestions[0]);
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
              {questions.length >= 70
                ? numberOfQuestions
                : questions.length}{" "}
              questions
            </h1>

            <div className="w-3/4 mx-auto flex">
              <button
                className="bg-green-100 rounded py-2 w-full font-bold text-green-600 uppercase mx-2"
                onClick={() => {
                  gameStateToggle(), setScore(0);
                  setcurrentNumber(1);
                  setExamQuestions(questions);
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
            {fbanswer}
            <Question
              key={selectedQuestion.id}
              {...selectedQuestion}
              // selectedNumber={selectedNumber}
              currentNumber={currentNumber}
              setOptionChoosen={setOptionChoosen}
              option1={option1}
              option2={option2}
              option3={option3}
              option4={option4}
              fbanswer={fbanswer}
              setFbanswer={setFbanswer}
            />
            <div className="w-full flex">
              <div className="bg-green-100 rounded px-4 py-2 w-3/4 justify-center mx-auto">
                {currentNumber === numberOfQuestions ||
                currentNumber === questions.length ? (
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
              Question {currentNumber} of{" "}
              {questions.length >= 70 ? numberOfQuestions : questions.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ExamsPage;
