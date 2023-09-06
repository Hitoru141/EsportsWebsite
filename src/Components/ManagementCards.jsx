import "../Styles/main.css";
const ManagementCards = ({ name, designation, imageProf }) => {
  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile-pic">
          <img className="profile-pic-image" src={imageProf} />
        </div>
        <h3 className="profile-name">{name}</h3>
        <h3 className="profile-designation">{designation}</h3>
      </div>
    </div>
  );
};

export default ManagementCards;
