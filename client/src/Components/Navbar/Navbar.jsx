import React, { useContext, useState } from "react";
import "./Navbar.scss";

//Imported icons

import { BiLogoXing } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assests/Images/bmlogo2.png";

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
  const handleSignUp = () => {
    if (!user) {
      navigate("/signUp");
    }
  };

  return (
    <div className="navBar2">
      <div className="logoDiv">
        <BiLogoXing className="icon2" />
        <span>BookMe.com</span>
      </div>
      <div className={navbar}>
        <ul>
          <li className="navList">
            <a href="#destination" className="LinkLoc">
              Destinations
            </a>
          </li>
          <li className="navList">
            <a href="#portfolio">About Us</a>
          </li>
          <li className="navList">
            <a href="#reviews">Testimonial</a>
          </li>
          <li className="navList">
            <a href="#questions">Questions</a>
          </li>
        </ul>

        {/* Icon to remove Navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      {user ? (
        <div className="userLogin">
          <span style={{ padding: "0 10px 0 0 " }}>{user.username}</span>
          <button className="btnNormal first" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      ) : (
        <div className="NavbarBtn">
          <button className="btnNormal first" onClick={handleLogin}>
            Log In
          </button>
          <button className="btnNormal" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      )}

      {/** Icon to toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
}
