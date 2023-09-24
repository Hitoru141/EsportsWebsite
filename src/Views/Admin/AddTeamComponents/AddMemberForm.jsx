import { useState } from "react";
import UploadHandler from "../../../service/imageUploadService";
import submitMember from "../../../service/memberHandler/postMember";

const AddMemberForm = ({ closeModal }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [memberData, setMemberData] = useState({
    name: "",
    IGN: "",
    profileType: "player",
    address: "",
    discord: "",
    facebook: "",
    twitch: "",
    profileImageURL: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
      setProfileFile(file);
    } else {
      setProfileImage("");
    }
  };

  const submitData = async () => {
    if (memberData) {
      setIsLoading(true);
      const profileImageURL = await UploadHandler(profileFile, "profileImage");
      // IF I setMemberData({...memberData, profileImageURL: profileImageURL})
      // then submitMember(), memberData.profileImageURL will be undefined.
      const userData = { ...memberData, profileImageURL: profileImageURL };
      await submitMember(userData);
      setIsLoading(false);
    } else {
      alert("IGN, Name, Profile Picture, Address are Required");
    }
  };

  // CODE BELOW WILL PUT ALL THE VARIABLES IN THE RQUEST BODY

  const onChangeMember = (e) => {
    const newMember = { ...memberData };
    newMember[e.target.id] = e.target.value;
    setMemberData(newMember);
  };

  return (
    <div className="addmember-modal_overlay">
      <div className="addmember-modal-form ">
        <div className="exit_modal" onClick={closeModal}>
          &times;
        </div>
        {/* File Upload for Profile Image */}
        <div className="circle">
          <img
            src={
              profileImage ||
              "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128"
            }
            alt="Profile Img"
            className="circle-img"
          />
        </div>
        <label htmlFor="profileImage">Profile Image</label>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* Name Input */}

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => onChangeMember(e)}
          />

          {/* IGN */}
          <label htmlFor="ign">IGN</label>
          <input
            type="text"
            id="IGN"
            name="ign"
            onChange={(e) => onChangeMember(e)}
            placeholder="IGN"
            required
          />
          {/* Profile Type */}

          <label htmlFor="profileType">Profile Type</label>
          <select
            id="profileType"
            name="profileType"
            onChange={(e) => onChangeMember(e)}
          >
            <option value="player">Player</option>
            <option value="coach">Coach</option>
            <option value="manager">Manager</option>
          </select>

          {/* Address Input */}

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(e) => onChangeMember(e)}
          />

          {/* Social Links */}

          <label>Social Links</label>
          <input
            type="url"
            placeholder="Discord Link"
            name="discord"
            id="discord"
            onChange={(e) => onChangeMember(e)}
          />
          <input
            type="url"
            placeholder="Facebook Link"
            name="facebook"
            id="facebook"
            onChange={(e) => onChangeMember(e)}
          />
          <input
            type="url"
            placeholder="Twitch Link"
            name="twitch"
            id="twitch"
            onChange={(e) => onChangeMember(e)}
          />

          {/* Submit Button */}

          <button
            className="admemberbtn"
            onClick={submitData}
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemberForm;
