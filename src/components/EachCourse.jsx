import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function EachCourse({ id, courseCode, courseTitle, faculty, questions }) {
  const { takeExams, loadCourse, loadFaculty } = useGlobalContext();
  return (
    <div className="border rounded m-2 p-4 flex flex-col">
      <div className="h-[75%]">
        <p className="text-lg font-bold text-center">{courseCode}</p>
        <Link
          to={`/faculty/${courseCode}`}
          onClick={() => loadCourse(courseCode)}
          className="text-center font-bold text-lg"
        >
          {courseTitle}
        </Link>
        <p>
          <small className="">Faculty of {faculty}</small>
        </p>
      </div>

      <div className="h-[25%] flex justify-between mx-2  my-2">
        <Link
          to={`/faculty/${courseCode}/study`}
          className="bg-blue-500 rounded py-1 px-4 text-white"
          onClick={() => takeExams(id)}
        >
          Study
        </Link>
        <Link
          to={`/faculty/${courseCode}/exams`}
          className="bg-green-500 rounded py-1 px-4 text-white"
          onClick={() => {
            takeExams(id);
            loadFaculty(faculty);
          }}
        >
          Test
        </Link>
      </div>
    </div>
  );
}

export default EachCourse;
