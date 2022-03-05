import React from "react";
import "../App.css";
import Drop from "./Drop";
// import "bootstrap/dist/css/bootstrap.min.css";

function PopupS(props) {
  return (
    <>
      {props.Popup && (
        <div className="one">
          <div className="two" onClick={props.toggle} />
          <div className="popup">
            <form className="DivS">
              <div className="Image">
                <Drop />
              </div>
              <div className="input2">
                <div className="fname">
                  <label>First Name</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="First Name"
                  />
                </div>
                <div className="class">
                  <div className="class1">
                    <label>Class</label>
                    <input
                      className="fieldc-input"
                      type="text"
                      required="required"
                      placeholder="Class"
                    />
                  </div>
                  <div className="div">
                    <label>Division</label>
                    <input
                      className="fieldd-input"
                      type="text"
                      required="required"
                      placeholder="Division"
                    />
                  </div>
                </div>
                <div className="email">
                  <label>Email</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Email"
                  />
                </div>
                <div className="phone">
                  <label>Phone</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Phone"
                  />
                </div>
                <div className="address">
                  <label>Address</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="input3">
                <div className="mname">
                  <label>Middle Name</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Middle Name"
                  />
                </div>
                <div className="dob">
                  <label>Date of Birth</label>
                  <input
                    className="field-input"
                    type="date"
                    required="required"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="pemail">
                  <label>Parent Email</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Parent Email"
                  />
                </div>
                <div className="pphone">
                  <label>Parent Phone</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Parent Phone"
                  />
                </div>
              </div>
              <div className="input4">
                <div className="lname">
                  <label>Last Name</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Last Name"
                  />
                </div>
                <div className="pob">
                  <label>Place of Birth</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Place of Birth"
                  />
                </div>
                <div className="pemail">
                  <label>Alt Parent Email</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Alt Parent Email"
                  />
                </div>
                <div className="pphone">
                  <label>Alt Parent Phone</label>
                  <input
                    className="field-input"
                    type="text"
                    required="required"
                    placeholder="Alt Parent Phone"
                  />
                </div>
              </div>

              <input className="submit1" type="submit"></input>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupS;
