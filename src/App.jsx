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
import ManageMembers from "./Views/Admin/AddTeamComponents/ManageMembers";

const userToken = sessionStorage.getItem("userToken");
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/valoteam" element={<ValorantTeam />} />
        <Route path="/contentcreators" element={<ContentCreators />} />
        <Route path="/team" element={<Playerpage />} />
        <Route path="/astraadmin787" element={<AdminSignIn />} />

        {userToken ? (
          <>
            <Route path="/astraadmin787/dashboard" element={<Admindash />} />
            <Route
              path="/astraadmin787/:teamName/manageTeam"
              element={<ManageMembers />}
            />
          </>
        ) : (
          <Route path="/astraadmin787" element={<AdminSignIn />} />
        )}

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
