import React, { useState } from "react";
import "../App.css";
import PopupT from "./PopupT";
import data from "./teacherDetail.json";

function Teachers() {
  const [Popup, setPopup] = useState(false);
  const toggle = () => {
    setPopup(!Popup);
  };
  const [teacher, setTeacher] = useState(data);
  
  return (
    <>
      <div className="Add">
        <button className="btn" onClick={toggle}>
          Add Teacher
        </button>
        <PopupT Popup={Popup} toggle={toggle} />
      </div>
      
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Teacher ID</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((teacher) => (
              <tr>
                <td>{teacher.name}</td>
                <td>{teacher.teacher_id}</td>
                <td>{teacher.mail_id}</td>
                <td>{teacher.phone_number}</td>
                <td>{teacher.class_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Teachers;
