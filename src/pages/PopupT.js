import React from "react";
import "../App.css";
import Drop from "./Drop";
// import "bootstrap/dist/css/bootstrap.min.css";

function PopupT() {
  const [PopupT, setPopupT] = React.useState(false);

  const handleClick = () => {
    setPopupT(!PopupT);
  };

  return (
    <>
      <button onClick={handleClick} className="btn">
        Add
      </button>
      {PopupT && (
        <div className="one">
          <div className="two" onClick={handleClick}></div>
          <div className="popup">
            <form className="Div">
              <div className="Image">
                <Drop />
              </div>

              <div className="input1">
                <div className="fname">
                  <label>First Name</label>
                  <input
                    className="fname-input"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="email">
                  <label>Email</label>
                  <input
                    className="email-input"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="dob">
                  <label>Date of Birth</label>
                  <input
                    className="dob-input"
                    type="date"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="Uni">
                  <label>University</label>
                  <input
                    className="Uni-input"
                    type="text"
                    placeholder="University"
                  />
                </div>
                <div className="address">
                  <label>Address line 1</label>
                  <input
                    className="add-input"
                    type="text"
                    placeholder="Address line 1"
                  />
                </div>
                <div className="address2">
                  <label>Address line 2</label>
                  <input
                    className="add2-input"
                    type="text"
                    placeholder="Address line 2"
                  />
                </div>
              </div>

              <div className="input2">
                <div className="lname">
                  <label>Last Name</label>
                  <input
                    className="lname-input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="phone">
                  <label>Phone</label>
                  <input
                    className="phone-input"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="pob">
                  <label>Place of birth</label>
                  <input
                    className="pob-input"
                    type="text"
                    placeholder="Place of Birth"
                  />
                </div>
                <div className="degree">
                  <label>Degree</label>
                  <input
                    className="degree-input"
                    type="text"
                    placeholder="Degree"
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

export default PopupT;
