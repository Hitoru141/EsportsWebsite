import React, { useState } from "react";

const UpdateTeams = ({ team }) => {
  const [isModal, setIsModal] = useState(false);
  const [teamInfo, setTeamInfo] = useState({
    teamBannerURL: team.teamBannerURL,
    teamLogoURL: team.teamLogoURL,
    teamName: team.teamName,
  });

  const handleNewData = (event) => {
    const file = event;
    console.log(file);
  };

  return (
    <div>
      <div>
        <button className="adteamcard_updtbtn" onClick={() => setIsModal(true)}>
          Update Team
        </button>
      </div>
      {isModal && (
        <div className="addteam-modal-overlay">
          <div className="addteam-modal ">
            <div className="adtX" onClick={() => setIsModal(false)}>
              &times;
            </div>
            <h2 className="adt-h2">Update Team</h2>
            <input
              id="teamName"
              placeholder="Team Name"
              type="text"
              required
              className="adtinput"
              value={teamInfo.teamName}
              onChange={(e) => handleNewData(e.target.value)}
            />
            <div className="adtbanner_container">
              {/* This code is conditionally rendering either a "Reupload Team Banner" button and an
              image preview of the uploaded banner, or an "Upload Team Banner" button, based on
              whether `bannerImagePreview` has a value or not.  */}
              {teamInfo.teamBannerURL && (
                <img
                  src={teamInfo.teamBannerURL}
                  alt="Upload Team Banner"
                  className="adtbanner_container"
                />
              )}
              <button className="add-button">
                <label htmlFor="bannerImageInput">
                  {teamInfo.teamBannerURL ? "Replace file" : "Choose file"}
                </label>
                <input
                  id="bannerImageInput"
                  type="file"
                  accept="image/*"
                  //   onChange={handleBannerChange}
                />
              </button>
            </div>
            <div className="adt-img">
              {/* This code is conditionally rendering either a "Reupload Team Logo" button and an image
             preview of the uploaded logo, or an "Upload Team Logo" button, based on whether
             `imagePreview` has a value or not.  */}

              {teamInfo.teamLogoURL && (
                <div className="image-preview">
                  <img
                    src={teamInfo.teamLogoURL}
                    alt="Uploaded Team Logo"
                    className="adtimg"
                  />
                </div>
              )}

              <button className="add-button">
                <label htmlFor="imageInput">
                  {teamInfo.teamLogoURL ? "Replace file" : "Choose file"}
                </label>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  //   onChange={handleLogoChange}
                />
              </button>
            </div>
            {/* <div className="adtsavebtn" onClick={submitTeamData}>
              <p className="adtp1"> {uploading ? "Uploading..." : "Add"}</p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateTeams;
