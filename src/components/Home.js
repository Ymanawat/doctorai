import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

import React, { useState } from "react";

function Home() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="drop-menu">
        <p>Select a disease you want to diagnose</p>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="option1">Select</option>
          <option value="option2">Brain tumor</option>
          <option value="option3">Alzheimer</option>
        </select>
        {selectedOption !== "option1" && (
          <div className="selected-content">
            <div className="imgtag">
              <button className="img-box">
                <FontAwesomeIcon icon={faUpload} />
                Upload images here
              </button>
            </div>
            <button className="btn">Diagnose</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
