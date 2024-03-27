import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";
import BlogInsight from "./Pages/About/BlogInsights/BlogInsight";
import OurClinets from "./Pages/About/OurClient/OurClinets";
import OurMissionValue from "./Pages/About/OurMission&Value/OurMissionValue";
import WhyDiversity from "./Pages/About/WhyDiversity/WhyDiversity";
import WhyWeTech from "./Pages/About/WhyWeTech/WhyWeTech";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact-us" element={<Contact />} exact />
        <Route path="/about-us/blog-insight" element={<BlogInsight />} exact />
        <Route path="/about-us/our-clients" element={<OurClinets />} exact />
        <Route
          path="/about-us/our-mission-value"
          element={<OurMissionValue />}
          exact
        />
        <Route
          path="/about-us/why-diversity"
          element={<WhyDiversity />}
          exact
        />
        <Route path="/about-us/why-tech" element={<WhyWeTech />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
