import React, { useState } from "react";
import "../App.css";
import PopupS from "./PopupS";

function Students() {
  const [Popup, setPopup] = useState(false);
  const toggle = () => {
    setPopup(!Popup);
  };
  return (
    <>
      <div className="Add">
        <button className="btn" onClick={toggle}>
          Add Student
        </button>
        <PopupS Popup={Popup} toggle={toggle} />
      </div>
      <div>
        saaljdhfAGFYVGADFLT7
      </div>
    </>
  );
}

export default Students;
