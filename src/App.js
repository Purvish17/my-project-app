import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyNavbar from "./components/MyNavbar";
import Price from "./components/Price";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      {" "}
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
