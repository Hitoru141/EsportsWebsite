import MemberProf from "../../../assets/MemProf.png";
import { BsTwitch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const anchorStyle = {
  textDecoration: "none",
  color: "inherit",
};

const MembersCard = ({ member }) => {
  return (
    <div className="memb_mainwrapper">
      <div className="memb_profile-cont">
        <img src={MemberProf} className="memb_profile-cont" />
      </div>
      <div className="memb_lower-info">
        <p className="mem-p">{member.memberName}</p>
        <p className="mem-p">{member.memberProfileType} </p>
        <p className="mem-p">{member.memberAddress}</p>
        <div className="mem_social-cont">
          <a
            href={member.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsDiscord className="mem_socials-btn" />
          </a>
          <a
            href={member.fbLink}
            target="_blank"
            rel="noopener noreferrer"
            style={anchorStyle}
          >
            <BsFacebook className="mem_socials-btn" />
          </a>
          <a
            href={member.twitchLink}
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
