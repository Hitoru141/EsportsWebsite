import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Views/Home";
import ValorantTeam from "./Views/ValorantTeam";
import ContentCreators from "./Views/ContentCreators";
import Errorpage from "./Views/Errorpage";
import Playerpage from "./Views/Playerpage";
import AdminSignIn from "./Views/Admin/Auth/AdminSignIn";
import Admindash from "./Views/Admin/Admindash";
import About from "./Views/About";
import ManageMembers from "./Views/Admin/Teams/TeamComponents/ManageMembers";
import { useRecoilValue } from "recoil";
import Token from "./Recoil/token";
import Community from "./Views/Community";
import AddContentCreators from "./Views/Admin/Teams/TeamComponents/AddContentCreators";
import Careers from "./Views/Careers";

function App() {
  const userToken = useRecoilValue(Token);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/valoteam" element={<ValorantTeam />} />
        <Route path="/contentcreators" element={<ContentCreators />} />
        <Route path="/team/:teamName" element={<Playerpage />} />
        <Route path="/astraadmin787" element={<AdminSignIn />} />

        {userToken && (
          <>
            <Route
              path="/astraadmin787/dashboard"
              element={<Admindash />}
              key="/astraadmin787/dashboard"
            />
            <Route
              path="/astraadmin787/:teamName/manageTeam"
              element={<ManageMembers />}
              key="/astraadmin787/:teamName/manageTeam"
            />
            <Route
              path="/astraadmin787/dashboard/contentcreators"
              element={<AddContentCreators />}
              key="/astraadmin787/dashboard/contentcreators"
            />
          </>
        )}

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
