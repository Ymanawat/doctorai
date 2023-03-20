import React, { useState } from "react";
import "./App.css";
// import results from './components/results';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Diagnose from "./components/DiagnoseHome";
import DiagnoseBody from "./components/DiagnoseBody";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      <Navigation currentPage={currentPage} onClick={handleNavigationClick} />
      <div className="page-container">
        {currentPage === "home" ? <Home /> : null}
        {currentPage === "diagnose" ? <DiagnoseBody /> : null}
        {currentPage === "report" ? <Diagnose /> : null}
        {currentPage === "sign_up" ? <SignUp /> : null}
        {currentPage === "login" ? <Login /> : null}
      </div>
    </div>
  );
}

export default App;
