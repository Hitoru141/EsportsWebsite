import { useState, useEffect } from "react";
import CarouselCards from "./CarouselCards";

const AdCarousel = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const selectedImages = [];

    // Loop through the uploaded files and push them to the selectedImages array
    for (let i = 0; i < fileList.length; i++) {
      selectedImages.push(URL.createObjectURL(fileList[i]));
    }

    setImages((prevImages) => [...selectedImages, ...prevImages]);
  };

  useEffect(() => {
    fetch("https://astraeus-firebase-endpoints.onrender.com/getCarousel")
      .then((response) => response.json())
      .then((data) => {
        const imageLinks = data.map((item) => item.img_link);
        setImages(imageLinks);
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
          <span className="drop-title">Drop files here</span>
          or
          <input
            type="file"
            accept="image/*"
            required
            id="file-input"
            multiple
            onChange={handleFileChange}
          />
        </label>
      </form>
      <div className="previmg-wrap">
        {[...Array(images.length)].map((_, index) => (
          <CarouselCards key={index} carsel={images[index] || null} />
        ))}
      </div>
    </div>
  );
};

export default AdCarousel;
