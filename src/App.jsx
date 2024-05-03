import React, { useState } from 'react'; // Import useState for potential future use
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AdminHome from './components/AdminSide/AdminHome/AdminHome';
import MovieAdd from './components/AdminSide/MovieAdd/MovieAdd'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useFormik } from 'formik';
import './App.css';


function App() {
  // useFormik()
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Catch-all route for unmatched paths (optional) */}
        <Route path="*" element={<Home />} />
         {/* Redirect to Home or render a custom "Not Found" page */}

         <Route path='/adminhome' element={<AdminHome />} />
         <Route path='/addmovie' element={<MovieAdd/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
