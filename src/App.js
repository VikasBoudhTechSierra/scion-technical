import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact-us" element={<Contact />} exact />
        <Route path="/about-us" element={<About />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
