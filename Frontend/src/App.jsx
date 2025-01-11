import React from "react";
import Home from "./HomePage/Home";
import Courses from "./Courses/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup";
import { Toaster } from 'react-hot-toast';



function App() {
  return (
  <>   
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
  <Toaster/>
  </>
)
}

export default App;
// https://freetestapi.com/api/v1/books