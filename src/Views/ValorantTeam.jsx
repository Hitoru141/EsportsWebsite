import Astrateamcards from "../Components/Astrateamcards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import "../Styles/cards.css";
import millen from "../assets/millennia.png";
import sol from "../assets/SOL.png";
import hlx from "../assets/helix.png";
import prs from "../assets/polaris.png";
import tbanner from "../assets/Astraeus.jpg";
import { Link } from "react-router-dom";

const ValorantTeam = () => {
  const teamData = [
    { logo: millen, name: "Millennia" },
    { logo: sol, name: "Sol" },
    { logo: hlx, name: "Helix" },
    { logo: prs, name: "Polaris" },
  ];

  return (
    <div className="Vwrapper">
      <Navbar banner={tbanner} />
      <div className="ast-header-cont">
        <p className="team-header"> AST TEAMS</p>
      </div>
      <div className="cardswrapper">
        <div className="l-container">
          {teamData.map((team, index) => (
            <Link key={index} to="/team">
              <Astrateamcards teamlogo={team.logo} tname={team.name} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ValorantTeam;
