import React from "react";
import "./top.css";
import Logo from "../assets/logo.png";
import Heart from "../assets/heart.png";
import Shop from "../assets/shop.png";
const Top = () => {
  return (
    <div className="clothes-top">
      <div className="clothes-top-items">
        <img src={Logo} alt="logo"></img>
        <input placeholder="Search"></input>
        <div className="other-buttons">
          <img src={Heart} alt="heart"></img>
          <img src={Shop} alt="shop"></img>
        </div>
      </div>
    </div>
  );
};

export default Top;
