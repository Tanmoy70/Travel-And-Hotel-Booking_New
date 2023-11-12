import "./NavBarSecond.scss";
import { BiLogoVk } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logoDiv2">
          <BiLogoVk className="icon2" />
          <Link to={"/"}>
            <span className="LogoText">-Travel</span>
          </Link>
        </div>
        <div className="navItems">
          <button className="signUpBtn btn first">Log In</button>
          <button className="signUpBtn btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
