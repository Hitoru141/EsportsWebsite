import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import Footer from "../Components/Footer";
import "../Styles/players.css";
import { appSettings } from "../Appdata/appdata";
import { useState, useEffect } from "react";
import axios from "axios";

import tbanner from "../assets/SOLbanner.jpg";

const Playerpage = () => {
  const [members, setMembers] = useState("");

  useEffect(() => {
    const group = async () => {
      const data = await axios.get(`${appSettings.member}s`);
      console.log(data.data);
      setMembers(data.data);
    };
    group();
  }, []);

  const memberInfo = [
    {
      memberName: "JANNELA CUNANAN",
      memberProfileType: "PLAYER",
      memberAddress: "MANILA, PHL",
      discordLink: "https://discord.com",
      fbLink: "https://fb.com",
      twitchLink: "https://twitch.com",
    },
  ];

  return (
    <div className="Mainwrapper">
      <Navbar banner={tbanner} />
      <div className="player-wrap">
        <p className="pteam-header"> SOL ESPORTS</p>
        <div className="playercard-wrap">
          <div className="adt_addplayerwrap">
            {memberInfo.map((member, index) => (
              <Playercard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Playerpage;
