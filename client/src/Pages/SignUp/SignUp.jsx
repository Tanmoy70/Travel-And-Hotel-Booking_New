import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import axios from "axios";
import video from "../../Assests/Videos/ballon2.mp4";

export default function SignUp() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async () => {
    try {
      const endPoint = "/api/auth/register";
      const payload = {
        username: name,
        email: gmail,
        password,
      };
      const responce = await axios.post(endPoint, payload);
      console.log(responce);
      if (!responce.data) {
        navigator("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SignUpWrapper">
      <video src={video} autoPlay loop muted />
      <div className="wrapper">
        <form>
          <h1>SignUp</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={name}
              id="username"
              className="lInput"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <i className="bx bx-user" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={gmail}
              id="email"
              className="lInput"
              onChange={(e) => {
                setGmail(e.target.value);
              }}
            />
            <i className="bx bx-user" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              id="password"
              className="lInput"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <i className="bx bxs-lock-alt" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="LoginBtn" onClick={handleSubmit}>
            SignUp
          </button>
          <div className="register-link">
            <p>
              You have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
