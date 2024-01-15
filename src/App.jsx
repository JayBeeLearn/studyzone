import { useState } from "react";
// import "./App.css";
import MasterLayout from "./Layouts/MasterLayout";
import {
  Link,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FacultyLayout, { courseLoader } from "./Layouts/FacultyLayout";
import HomePage from "./Pages/HomePage";
import CoursePage from "./Pages/CoursePage";
import ExamsPage from "./Pages/ExamsPage";
import StudyPage from "./Pages/StudyPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/faculty" element={<FacultyLayout />}></Route>{" "}
      <Route path="/faculty/:courseCode" element={<CoursePage />}></Route>
      <Route path="/faculty/:courseCode/exams" element={<ExamsPage />} />
      <Route path="/faculty/:courseCode/study" element={<StudyPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
