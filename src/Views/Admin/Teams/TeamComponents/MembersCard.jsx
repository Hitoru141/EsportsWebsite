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
        <img src={member.profileImageURL} className="memb_profile-cont" />
        <button className="update-button">Update</button>
        <button className="delete-button">Delete</button>
      </div>
      <div className="memb_lower-info">
        <p className="mem-p">{member.name}</p>
        <p className="mem-p">{member.profileType} </p>
        <p className="mem-p">{member.address}</p>
        <div className="mem_social-cont">
          {member.discord && (
            <a
              href={member.discord}
              target="_blank"
              rel="noopener noreferrer"
              style={anchorStyle}
            >
              <BsDiscord className="mem_socials-btn" />
            </a>
          )}
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={anchorStyle}
            >
              <BsFacebook className="mem_socials-btn" />
            </a>
          )}
          {member.twitch && (
            <a
              href={member.twitch}
              target="_blank"
              rel="noopener noreferrer"
              style={anchorStyle}
            >
              <BsTwitch className="mem_socials-btn" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
