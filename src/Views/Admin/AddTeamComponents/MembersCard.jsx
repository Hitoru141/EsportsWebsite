import MemberProf from "../../../assets/MemProf.png";
import { BsTwitch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const anchorStyle = {
  textDecoration: "none", // Remove underline
  color: "inherit", // Use the default text color
};

const MembersCard = ({
  memberName,
  memberProfileType,
  memberAddress,
  discordLink,
  fbLink,
  twitchLink,
}) => {
  return (
    <div className="memb_mainwrapper">
      <div className="memb_profile-cont">
        <img src={MemberProf} className="memb_profile-cont" />
      </div>
      <div className="memb_lower-info">
        <p className="mem-p">{memberName}</p>
        <p className="mem-p">{memberProfileType} </p>
        <p className="mem-p">{memberAddress}</p>
        <div className="mem_social-cont">
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsDiscord className="mem_socials-btn" />
          </a>
          <a
            href={fbLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsFacebook className="mem_socials-btn" />
          </a>
          <a
            href={twitchLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsTwitch className="mem_socials-btn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
