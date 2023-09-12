import React from "react";
import "./header.css";
import Clothes from "../assets/clothes.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="carousel">
        <img src={Clothes} alt="clothes"></img>
      </div>
    </div>
  );
};

export default Header;
