import React from "react";
import "./header.css";

const Header = () => {
  const gitHome = () => {
    window.location = "/";
  };
  const gitKarakter = () => {
    window.location = "/character";
  };
  return (
    <div className="header">
      <div className="img"></div>
      <div className="spans">
        <span onClick={gitHome}>Bölümler</span>
        <span onClick={gitKarakter}>Karakterler</span>
        <span>Mekanlar</span>
      </div>
    </div>
  );
};

export default Header;
