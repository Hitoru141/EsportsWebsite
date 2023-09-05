import { useState } from "react";
import sampleBanner from "../../../assets/MLNbanner.jpg";
import "../../../Styles/admin.css";
import MembersCard from "./MembersCard";

const ManageMembers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    if (
      !isModalOpen ||
      window.confirm(
        "Are you sure you want to close? Unsaved changes will be lost."
      )
    ) {
      setIsModalOpen(false);
    }
  };

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

  const membersArray = [
    {
      memberName: "TAKERU SATOH",
      memberProfileType: "PLAYER",
      memberAddress: "TOKYO, JAPAN",
      discordLink: "https://discord.com",
      fbLink: "https://fb.com",
      twitchLink: "https://twitch.com",
    },
  ];

  return (
    <>
      <div className="mteam_wrapper">
        <div className="adt_teambanner">
          <img src={sampleBanner} className="adt_teambanner-img" alt="Banner" />
        </div>
        <button className="admemberbtn" onClick={toggleModal}>
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
        {isModalOpen && (
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
        )}
        {/* MAP  MEMBERCARDS INSIDE THIS DIV CONTAINER  */}
        <div className="adt_addplayerwrap">
          {membersArray.map((member, index) => (
            <MembersCard key={index} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageMembers;
