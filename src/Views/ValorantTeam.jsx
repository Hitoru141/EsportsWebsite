import { useState, useEffect } from "react";
import Astrateamcards from "../Components/Astrateamcards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/cards.css";
import tbanner from "../assets/Astraeus.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { appSettings } from "../Appdata/appdata";

const ValorantTeam = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${appSettings.teams}`);
        // Delay setting the loading state to false for a minimum of 2 seconds
        setTimeout(() => {
          setTeams(data.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle the error and set loading to false
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Vwrapper">
      <Navbar banner={tbanner} />
      <div className="ast-header-cont">
        <p className="team-header">AST TEAMS</p>
      </div>

      <div className="l-container">
        {loading ? (
          <div className="loaderbg">
            <div className="loader"></div>
          </div>
        ) : (
          teams.map((team) => (
            <div key={team.teamLogoURL}>
              <Link to={`/team/${team.teamName}`} team={{ team }}>
                <Astrateamcards teamlogo={team.teamLogoURL} tname="Millennia" />
              </Link>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ValorantTeam;
