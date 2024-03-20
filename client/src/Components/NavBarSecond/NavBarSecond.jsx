import "./NavBarSecond.scss";
import { BiLogoVk } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { BiLogoXing } from "react-icons/bi";

const Navbar = () => {
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
    <div className="navbar">
      <div className="navContainer">
        <div className="logoDiv2">
          <BiLogoXing className="icon2" />
          <Link to={"/"}>
            <span className="LogoText">BookMe.com</span>
          </Link>
        </div>
        <div className="navItems">
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
              <button className="btnNormal " onClick={handleLogin}>
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
