import { useState } from "react";
import "../../../../Styles/cards.css";
import ViewTeams from "../ViewTeams/ViewTeams";

const AdTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamData, setTeamData] = useState([]);

  const [imagePreview, setImagePreview] = useState(null);
  const [bannerImagePreview, setBannerImagePreview] = useState(null);

  /**
   * The above code defines two functions, `toggleModal` and `closeModal`, which are used to control the
   * state of a modal in a React component.
   */
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**
   * The above code defines two functions, handleImageUpload and handleBannerImageUpload, which handle
   * the upload of an image file and set the image preview accordingly.
   */
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

  const handleBannerImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBannerImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * The function `handleAddTeam` adds a new team to the `teamData` array if the team name input, image
   * preview, and banner image preview are all provided.
   */
  const handleAddTeam = () => {
    const teamNameInput = document.querySelector(".adtinput");
    if (teamNameInput.value && imagePreview && bannerImagePreview) {
      const newTeam = {
        name: teamNameInput.value,
        logo: imagePreview,
        banner: bannerImagePreview,
      };
      setTeamData([...teamData, newTeam]);
      closeModal();
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
        <div className="addteam-modal-overlay">
          <div className="addteam-modal ">
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
            <div className="adtbanner_container">
              {/* This code is conditionally rendering either a "Reupload Team Banner" button and an
              image preview of the uploaded banner, or an "Upload Team Banner" button, based on
              whether `bannerImagePreview` has a value or not.  */}
              {bannerImagePreview ? (
                <>
                  <button className="add-button">
                    <label htmlFor="bannerImageInput">
                      Reupload Team Banner
                    </label>
                    <input
                      id="bannerImageInput"
                      type="file"
                      accept="image/*"
                      onChange={handleBannerImageUpload}
                    />
                  </button>

                  <img
                    src={bannerImagePreview}
                    alt="Uploaded Team Banner"
                    className="adtbanner_container"
                  />
                </>
              ) : (
                <>
                  <button className="add-button">
                    <label htmlFor="bannerImageInput">Upload Team Banner</label>
                    <input
                      id="bannerImageInput"
                      type="file"
                      accept="image/*"
                      onChange={handleBannerImageUpload}
                    />
                  </button>
                </>
              )}
            </div>
            <div className="adt-img">
              {/* This code is conditionally rendering either a "Reupload Team Logo" button and an image
             preview of the uploaded logo, or an "Upload Team Logo" button, based on whether
             `imagePreview` has a value or not.  */}

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
      <ViewTeams />
    </div>
  );
};

export default AdTeam;
