import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignIn from "./Components/SignIn";
import About from "./Components/About";
import Home from "./Components/Home";
import "./App.css";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";

function App() {
  return (
    <Stack gap={4}>
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Signin" element={<SignIn />}></Route>
            <Route exact path="/Login" element={<LogIn />}></Route>
          </Routes>
        </Container>
      </Router>
    </Stack>
  );
}

export default App;
