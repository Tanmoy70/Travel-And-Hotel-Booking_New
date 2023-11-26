import React, { useContext, useState } from "react";
import "./Navbar.scss";

//Imported icons

import { BiLogoVk } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// import { BiLogoKickstarter } from "react-icons/bi";

export default function Navbar() {
  //State to track an update navbar

  const [navbar, setNavBar] = useState("menu");

  //Function to show navBar

  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  //Function to remove navbar

  const removeNavBar = () => {
    setNavBar("menu");
  };

  const navigate = useNavigate();

  const { user, error, dispatch } = useContext(AuthContext);

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleLogin = () => {
    if (!user) {
      navigate("/login");
    }
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoVk className="icon2" />
        <span>-Travel</span>
      </div>
      <div className={navbar}>
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>

        {/* Icon to remove Navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      {user ? (
        <div className="userLogin">
          <span style={{ padding: "0 10px 0 0 " }}>{user.username}</span>
          <button className="btn first" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      ) : (
        <div className="NavbarBtn">
          <button className="btn first" onClick={handleLogin}>
            Log In
          </button>
          <button className="btn" onClick={handleLogin}>
            Sign up
          </button>
        </div>
      )}

      {/** Icon to toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
}
