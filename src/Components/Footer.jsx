import "../Styles/main.css";
import appLogo from "../assets/white star.png";

import { BsTwitch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footerwrapper">
      <div className="astra-logo">
        <img src={appLogo} className="astra-logo" />
      </div>
      <div className="socials-cont">
        <p className="socials-logo">
          <BsFacebook />
        </p>
        <p className="socials-logo">
          <BsTwitter />
        </p>
        <p className="socials-logo">
          <BsInstagram />
        </p>
        <p className="socials-logo">
          <BsDiscord />
        </p>
        <p className="socials-logo">
          <BsTwitch />
        </p>
      </div>
      <p className="footer-p">
        ASTRAEUS ESPORTS 2023 <MdCopyright />
      </p>
    </div>
  );
};

export default Footer;
