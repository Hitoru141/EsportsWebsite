import { useState } from "react";
import "../../../../Styles/cards.css";
import ViewTeams from "../ViewTeams/ViewTeams";
import UploadHandler from "../../../../service/imageUploadService";
import submitTeam from "./postTeam";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamName, setTeamName] = useState("");

  const [imagePreview, setImagePreview] = useState(null);
  const [bannerImagePreview, setBannerImagePreview] = useState(null);

  const [bannerFile, setBannerFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBannerImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setBannerFile(file);
    }
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    setLogoFile(file);
  };

  // FUNCTION BELOW WILL WAIT FOR FILE UPLOADS TO RETURN DOWNLOAD URL, THEN AXIOS.POST THE TEAM DATA TO THE DATABASE
  const submitTeamData = async () => {
    if (!uploading) {
      if (bannerFile && logoFile && teamName) {
        try {
          setUploading(true);
          const bannerURL = await UploadHandler(bannerFile, "teamBanner");
          const logoURL = await UploadHandler(logoFile, "teamLogo");

          submitTeam(teamName, bannerURL, logoURL);
          setUploading(false);
          setIsModalOpen(false);
          //
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Please fill all the fields");
      }
    } else {
      alert("Please wait for the images to upload");
    }
  };

  return (
    <div className="adcarousel-wrap">
      {/* Button Start*/}
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
      {/* Button End*/}

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
              required
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
                  onChange={handleBannerChange}
                />
              </button>
            </div>
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
                  onChange={handleLogoChange}
                />
              </button>
            </div>
            <div className="adtsavebtn" onClick={submitTeamData}>
              <p className="adtp1"> {uploading ? "Uploading..." : "Add"}</p>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
      <ViewTeams />
    </div>
  );
};

export default AdTeam;
