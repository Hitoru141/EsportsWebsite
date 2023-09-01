import { useState } from "react";
import "../../Styles/cards.css";

const AdTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamData, setTeamData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [manageMembersModal, setManageMembersModal] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setManageMembersModal(!manageMembersModal);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateModalStates(false);
    setManageMembersModal(false);
  };

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
      setTeamData([...teamData, newTeam]);
      closeModal();
    }
  };

  const handleDeleteTeam = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team?"
    );
    if (confirmDelete) {
      const updatedTeamData = teamData.filter((team, i) => i !== index);
      setTeamData(updatedTeamData);
    }
  };

  const [updateModalStates, setUpdateModalStates] = useState({});

  const toggleUpdateModal = (index) => {
    setUpdateModalStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
            <div className="adtsavebtn" onClick={handleAddTeam}>
              <p className="adtp1"> Add</p>
            </div>
          </div>
        </div>
      )}
      <div className="adteamcard_wrap">
        {teamData.map((team, index) => (
          <div key={index} className="adteam_card">
            <img
              src={team.logo}
              className="adteam_card"
              alt={`${team.name} Logo`}
            />
            <p className="adteam_name">{team.name}</p>
            <button
              className="adteamcard_delbtn"
              onClick={() => handleDeleteTeam(index)}
            >
              Delete
            </button>
            <button
              className="adteamcard_updtbtn"
              onClick={() => toggleUpdateModal(index)}
            >
              Update
            </button>
            {updateModalStates[index] && (
              <div className="adtmodal-overlay">
                <div className="adtmodal">
                  <div className="adtX" onClick={closeModal}>
                    &times;
                  </div>
                  <h2 className="adt-h2">Update Team</h2>
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
                  <div className="adtsavebtn" onClick={handleAddTeam}>
                    Update
                  </div>
                </div>
              </div>
            )}
            <button className="adteamcard_playerbtn">Manage Members</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdTeam;

{
  /* <button className="admemberbtn">
<span className="span">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 23 21"
    height="21"
    width="23"
    className="svg-icon"
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="black"
      d="M1.97742 19.7776C4.45061 17.1544 7.80838 15.5423 11.5068 15.5423C15.2053 15.5423 18.5631 17.1544 21.0362 19.7776M16.2715 6.54229C16.2715 9.17377 14.1383 11.307 11.5068 11.307C8.87535 11.307 6.74212 9.17377 6.74212 6.54229C6.74212 3.91082 8.87535 1.77759 11.5068 1.77759C14.1383 1.77759 16.2715 3.91082 16.2715 6.54229Z"
    ></path>
  </svg>
</span>
<span className="lable">Add Member</span>
</button>
<div className="adt_addplayerwrap">
<Playercard />
<Playercard />
<Playercard />
<Playercard />
<Playercard />
<Playercard />
</div> */
}
