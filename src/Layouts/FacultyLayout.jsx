import React from "react";
import { Link } from "react-router-dom";
import databank from "../assets/data";
import { useGlobalContext } from "../context";
import EachCourse from "../components/EachCourse";

function FacultyLayout() {
  const { faculty, loadCourse } = useGlobalContext();
  const facultyName = faculty[0].faculty;
  // console.log(course);
  return (
    <div>
      <h2 className="text-3xl text-center">
        Welcome to Faculty {facultyName} of Web Page
      </h2>

      <div className="flex mt-4">
        <div className="w-[65%] main pr-4 ">
          {faculty.map((data) => {
            return (
              <Link
                key={data.id}
                to={data.courseCode}
                onClick={() => {
                  loadCourse(data.courseCode);
                }}
              >
                <li className="list-none border rounded py-2 px-4 text-xl">
                  {data.courseCode}
                </li>
              </Link>
            );
          })}
        </div>

        <div className="w-[35%] side px-4">
          <h4 className="text-center font-bold">
            {" "}
            Departments
          </h4>
          <Link>
            <li className="list-none">Computer Science</li>
          </Link>
          <Link>
            <li className="list-none">Info Tech</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const courseLoader = () => {
  console.log("hi");
};

export default FacultyLayout;
