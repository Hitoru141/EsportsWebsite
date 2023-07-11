import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import Footer from "../Components/footer";
import "../Styles/players.css";

import tbanner from "../assets/SOLbanner.jpg";
// import Footer from "../Components/Footer";

const Playerpage = () => {
  return (
    <div className="Mainwrapper">
      <Navbar banner={tbanner} />
      <div
        className="player-wrap"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.629), rgba(0, 0, 0, 0.213)), url(${banner})`,
        // }}
      >
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
