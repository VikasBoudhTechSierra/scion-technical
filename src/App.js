import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";
import BlogInsight from "./Pages/About/BlogInsights/BlogInsight";
import OurClinets from "./Pages/About/OurClient/OurClinets";
import OurMissionValue from "./Pages/About/OurMission&Value/OurMissionValue";
import WhyDiversity from "./Pages/About/WhyDiversity/WhyDiversity";
import WhyWeTech from "./Pages/About/WhyWeTech/WhyWeTech";
import IT from "./Pages/About/IT/IT";
import ITSecurity from "./Pages/About/ITSecurity/ITSecurity";
import StartUp from "./Pages/TemporaryStaffing/StartUp/StartUp";
import Ai from "./Pages/TemporaryStaffing/Aitest/Ai";
import HowToApply from "./Pages/Apply/HowToApply/HowToApply";
import ItJobsInterview from "./Pages/Apply/ITJobsInterviewTips/ItJobsInterview";
import SearchItJobs from "./Pages/Apply/Search_IT_Jobs/SearchItJobs";
import PositionWeRecurit from "./Pages/Apply/PositionWeRecurit/PositionWeRecurit";
import ApplyWithUs from "./Pages/Apply/ApplyWithUs/ApplyWithUs";
import Hire from "./Pages/Hire/Hire";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact-us" element={<Contact />} exact />
        <Route path="/hire" element={<Hire />} exact />
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
        <Route path="/temporary-staffing/it" element={<IT />} exact />
        <Route
          path="/temporary-staffing/it-security"
          element={<ITSecurity />}
          exact
        />
        <Route
          path="/temporary-staffing/start-up"
          element={<StartUp />}
          exact
        />
        <Route path="/temporary-staffing/ai" element={<Ai />} exact />
        <Route path="/apply/apply-with-us" element={<ApplyWithUs />} exact />
        <Route path="/apply/how-to-apply" element={<HowToApply />} exact />
        <Route path="/apply/it-jobs" element={<ItJobsInterview />} exact />
        <Route path="/apply/search-it-jobs" element={<SearchItJobs />} exact />
        <Route
          path="/apply/position-we-recurit"
          element={<PositionWeRecurit />}
          exact
        />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
