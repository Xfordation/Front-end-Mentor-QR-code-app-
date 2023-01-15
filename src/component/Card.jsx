import React from "react";
import qrCodeIcon from "../assets/image-qr-code.png";
function Card() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={qrCodeIcon} alt="qrCodeImage" className="cardImg" />
        <header className="cardHeader">
          <h2 className="cardHeading">
            Improve your front-end skills by building projects
          </h2>
        </header>
        <div className="cardBody">
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
