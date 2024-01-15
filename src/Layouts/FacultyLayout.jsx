import React from "react";
import { Link } from "react-router-dom";
import databank from "../assets/data";
import { useGlobalContext } from "../context";

function FacultyLayout() {
  const { faculty, loadCourse } = useGlobalContext()
  // console.log(course);
  return (
    <div>
      <h2 className="text-3xl text-center">Welcome to Faculty of {faculty[0].faculty} Web Page</h2>

      <div className="flex ">
        <div className="w-2/3 main">
          {faculty.map((data) => {
            return (
              <li key={data.id}>
                {" "}
                <Link to={data.courseCode} onClick={() => {
                  loadCourse(data.courseCode)
                }}> {data.courseCode} </Link>{" "}
              </li>
            );
          })}
        </div>

        <div className="w-1/3 side">
          <h4> Departments</h4>
          <li>Computer Science</li>
          <li>Info Tech</li>
        </div>
      </div>
    </div>
  );
}

export const courseLoader = () => {
  console.log('hi');
};

export default FacultyLayout;
