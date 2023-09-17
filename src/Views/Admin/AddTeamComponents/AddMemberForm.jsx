import { useState } from "react";

const AddMemberModal = ({ isModalOpen, closeModal }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    isModalOpen && (
      <div className="addmember-modal_overlay">
        <div className="addmember-modal-form">
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
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* Name Input */}
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          {/* Profile Type */}
          <label htmlFor="profileType">Profile Type</label>
          <select id="profileType" name="profileType">
            <option value="player">Player</option>
            <option value="coach">Coach</option>
            <option value="manager">Manager</option>
          </select>

          {/* Address Input */}
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />

          {/* Social Links */}
          <label>Social Links</label>
          <input type="text" placeholder="Discord" name="discord" />
          <input type="text" placeholder="Facebook" name="facebook" />
          <input type="text" placeholder="Twitch" name="twitch" />

          {/* Submit Button */}
          <button className="admemberbtn" type="submit">
            Add Member
          </button>
        </div>
      </div>
    )
  );
};

export default AddMemberModal;
