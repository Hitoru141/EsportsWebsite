import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import Footer from "../Components/footer";
import "../Styles/players.css";

import tbanner from "../assets/SOLbanner.jpg";

const Playerpage = () => {
  return (
    <div className="Mainwrapper">
      <Navbar banner={tbanner} />
      <div className="player-wrap">
        <p className="pteam-header"> SOL ESPORTS</p>
        <div className="playercard-wrap">
          <Playercard />
          <Playercard />
          <Playercard />
          <Playercard />
          <Playercard />
          <Playercard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Playerpage;
