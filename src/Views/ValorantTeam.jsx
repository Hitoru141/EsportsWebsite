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
  return (
    <div className="Vwrapper">
      <Navbar banner={tbanner} />
      <div className="ast-header-cont">
        <p className="team-header"> AST TEAMS</p>
      </div>
      <div className="cardswrapper">
        <div className="l-container">
          <Astrateamcards teamlogo={millen} tname="Millennia" />
          <Link to="/team">
            <Astrateamcards teamlogo={sol} tname="Millennia" />
          </Link>
          <Astrateamcards teamlogo={hlx} tname="Millennia" />
          <Astrateamcards teamlogo={prs} tname="Millennia" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ValorantTeam;
