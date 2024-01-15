import React from "react";
import { Link } from "react-router-dom";
import databank from "../assets/data";
import { AppContext, useGlobalContext } from "../context";

function HomePage() {
  const { examCourse, faculty, loadFaculty } = useGlobalContext();

  const faculties = [...new Set(databank.map((faculty) => faculty.faculty))];
  // console.log(faculties);

  return (
    <>
      <div className=" upper">
        <h2 className="text-2xl m:text-3xl font-bold text-center text-blue-400">
          Welcome to Study Zone for NOUNITES
        </h2>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 ">
          {faculties.map((data, i) => {
            return (
              <p className=" text-xl">
                {" "}
                <Link
                  key={i}
                  to={`/faculty/`}
                  className=""
                  onClick={() => {
                    loadFaculty(data);
                  }}
                >
                  {" "}
                  Faculty of {data}
                </Link>
              </p>
            );
          })}
        </div>
        {/* <Link to={"/faculty"}>Faculty of Education</Link>
        <Link to={"/faculty"}>Directorate of General Studies</Link> */}
      </div>

      <div className="news"></div>
    </>
  );
}

export default HomePage;
