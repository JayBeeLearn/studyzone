import React from "react";
import { Link } from "react-router-dom";
import databank from "../assets/data";
import { AppContext, useGlobalContext } from "../context";
import EachCourse from "../components/EachCourse";

function HomePage() {
  const { examCourse, loadFaculty } = useGlobalContext();

  const faculties = [...new Set(databank.map((faculty) => faculty.faculty))];
  // console.log(faculties);

  const lastItem = databank.length - 5;

  return (
    <>
      <div className=" upper">
        <h2 className="text-2xl m:text-3xl font-bold text-center text-blue-400">
          Welcome to Study Zone for NOUNITES
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  ">
          {databank.slice(lastItem, lastItem + 5).map((course) => {
            return <EachCourse key={course.id} {...course} />;
          })}
        </div>

        {/* THE FIRST PROTOTYPE - BEFORE ADDING A NAVBAR FOR THE FACULTIES */}
        {/* <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 ">
          {faculties.map((data, i) => {
            return (
              <p className=" text-xl" key={i}>
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
        </div> */}
        {/* <Link to={"/faculty"}>Faculty of Education</Link>
        <Link to={"/faculty"}>Directorate of General Studies</Link> */}
      </div>

      <div className="news"></div>
    </>
  );
}

export default HomePage;
