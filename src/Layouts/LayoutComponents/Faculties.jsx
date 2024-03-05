import React from "react";
import databank from "../../assets/data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

export default function Faculties({ sidebar, setSidebar }) {
  const { loadFaculty } = useGlobalContext();
  const faculties = [...new Set(databank.map((faculty) => faculty.faculty))];

  return (
    <div className={`${sidebar ? "block" : "flex"}`}>
      {faculties.map((faculty, i) => {
        return (
          <p className={`${sidebar && "py-2"}`}>
            <Link
              key={i}
              className="text-white mr-6"
              to={"/faculty/"}
              onClick={() => {
                loadFaculty(faculty);
                {sidebar && setSidebar((sidebar)=>!sidebar)}
              }}
            >
              {" "}
              Faculty of {faculty}{" "}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
