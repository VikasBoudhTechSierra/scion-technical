import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/" element={<Contact />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
