import React from "react";
import './DiagnoseBody.css'
import fullbody from "../images/FullBody.png";
import head from "../images/head.png";
import lungs from "../images/lungs.png";

function DiagnoseBody() {
  return (
    <div className="diagnoseBody">
      <div className="body-image">
        <div className="full-body">
          <img src={fullbody} alt="full-body"></img>
        </div>
        <div className="head">
          <img src={head} alt="head"></img>
        </div>
        <div className="lungs">
          <img src={lungs} alt="lungs"></img>
        </div>
      </div>
    </div>
  );
}

export default DiagnoseBody;
