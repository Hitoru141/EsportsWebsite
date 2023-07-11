import "../Styles/players.css";

import { BsTwitch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
// import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Playercard = () => {
  return (
    <div className="img-card">
      <div className="hover-content">
        <div className="text-container">
          <p>HITORU</p>
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
