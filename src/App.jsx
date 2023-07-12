import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Views/Home";
import ValorantTeam from "./Views/ValorantTeam";
import ContentCreators from "./Views/ContentCreators";
import Errorpage from "./Views/Errorpage";
import Playerpage from "./Views/Playerpage";
import AdminSignIn from "./Views/AdminSignIn";
import Admindash from "./Views/Admindash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valoteam" element={<ValorantTeam />} />
        <Route path="/contentcreators" element={<ContentCreators />} />
        <Route path="/team" element={<Playerpage />} />
        <Route path="/astraadmin787" element={<AdminSignIn />} />
        <Route path="/astraadmin787/dashboard" element={<Admindash />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
