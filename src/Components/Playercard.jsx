import "../Styles/players.css";
import samp from "../assets/CEOprof3.jpg";
import { BsTwitch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Playercard = () => {
  return (
    <div className="img-card">
      <img src={samp} className="img-card-prof" />
      <div className="hover-content">
        <div className="text-container">
          <p className="player-name">HITORU</p>
          <div className="player-type-box">
            <p className="player-type">PLAYER</p>
          </div>

          <p className="player-type">CEBU, PHL</p>
        </div>

        <div className="button-container">
          <BsDiscord className="socials-btn" />
          <BsFacebook className="socials-btn" />
          <BsTwitch className="socials-btn" />
        </div>
      </div>
    </div>
  );
};

export default Playercard;
