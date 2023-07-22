import "../../Styles/admin.css";

// eslint-disable-next-line react/prop-types
const CarouselCards = ({ carsel }) => {
  const handleDelete = () => {
    // Show a confirmation message before proceeding with the delete action
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      console.log("Delete button clicked!");
      // You can add your delete logic here
    }
  };

  return (
    <div className="carousel-card">
      <img src={carsel} className="carousel-card" />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default CarouselCards;
