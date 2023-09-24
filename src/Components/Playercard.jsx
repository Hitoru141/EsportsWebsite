import "../Styles/players.css";
import samp from "../assets/CEOprof3.jpg";
import { BsTwitch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Playercard = ({ member }) => {
  const anchorStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div className="img-card">
      <img src={samp} className="img-card" />
      <div className="hover-content">
        <p className="player-name">{member.memberName}</p>
        <div className="player-type-box">
          <p className="player-type">{member.memberProfileType}</p>
        </div>
        <p className="player-type">{member.memberAddress}</p>

        <div className="button-container">
          <a
            href={member.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsDiscord className="socials-btn " />
          </a>
          <a
            href={member.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsFacebook className="socials-btn " />
          </a>
          <a
            href={member.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsTwitch className="socials-btn " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Playercard;
