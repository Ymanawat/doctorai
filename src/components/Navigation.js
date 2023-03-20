import React from "react";
import "./Navigation.css";

function Navigation(props) {
  const { currentPage, onClick } = props;
  return (
    <nav className="navigation">
      <div className="logo">DOCTO.AI</div>
      <ul className="nav-links">
        <li
          className={currentPage === "home" ? "active" : ""}
          onClick={() => onClick("home")}
        >
          Home
        </li>
        <li
          className={currentPage === "diagnose" ? "active" : ""}
          onClick={() => onClick("diagnose")}
        >
          Image Analysis
        </li>
        <li
          className={currentPage === "report" ? "active" : ""}
          onClick={() => onClick("report")}
        >
          Symptom Analysis
        </li>
      </ul>
      <div className="sign_up" onClick={() => onClick("sign_up")}>
        <button>SIGN UP</button>
      </div>
    </nav>
  );
}

export default Navigation;
