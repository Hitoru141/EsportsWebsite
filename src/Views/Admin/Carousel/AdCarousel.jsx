import { useState } from "react";
import CarouselCards from "./Components/CarouselCards";
import uploadHandler from "src/service/carouselHandler/uploadHandler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getCarouselAPI from "src/API/carouselAPI/getCarouselAPI";
import deleteCarouselAPI from "src/API/carouselAPI/deleteCarouselAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import postCarouselAPI from "src/API/carouselAPI/postCarouselAPI";

const AdCarousel = () => {
  const [images, setImages] = useState([]);
  const [fileCheck, setFileCheck] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [imageUpload, setImageUpload] = useState("");
  const queryClient = useQueryClient();

  const handleFileChange = (event) => {
    setFileCheck(true);
    const file = event.target.files[0];
    const selectedImage = {
      img_link: URL.createObjectURL(file),
    };
    setImages((prevImages) => [selectedImage, ...prevImages]);
    setImageUpload(file);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const data = await uploadHandler(imageUpload);

    //Upload the data
    const uploadMutation = useMutation({
      mutationFn: postCarouselAPI,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: "carousel" });
      },
    });
    uploadMutation();
  };

  // fetching the data
  const carouselQuery = useQuery({
    queryKey: ["carousel"],
    queryFn: getCarouselAPI,
  });

  const carousel = carouselQuery?.data;

  //Deleting the data
  const deleteMutation = useMutation({
    mutationFn: deleteCarouselAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "carousel" });
    },
  });

  return (
    <div className="adcarousel-wrap">
      <form className="form1">
        <span className="form-title">Maximum 5 carousel images</span>
        <p className="form-paragraph">File should be an image</p>
        <label htmlFor="file-input" className="drop-container">
          <span className="drop-title">
            {carousel && carousel.length > 4
              ? "Carousel Full"
              : isLoading
              ? "Uploading..."
              : "Drop Files Here"}
          </span>

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
          className="carousel_upldbtn"
          onClick={uploadImage}
          disabled={isLoading || !fileCheck}
        >
          {carousel && carousel.length > 4
            ? "Max of 5 Images"
            : isLoading
            ? "Uploading"
            : "Upload"}
        </button>
      </form>
      <ToastContainer />

      {carousel ? (
        <div className="previmg-wrap">
          {carousel.map((data) => (
            <CarouselCards key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <div>Loading carousel data...</div>
      )}
    </div>
  );
};

export default AdCarousel;
