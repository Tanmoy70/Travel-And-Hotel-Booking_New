import "./App.scss";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotel";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
