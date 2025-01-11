import React, { useContext } from "react";
import Home from "./HomePage/Home";
import Courses from "./Courses/Courses";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup";
import { Toaster } from 'react-hot-toast';
import { ThemeContext } from "./context/ThemeContext";



function App() {
 const {authUser, setAuthUser} = useContext(ThemeContext);
 console.log(authUser);
 
  return (
  <>   
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser ? <Courses/>: <Navigate to='/signup'/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
  <Toaster/>
  </>
)
}

export default App;
// https://freetestapi.com/api/v1/books