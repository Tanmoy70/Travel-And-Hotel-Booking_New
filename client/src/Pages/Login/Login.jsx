import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/context/AuthContext";
import video from "../../Assests/Videos/ballon2.mp4";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="LoginWrapper">
      <video src={video} autoPlay loop muted />
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            <i className="bx bx-user" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
            <i className="bx bxs-lock-alt" />
          </div>
          <div className="remember-forgot">
            <label htmlFor="">
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="LoginBtn" disabled={loading} onClick={handleClick}>
            Login
          </button>
          {error && <span className="ErrorMassege">{error.message}</span>}
          <div className="register-link">
            <p>
              Don't have an account <a href="/signup">SignUp </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
