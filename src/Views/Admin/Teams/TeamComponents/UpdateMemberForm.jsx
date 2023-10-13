import { useState } from "react";
import UploadHandler from "../../../../service/imageUploadService";
import updateMemberAPI from "../../../../API/teamsAPI/updateMemberAPI";

const AddMemberForm = ({ closeModal, member }) => {
  const [profileImage, setProfileImage] = useState(member.profileImageURL); //This is for the profile preview
  const [profileFile, setProfileFile] = useState(null); //This is for the file upload [Firebase
  const [isLoading, setIsLoading] = useState(false);

  const [memberData, setMemberData] = useState({
    name: member.name,
    IGN: member.IGN,
    profileType: member.profileType,
    address: member.address,
    discord: member.discord,
    facebook: member.facebook,
    twitch: member.twitch,
    teamName: member.teamName,
    profileImageURL: member.profileImageURL,
  });

  console.log(member.profileImageURL);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); //Set new Profile Image
      };
      reader.readAsDataURL(file);
      setProfileFile(file);
    } else {
      setProfileImage("");
    }
  };

  const submitData = async () => {
    if (memberData) {
      try {
        setIsLoading(true);
        const profileImageURL = await UploadHandler(
          profileFile,
          "profileImage"
        ); //Firebase Upload Handler
        console.log(profileImageURL);
        setMemberData({
          ...memberData,
          profileImageURL: profileImageURL,
        });
        const data = await updateMemberAPI(member.id, memberData); //Update Member API
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        setMemberData({
          ...memberData,
        });
        const data = await updateMemberAPI(member.id, memberData); //Update Member API
        console.log(data);
        setIsLoading(false);
      }

      //Set the new data for axios

      // try {
      // } catch (err) {
      //   console.log(err);
      // }
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
        <h3>Update Member</h3>
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
            defaultValue={member.name}
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
            defaultValue={member.IGN}
          />
          {/* Profile Type */}

          <label htmlFor="profileType">Profile Type</label>
          <select
            id="profileType"
            name="profileType"
            onChange={(e) => onChangeMember(e)}
            defaultValue={member.profileType}
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
            defaultValue={member.address}
            onChange={(e) => onChangeMember(e)}
          />

          {/* Social Links */}

          <label>Social Links</label>
          <input
            type="url"
            placeholder="Discord Link"
            name="discord"
            id="discord"
            defaultValue={member.discord}
            onChange={(e) => onChangeMember(e)}
          />
          <input
            type="url"
            placeholder="Facebook Link"
            name="facebook"
            id="facebook"
            defaultValue={member.facebook}
            onChange={(e) => onChangeMember(e)}
          />
          <input
            type="url"
            placeholder="Twitch Link"
            name="twitch"
            id="twitch"
            defaultValue={member.twitch}
            onChange={(e) => onChangeMember(e)}
          />

          {/* Submit Button */}

          <button
            className="admemberbtn"
            onClick={submitData}
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Update Member"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemberForm;
