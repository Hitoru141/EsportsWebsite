import { useState } from "react";
import "../../../../Styles/cards.css";
import ViewTeams from "../ViewTeams/ViewTeams";
import bannerUploadHandler from "../../../../service/bannerHandler/bannerUploadHandler";
import logoUploadHandler from "../../../../service/logoHandler/logoUploadHandler";
import submitTeam from "./postTeam";

const AdTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamData, setTeamData] = useState([]);
  const [teamName, setTeamName] = useState("");

  const [imagePreview, setImagePreview] = useState(null);
  const [bannerImagePreview, setBannerImagePreview] = useState(null);

  const [teamAdding, setTeamAdding] = useState(false);

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

  const { setImageUpload, uploadFile, isLoading, bannerURL } =
    bannerUploadHandler();
  /** Code Above is the Handler for Banner Uploads.  It will return the Image File's downloadURL and put it into bannerURL.*/

  const { LOGO_setImageUpload, LOGO_uploadFile, LOGO_isLoading, logoURL } =
    logoUploadHandler();
  /** Code Above is the Handler for Logo Uploads. It will return the Image File's downloadURL and put it into logoURL. */

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    LOGO_setImageUpload(file);
  };

  const handleBannerImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBannerImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setImageUpload(file);
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

  // FUNCTION BELOW WILL AXIOS.POST THE TEAM DATA TO THE DATABASE
  const submitTeamData = () => {
    if (teamName && bannerURL && logoURL) {
      submitTeam(teamName, bannerURL, logoURL);
    } else {
      window.alert("Please fill all the fields");
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
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <div className="adtbanner_container">
              {/* This code is conditionally rendering either a "Reupload Team Banner" button and an
              image preview of the uploaded banner, or an "Upload Team Banner" button, based on
              whether `bannerImagePreview` has a value or not.  */}
              {bannerImagePreview && (
                <img
                  src={bannerImagePreview}
                  alt="Upload Team Banner"
                  className="adtbanner_container"
                />
              )}
              <button className="add-button">
                <label htmlFor="bannerImageInput">
                  {bannerImagePreview ? "Replace file" : "Choose file"}
                </label>
                <input
                  id="bannerImageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleBannerImageUpload}
                />
              </button>
            </div>
            <button className="btn_uploadfile" onClick={uploadFile}>
              {isLoading ? "Uploading..." : bannerURL ? "Resubmit" : "Submit"}
            </button>
            <div className="adt-img">
              {/* This code is conditionally rendering either a "Reupload Team Logo" button and an image
             preview of the uploaded logo, or an "Upload Team Logo" button, based on whether
             `imagePreview` has a value or not.  */}

              {imagePreview && (
                <div className="image-preview">
                  <img
                    src={imagePreview}
                    alt="Uploaded Team Logo"
                    className="adtimg"
                  />
                </div>
              )}

              <button className="add-button">
                <label htmlFor="imageInput">
                  {imagePreview ? "Replace file" : "Choose file"}
                </label>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </button>
            </div>
            <button className="btn_uploadfile" onClick={LOGO_uploadFile}>
              {LOGO_isLoading
                ? "Uploading..."
                : logoURL
                ? "Resubmit"
                : "Submit"}
            </button>
            <div className="adtsavebtn" onClick={submitTeamData}>
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
