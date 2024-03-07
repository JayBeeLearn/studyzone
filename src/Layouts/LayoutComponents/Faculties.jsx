import React from "react";
import databank from "../../assets/data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

export default function Faculties({ sidebar, setSidebar }) {
  const { loadFaculty } = useGlobalContext();
  const faculties = [...new Set(databank.map((faculty) => faculty.faculty))];

  return (
    // NAVBAR COMPONENT THAT SHOWS ALL THE FACULTIES IN THE DATABASE
    <div className={`${sidebar ? "block mx-" : "flex"} `}>
      {faculties.map((faculty, i) => {
        return (
          <p key={i} className={`${sidebar && "py-2 mx-16  text-xl"}`}>
            <Link
              key={i}
              className="text-white mr-6"
              to={"/faculty/"}
              onClick={() => {
                loadFaculty(faculty);
                {
                  sidebar && setSidebar((sidebar) => !sidebar);
                }
              }}
            >
              {" "}
              {faculty}{" "}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
