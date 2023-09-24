import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import Footer from "../Components/Footer";
import "../Styles/players.css";

import tbanner from "../assets/SOLbanner.jpg";

const Playerpage = () => {
  const memberInfo = [
    {
      memberName: "JANNELA CUNANAN",
      memberProfileType: "PLAYER",
      memberAddress: "MANILA, PHL",
      discordLink: "https://discord.com",
      fbLink: "https://fb.com",
      twitchLink: "https://twitch.com",
    },
    {
      memberName: "JANNELA CUNANAN",
      memberProfileType: "PLAYER",
      memberAddress: "MANILA, PHL",
      discordLink: "https://discord.com",
      fbLink: "https://fb.com",
      twitchLink: "https://twitch.com",
    },
    {
      memberName: "JANNELA CUNANAN",
      memberProfileType: "PLAYER",
      memberAddress: "MANILA, PHL",
      discordLink: "https://discord.com",
      fbLink: "https://fb.com",
      twitchLink: "https://twitch.com",
    },
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
          {memberInfo.map((member, index) => (
            <Playercard key={index} member={member} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Playerpage;
