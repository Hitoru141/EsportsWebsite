import { useState } from "react";
import "../../Styles/cards.css";

const AdTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamData, setTeamData] = useState([]); // Step 1: Team data state

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTeam = () => {
    const teamNameInput = document.querySelector(".adtinput");
    if (teamNameInput.value && imagePreview) {
      const newTeam = {
        name: teamNameInput.value,
        logo: imagePreview,
      };
      setTeamData([...teamData, newTeam]); // Update team data state
      closeModal(); // Close the modal
    }
  };

  return (
    <div className="adcarousel-wrap">
      <div className="adtbutton" onClick={toggleModal}>
        <span className="adtbutton__text">New Team</span>
        <span className="adtbutton__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </div>
      {isModalOpen && (
        <div className="adtmodal-overlay">
          <div className="adtmodal">
            <div className="adtX" onClick={closeModal}>
              &times;
            </div>
            <h2 className="adt-h2">Create Team</h2>
            <input
              placeholder="Team Name"
              type="text"
              required=""
              className="adtinput"
            />
            <div className="adt-img">
              {imagePreview ? (
                <>
                  <button className="add-button">
                    <label htmlFor="imageInput">Reupload Team Logo</label>
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </button>
                  <div className="image-preview">
                    <img
                      src={imagePreview}
                      alt="Uploaded Team Logo"
                      className="adtimg"
                    />
                  </div>
                </>
              ) : (
                <button className="add-button">
                  <label htmlFor="imageInput">Upload Team Logo</label>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </button>
              )}
            </div>
          </div>
          <div className="adtsavebtn" onClick={handleAddTeam}>
            Add
          </div>{" "}
          {/* Step 2: Handle Add Team */}
        </div>
      )}
      <div className="adteamcard_wrap">
        {/* Step 3: Render Team Cards */}
        {teamData.map((team, index) => (
          <div key={index} className="adteam_card">
            <img
              src={team.logo}
              className="adteam_card"
              alt={`${team.name} Logo`}
            />
            <p className="adteam_name">{team.name}</p>
            <button className="adteamcard_delbtn">Delete</button>
            <button className="adteamcard_updtbtn">Update</button>
            <button className="adteamcard_playerbtn">Add Players</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdTeam;
