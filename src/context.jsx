import React, { useContext, useState, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  course: [],
  faculty: [],
  examCourse: [],
  gameState: false,
  queriedCourses: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   dispatch({ type: "LOAD_FACULTY" });
  // }, []);

  const loadFaculty = (clicked) => {
    dispatch({type: 'LOAD_FACULTY', payload: clicked})
  }

  const loadCourse = (clicked) => {
    dispatch({type: 'LOAD_COURSE', payload: clicked})
  }

  const takeExams = (id) => {
    dispatch({ type: "TAKE_EXAMS", payload: id });
  };

  const gameStateToggle = () => {
    dispatch({type: 'TOGGLE_GAME_STATE'})
  }

  const searchQuery = (query)=>{
    dispatch({type: 'SEARCH_QUERY', payload:query})
  }

  return (
    <AppContext.Provider value={{ ...state, takeExams, loadFaculty, loadCourse, gameStateToggle, searchQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
