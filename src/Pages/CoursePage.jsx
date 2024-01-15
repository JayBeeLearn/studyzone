import React from "react";
import databank from "../assets/data";
import { AppContext, useGlobalContext } from "../context";
import { Link, Outlet, useLoaderData } from "react-router-dom";

function CoursePage() {
  const { takeExams, course } = useGlobalContext();
  // console.log(course);

  const selectedCourse = course[0];

  const loadedCourses = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl text-center">{selectedCourse.courseTitle} </h2>
      <div className="block">
        <h5>Course Title: {selectedCourse.courseTitle} </h5>
        <h5>Course Code: {selectedCourse.courseCode}</h5>
        <h5>Faculty: {selectedCourse.faculty}</h5>
      </div>

      <div className="flex justify-center">
        <Link
          to={'study'}
          className=" py-2 px-4 bg-blue-600 rounded-sm m-1 text-white"
          onClick={() => {
            takeExams(selectedCourse.id);
          }}
        >
          Study
        </Link>
        <Link
          to={"exams"}
          className=" py-2 px-4 bg-green-600 rounded-sm m-1 text-white"
          onClick={() => {
            takeExams(selectedCourse.id);
          }}
        >
          Take Test
        </Link>
      </div>

      <div className="bg-blue-600">
        <Outlet />
      </div>
    </div>
  );
}

export default CoursePage;
