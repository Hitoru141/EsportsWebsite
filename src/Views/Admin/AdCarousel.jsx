import { useState, useEffect } from "react";
import CarouselCards from "./CarouselCards";
import uploadHandler from "./carouselHandler/uploadHandler";

const AdCarousel = () => {
  const { setImageUpload, uploadFile, isLoading } = uploadHandler();

  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const selectedImage = {
      img_link: URL.createObjectURL(file),
    };

    setImages((prevImages) => [selectedImage, ...prevImages]);

    setImageUpload(file);
  };

  // FETCHES THE CAROUSEL IMAGES FROM DB
  useEffect(() => {
    fetch("https://astraeus-firebase-endpoints.onrender.com/getCarousel")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="adcarousel-wrap">
      <form className="form1">
        <span className="form-title">
          Maximum {images.length} carousel images
        </span>
        <p className="form-paragraph">File should be an image</p>
        <label htmlFor="file-input" className="drop-container">
          <span className="drop-title">
            {isLoading ? "Uploading..." : "Drop files here"}
          </span>
          {/* or */}
          <input
            type="file"
            accept="image/*"
            required
            id="file-input"
            onChange={handleFileChange}
            disabled={isLoading}
          />
        </label>
        <button onClick={uploadFile} disabled={isLoading}>
          {isLoading ? "Uploading" : "Submit"}
        </button>
      </form>
      <div className="previmg-wrap" style={{ overflowX: "hidden" }}>
        {[...Array(images.length)].map((_, index) => (
          <CarouselCards key={index} carsel={images[index] || null} />
        ))}
      </div>
    </div>
  );
};

export default AdCarousel;
