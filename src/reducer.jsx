import React from "react";
import databank from "./assets/data";

const reducer = (state, action) => {
  if (action.type === "LOAD_FACULTY") {
    let newFaculty = databank.filter((data) => data.faculty === action.payload);
    //   console.log(newFaculty);
    return { ...state, faculty: newFaculty };
  }
  if (action.type === "LOAD_COURSE") {
    let lCourse = databank.filter((data) => data.courseCode === action.payload);

    return { ...state, course: lCourse };
  }
  if (action.type === "TAKE_EXAMS") {
    let x = databank.filter((data) => {
      if (data.id === action.payload) {
        // console.log(data.courseCode);
        return data;
      }
    });
    // console.log(x);
    return { ...state, examCourse: x };
  }

  if (action.type === "TOGGLE_GAME_STATE") {
    let toGameState = state.gameState;
    // console.log(toGameState);
    return { ...state, gameState: !toGameState };
  }
  return state;
};

export default reducer;
