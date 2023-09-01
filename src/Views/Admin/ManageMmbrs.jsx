import { useState } from "react";

const ManageMmbrs = () => {
  const [bannerImage, setBannerImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mteam_wrapper">
      <div className="adt_teambanner">
        <div className="banner-container">
          {bannerImage ? (
            <img
              src={bannerImage}
              alt="Team Banner"
              className="team-banner-image"
            />
          ) : (
            <button className="cssbuttons-io-button">
              <label htmlFor="banner-upload">
                <svg
                  viewBox="0 0 640 512"
                  fill="white"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..." />
                </svg>
                <span>Upload Team Banner</span>
              </label>
              <input
                type="file"
                id="banner-upload"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMmbrs;
