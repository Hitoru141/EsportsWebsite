import { useState } from "react";
import UploadHandler from "../../../../service/imageUploadService";
import submitTeam from "../Addteam/postTeam";
import { appSettings } from "../../../../Appdata/appdata";
import axios from "axios";

const UpdateTeamForm = ({ closeModal, team }) => {
  const [teamName, setTeamName] = useState(team.teamName);
  const [imagePreview, setImagePreview] = useState(team.teamLogoURL);
  const [bannerImagePreview, setBannerImagePreview] = useState(
    team.teamBannerURL
  );
  const [bannerFile, setBannerFile] = useState(bannerImagePreview);
  const [logoFile, setLogoFile] = useState(imagePreview);
  const [uploading, setUploading] = useState(false);

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

  // https://astraeus-firebase-endpoints.onrender.com/teams/IdmFEq8kCVMUzirR9zbZ

  // FUNCTION BELOW WILL WAIT FOR FILE UPLOADS TO RETURN DOWNLOAD URL, THEN AXIOS.POST THE TEAM DATA TO THE DATABASE
  const submitTeamData = async () => {
    if (!uploading) {
      if (bannerFile && logoFile && teamName) {
        try {
          setUploading(true);
          const bannerURL = await UploadHandler(bannerFile, "teamBanner");
          console.log(`Banner uploaded`);
          const logoURL = await UploadHandler(logoFile, "teamLogo");
          console.log(`Logo uploaded`);
          console.log(team.id);
          const data = await axios.put(`${appSettings.teams}/${team.id}`, {
            teamName: teamName,
            bannerURL: bannerURL,
            logoURL: logoURL,
            id: team.id,
          });
          // const data = await axios.put(
          //   `http://localhost:3001/teams/${team.id}`,
          //   {
          //     teamName: teamName,
          //     bannerURL: bannerURL,
          //     logoURL: logoURL,
          //     id: team.id,
          //   }
          // );
          console.log(`Data Uploaded`);

          console.log(data);
          setUploading(false);
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
    <div className="addteam-modal-overlay">
      <div className="addteam-modal ">
        <div className="adtX" onClick={closeModal}>
          &times;
        </div>
        <h2 className="adt-h2">Update Team</h2>
        <input
          placeholder={`${team.teamName}`}
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
          <p className="adtp1"> {uploading ? "Updating..." : "Update"}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateTeamForm;
