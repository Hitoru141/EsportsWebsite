import React from "react";

const SponsorCards = ({ logo, name }) => {
  return (
    <div className="sponsor_container">
      <img className="sponsor_logo" src={logo} />
      <p className="profile-name">{name}</p>
    </div>
  );
};

export default SponsorCards;
