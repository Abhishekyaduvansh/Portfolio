import React from 'react';

import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";

import Projects from "./components/Projects";
// import Projects from "./components/Projects";
// import {BrowserRouter, Routes,Route} from "react-router-dom";

import './Style/Styles.css'
import Contact from "./components/Contact";




function App() {
  
  return (
  <>
 
        <Navbar></Navbar>
         <Home/>
         <About/>
         <Projects/>
         <Contact/>
         <Footer/>
       
   
  
  
  
  

  </>
  );
}

export default App;
