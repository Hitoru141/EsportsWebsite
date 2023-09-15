import "src/Styles/admin.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import deleteCarousel from "src/service/carouselHandler/deleteHandler";

// eslint-disable-next-line react/prop-types
const CarouselCards = ({ data }) => {
  const handleDelete = () => {
    // Show a confirmation message before proceeding with the delete action
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      deleteCarousel(data);
    }
  };

  return (
    <div className="carousel-card">
      <img src={data.img_link} className="carousel-card" />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <ToastContainer />
    </div>
  );
};

export default CarouselCards;
