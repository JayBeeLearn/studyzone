import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import Faculties from "./Faculties";
import { document } from "postcss";
import { useGlobalContext } from "../../context";

function TopRow() {
  const { searchQuery, queriedCourses, loadCourse } = useGlobalContext();
  const [sidebar, setSidebar] = useState(false);
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    e.preventDefault();
  };

  let courses = queriedCourses.map((course) => {
    return course;
  });

  return (
    <>
      <div className="flex w-100 h-[4rem] bg-green-600 p-2 md:px-16 justify-between  items-center ">
        <div className=" w-4/12">
          <Link to={"/"}>
            {" "}
            <h2 className=" text-2xl text-white font-bold tex sm:text-3xl ">
              Study Zone{" "}
            </h2>
          </Link>
        </div>

        {/* SEARCH BOX ON TOP ROW  */}
        <div className="flex justify-items-center items-center mr-4">
          <div className="mx-2 search   ">
            <div className="flex bg-white rounded justify-between items-center px-2">
              <input
                className="rounded-md outline-none p-2 w-[7rem]  placeholder:text-sm sm:w-fit  sm:placeholder:text-xl"
                type="text"
                placeholder="Locate courses"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value), searchQuery(query);
                }}
              />

              <button type="submit" className="text-green-600">
                <FaSearch />
              </button>
            </div>
          </div>

          <div className=" w-1/12 nav-bar sm:hidden">
            {
              <FaBars
                className="text-white text-3xl m-2"
                onClick={() => {
                  // const side = document.getElementById("sidebar");
                  // console.log(sidebar);
                  // side.classList.toggle("showSidebar");

                  setSidebar((sidebar) => !sidebar);
                  // alert('hi')
                }}
              />
            }
          </div>
        </div>
      </div>

      {/* NAVBAR CONTENTS ON LARGE SCREENS  */}
      <div className="hidden sm:flex bg-green-500 h-8 px-4">
        <Faculties />
      </div>

      {/* NAVBAR CONTENTS ON SIDEBAR FOR SMALL SCREENS  */}
      <div className="flex justify-end sm:hidden">
        <div
          id="sidebar"
          className={`absolute ${
            sidebar ? " top-16 left-0  bg-green-500" : " top-0 -left-[580px] "
          } transit h-[80%] w-9/12 text-red-500  transition-all block`}
        >
          <Faculties sidebar={sidebar} setSidebar={setSidebar} />
        </div>
      </div>

      {/* SEARCH RESULTS  */}
      {query && (
        <div className="absolute w-1/2 top-16 flex justify-center ">
          <div className="bg-green-600  p-4">
            <h2 className="text-2xl text-center font-bold text-white">
              Query Results
            </h2>
            {queriedCourses.length >= 1 ? (
              courses.map((course) => {
                return (
                  <Link
                    to={`/faculty/${course.courseCode}`}
                    onClick={() => {
                      loadCourse(course.courseCode);
                      setQuery("");
                    }}
                  >
                    <li className="text-white list-none">
                      {course.courseCode} {course.courseTitle}
                    </li>
                  </Link>
                );
              })
            ) : (
              <p className="text-white my-2">Not found. Try another term or limit the search term</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TopRow;
