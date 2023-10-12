import { useState, useEffect } from "react";
import Astrateamcards from "../Components/Astrateamcards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import "../Styles/cards.css";
import tbanner from "../assets/Astraeus.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { appSettings } from "../Appdata/appdata";

const ValorantTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const group = async () => {
      const data = await axios.get(`${appSettings.teams}`);
      setTeams(data.data);
    };
    group();
  }, []);

  return (
    <div className="Vwrapper">
      <Navbar banner={tbanner} />
      <div className="ast-header-cont">
        <p className="team-header"> AST TEAMS</p>
      </div>
      <div className="l-container">
        {/* FOR MAP */}
        {teams.map((team) => (
          <div key={team.teamLogoURL}>
            <Link to={`/team/${team.teamName}`} team={{ team }}>
              <Astrateamcards teamlogo={team.teamLogoURL} tname="Millennia" />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default ValorantTeam;
