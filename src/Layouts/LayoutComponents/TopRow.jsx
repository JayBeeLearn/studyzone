import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Faculties from "./Faculties";
import { document } from "postcss";

function TopRow() {
  const [sidebar, setSidebar] = useState(false);
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

        <div className="flex justify-items-center items-center mr-4">
          <div className="mx-2 search   ">
            <input
              className="rounded-md p-2 w-[7rem]  placeholder:text-sm sm:w-fit  sm:placeholder:text-xl"
              type="text"
              placeholder="Locate courses"
            />
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

      <div className="hidden sm:flex bg-green-500 h-8 px-4">
        <Faculties />
      </div>

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
    </>
  );
}

export default TopRow;
