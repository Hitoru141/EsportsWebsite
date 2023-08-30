import { useState, useEffect } from "react";
import CarouselCards from "./CarouselCards";
import uploadHandler from "./carouselHandler/uploadHandler";

const AdCarousel = () => {
  const { setImageUpload, setIsLoading, uploadFile, isLoading } =
    uploadHandler();
  const [images, setImages] = useState([]);
  const [fileCheck, setFileCheck] = useState(false);
  const [carouselLength, setCarouselLength] = useState(0);

  const handleFileChange = (event) => {
    setFileCheck(true);
    const file = event.target.files[0];
    const selectedImage = {
      img_link: URL.createObjectURL(file),
    };

    setImages((prevImages) => [selectedImage, ...prevImages]);

    setImageUpload(file);
  };

  // FETCHES THE CAROUSEL IMAGES FROM DB
  useEffect(() => {
    fetch("https://astraeus-firebase-endpoints.onrender.com/carousel")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setIsLoading(data.length > 4);
        setCarouselLength(data.length);
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
            {carouselLength > 4
              ? "Carousel Full"
              : isLoading
              ? "Uploading..."
              : "Drop Files Here"}
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
        <button
          onClick={uploadFile}
          disabled={isLoading || !fileCheck}
          style={{ border: "2px solid #084cdf", margin: "10px" }}
        >
          {carouselLength > 4
            ? "Max of 5 Images"
            : isLoading
            ? "Uploading"
            : "Upload"}
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
