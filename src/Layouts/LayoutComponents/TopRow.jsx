import React from "react";
import { Link } from "react-router-dom";

function TopRow() {
  return (
    <div className="flex w-100 md:h-20 bg-green-600 p-2 md:px-16 justify-between  items-center ">
      <div className="">
        <Link to={"/"}>
          {" "}
          <h2 className=" text-2xl text-white font-bold sm:text-3xl ">Study Zone </h2>
        </Link>
      </div>

      <div className="search  ">
        <input
          className="rounded-md p-2 w-[7rem] placeholder:text-sm sm:w-fit sm:placeholder:text-xl"
          type="text"
          placeholder="Locate courses"
        />
      </div>
    </div>
  );
}

export default TopRow;
