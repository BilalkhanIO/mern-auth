import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUP";
import Profile from "./pages/Profile";
import Header from "./components/header/Header";
const App = () => {
  return (
    <>
    <header>
      <Header/>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUP />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  );
};

export default App;
