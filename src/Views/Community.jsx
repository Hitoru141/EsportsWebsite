import { useState } from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import tbanner from "../assets/Astraeus.jpg";
import weekly from "../assets/weekly.jpg";
import discord from "../assets/discord.jpg";
import fb from "../assets/bf.jpeg";
import x from "../assets/tweet.png";
import WeeklyModal from "../Components/WeeklyModal";

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="glbwrapper">
      <Navbar banner={tbanner} />
      <div className="community-upper-wrap">
        <div className="community-container">
          <h1 className="h1-weekly">Click below to join our weekly events</h1>
          <div className="arrow bounce">
            <div className="arrow" />
          </div>
          <div className="weekly-cards" onClick={toggleModal}>
            <img src={weekly} className="weekly-img" />
          </div>
          {isModalOpen && <WeeklyModal closeModal={closeModal} />}

          <h1 className="h1-weekly">Visit our socials</h1>
          <a
            href="https://discord.gg/Emx692ed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-cards">
              <img src={discord} className="weekly-img" />
            </div>
          </a>
          <a
            href="https://www.facebook.com/Astraeussesports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-cards">
              <img src={fb} className="weekly-img" />
            </div>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-cards">
              <img src={x} className="weekly-img" />
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
