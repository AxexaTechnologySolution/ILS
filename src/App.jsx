import "./App.css";
import WhyILS from "./components/WhyILS";
import Career from "./components/Career";
import People from "./components/People";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manufacturing from "./pages/Manufacturing";
import SupplyChainAndDistribution from "./pages/SupplyChainAndDistribution";
import Footer from "./Footer";
import ProductDevelopement from "./pages/ProductDevelopement";
import Healthcare from "./pages/Healthcare";
import Education from "./pages/Education";
import PublicEquity from "./pages/Public-equity";
import LeanSystem from "./pages/LeanSystem";
import LeanLeader from "./pages/LeanLeader";
import SkillDevelopment from "./pages/SkillDevelopment";
import Assessment from "./pages/Assessment";
import ExecutiveEducation from "./pages/ExecutiveEducation";
import StrategicPlanning from "./pages/StrategicPlanning";
import Books from "./pages/Books";
import LiftActivity from "./pages/LiftActivity";
import ExecutiveLeadership from "./pages/ExecutiveLeadership";
import Cost from "./pages/Cost";

function App() {
  return (
    <div className="overflow-x-hidden">
     <div className="mb-14">
     <NavBar />
     </div>
      {/* <Cards /> */}
      <BrowserRouter>
        <Routes>
          {/* About */}
          <Route path="/" element={<Home />} />
          {/* About */}
          <Route path="/why-ils" element={<WhyILS />} />
          <Route path="/people" element={<People />} />
          <Route path="/career" element={<Career />} />
          {/* Client */}
          <Route
            path="/product-development"
            element={<ProductDevelopement />}
          />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route
            path="/suplychain-distribution"
            element={<SupplyChainAndDistribution />}
          />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/education" element={<Education />} />
          {/* public-equity */}
          <Route path="/private-equity" element={<PublicEquity />} />
          {/* Education and trainig */}
          <Route path="/executive-education" element={<ExecutiveEducation/>} />
          <Route path="/lean-system-certification" element={<LeanSystem />} />
          <Route path="/lean-leader-certification" element={<LeanLeader />} />
          <Route path="/skill-development-workshops" element={<SkillDevelopment />} />
          {/* Cost containment */}
          <Route path="/cost" element={<Cost />} />

          {/* Our publication */}
          <Route path="/Books" element={<Books />} />
          {/* other services */}
          <Route path="/assessments" element={<Assessment />} />
          <Route path="/strategicplanning" element={<StrategicPlanning />} />
          <Route path="/lift-activity" element={<LiftActivity />} />
          <Route path="/executive&leadership-coaching" element={<ExecutiveLeadership/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
