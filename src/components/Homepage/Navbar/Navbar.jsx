import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./transparent_logo.png";
import avatar from "./avatar.jpg";

function Navbar() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className="nav">
      <div className={`nav_container ${show && "nav_black"}`}>
        <img className="nav_logo nav_container_contents" src={logo}></img>
        <img
          className="nav_avatar nav_container_contents"
          src={avatar}
          alt="nav_avatar"
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
