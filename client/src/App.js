import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignIn from "./Components/SignIn";
import About from "./Components/About";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container" id="inlineStyling">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Signin" element={<SignIn />}></Route>
            <Route exact path="/Login" element={<LogIn />}></Route>
          </Routes>
        </div>
      </Router>
      {/* <LogIn /> */}
    </div>
  );
}

export default App;
