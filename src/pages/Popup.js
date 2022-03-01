import React from "react";
import "../App.css";

function Popup() {
  const [Popup, setPopup] = React.useState(false);

  const handleClick = () => {
    setPopup(!Popup);
  }

  return (
    <>
      <button onClick={handleClick} className="btn">Show Popup</button>
      {Popup && (
        <div className="one">
          <div className="two" onClick={handleClick}></div>
          <div className="popup">
            <form className="Input">
              <div className="image">
                <input className="image-input" type="file" name="Image" />
              </div>
              <div className="fname">
                <label>First Name</label>
                <input className="fname-input" type="text" placeholder="First Name" />
              </div>

              <div className="lname">
                <label>Last Name</label>
                <input className="lname-input" type="text" placeholder="Last Name" />
              </div>

              <div className="email">
                <label>Email</label>
                <input className="email-input" type="text" placeholder="Email" />
              </div>

              <div className="phone">
                <label>Phone</label>
                <input className="phone-input" type="text" placeholder="Phone" />
              </div>

              <div className="dob">
                <label>Date of Birth</label>
                <input className="dob-input" type="date" placeholder="Date of Birth" />
              </div>

              <div className="pob">
                <label>Place of birth</label>
                <input className="pob-input" type="text" placeholder="Place of birth" />
              </div>

              <div className="Uni">
                <label>University</label>
                <input className="Uni-input" type="text" placeholder="University" />
              </div>

              <div className="degree">
                <label>Degree</label>
                <input className="degree-input" type="text" placeholder="Degree" />
              </div>

              <div className="address">
                <label>Address</label>
                <input className="add-input" type="text" placeholder="Address" />
              </div>
              <input className="submit1" type="submit"></input>
            </form>
            <button onClick={handleClick} className="close">Close</button>
          </div>
        </div>)}
    </>
  );
}

export default Popup;
