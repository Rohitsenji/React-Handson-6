import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="home">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="student">
          <Link to={"/student"}>Student</Link>
        </div>
        <div className="contact">
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;