import "../Styles/players.css";
import samp from "../assets/CEOprof3.jpg";
import { BsTwitter } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Playercard = ({ member }) => {
  const anchorStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  // console.log(member);
  return (
    <div className="img-card">
      <img src={member?.profileImageURL} className="img-card" />
      <div className="hover-content">
        <div className="player-details-wrap">
          <p className="player-name">{member?.IGN}</p>
          <p className="player-address">{member?.name}</p>
          <div className="player-type-box">
            <p className="player-type">{member?.profileType}</p>
          </div>
          <p className="player-address">{member?.address}</p>
        </div>

        <div className="button-container">
          {member?.discord && (
            <a
              href={member.discord}
              target="_blank"
              rel="noopener noreferrer"
              style={anchorStyle}
            >
              <BsDiscord className="socials-btn " />
            </a>
          )}
          {member?.facebook && (
            <a
              href={member?.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={anchorStyle}
            >
              <BsFacebook className="socials-btn " />
            </a>
          )}
          {member?.twitch && (
            <a
              href={member?.twitch}
              target="_blank"
              rel="noopener noreferrer"
              style={anchorStyle}
            >
              <BsTwitch className="socials-btn " />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={anchorStyle}
            >
              <BsTwitter className="socials-btn" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playercard;
